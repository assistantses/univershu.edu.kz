#!/usr/bin/env python3
# =====================================================================
#  PDF -> SVG для страниц транскрипта в public/.
#
#  Зачем: страница /archive/:hash/:certId показывает транскрипт прямо в
#  вёрстке (без панели PDF-просмотрщика), поэтому каждая страница PDF
#  выгружается в отдельный SVG — он остаётся векторным и не мылится
#  при зоуме и печати.
#
#  Запуск (из папки frontend):   python tools/pdf-to-svg.py
#  Требуется:                    pip install pymupdf
# =====================================================================
import re
import sys
from pathlib import Path

import fitz  # pymupdf

PUBLIC = Path(__file__).resolve().parent.parent / 'public'

# Наборы страниц транскрипта: внутри документа напечатан QR-код, который ведёт
# либо на shymkentuniversity.com, либо на shymkentuniversity.kz — отсюда два
# набора файлов. Имена оставлены теми же, что у исходных PDF, порядок страниц
# задаётся в src/images.js.
SOURCES = ['final.com.pdf', 'final.com2.pdf', 'final.kz.pdf', 'final.kz2.pdf']

# Шрифты в этих PDF — пустые Type3 (невидимый текстовый слой для поиска),
# а видимый текст нарисован кривыми. Поэтому text_as_path=True обязателен:
# без него браузер не найдёт шрифт и страница будет пустой.
TEXT_AS_PATH = True

# MuPDF пишет координаты с шестью знаками после запятой, из-за чего SVG
# разрастается на пятую часть. Три знака — заметно меньше и всё ещё намного
# точнее пикселя: самая крупная система координат в этих файлах увеличена в
# 8 раз, то есть погрешность не превышает 0.024 px.
PRECISION = 3

_NUMBER = re.compile(r'-?\d+\.\d+')
_GEOMETRY_ATTR = re.compile(r'(\s(?:d|transform)=")([^"]*)"')


def _round_number(match: re.Match) -> str:
    text = f'{round(float(match.group(0)), PRECISION):.{PRECISION}f}'.rstrip('0').rstrip('.')
    return '0' if text in ('', '-0') else text


def shrink(svg: str) -> str:
    """Сокращает точность чисел, не затрагивая base64-картинки и id."""
    return _GEOMETRY_ATTR.sub(
        lambda m: m.group(1) + _NUMBER.sub(_round_number, m.group(2)) + '"',
        svg,
    )


def convert(pdf_path: Path) -> Path:
    with fitz.open(pdf_path) as doc:
        if doc.page_count != 1:
            raise SystemExit(f'{pdf_path.name}: ожидалась одна страница, получено {doc.page_count}')
        svg = doc[0].get_svg_image(text_as_path=TEXT_AS_PATH)

    svg_path = pdf_path.with_suffix('.svg')
    svg_path.write_text(shrink(svg), encoding='utf-8')
    return svg_path


def main() -> None:
    missing = [name for name in SOURCES if not (PUBLIC / name).exists()]
    if missing:
        raise SystemExit('нет исходных PDF в public/: ' + ', '.join(missing))

    for name in SOURCES:
        pdf_path = PUBLIC / name
        svg_path = convert(pdf_path)
        print(f'{name} ({pdf_path.stat().st_size // 1024} KB)'
              f' -> {svg_path.name} ({svg_path.stat().st_size // 1024} KB)')


if __name__ == '__main__':
    sys.exit(main())
