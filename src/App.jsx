import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import LocalityPage from './pages/LocalityPage'
import PostFormPage from './pages/PostForm'
import ProjectPage from './pages/Project'
import PropertiesPage from './pages/Properties'
import PropertyDetailPage from './pages/PropertyDetail'
import ServicePage from './pages/ServicePage'
import TestimonialsPage from './pages/Testimonials'
import ToolsPage from './pages/Tools'
import HomePage from './pages/home/Home'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className={pathname === '/' ? 'is-home' : 'with-header'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:slug" element={<PropertyDetailPage />} />
          <Route path="/localities/:slug" element={<LocalityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/aashray-elegance" element={<ProjectPage />} />
          <Route path="/post-property" element={<PostFormPage />} />
          <Route path="/post-requirement" element={<PostFormPage />} />
          <Route path="/emi-calculator" element={<ToolsPage />} />
          <Route path="/area-converter" element={<ToolsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
