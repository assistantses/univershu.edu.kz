import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import NewsList from './pages/NewsList.jsx'
import NewsDetail from './pages/NewsDetail.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Admin from './pages/Admin.jsx'
import ContentPage from './pages/ContentPage.jsx'
import Certificate from './pages/Certificate.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/page/:key" element={<ContentPage />} />
          <Route path="/certificate/:id" element={<Certificate />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
