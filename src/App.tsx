import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { AboutPage } from './pages/AboutPage'
import { ReviewsPage } from './pages/ReviewsPage'
import { PromotionsPage } from './pages/PromotionsPage'
import { QuotePage } from './pages/QuotePage'
import { CareersPage } from './pages/CareersPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { contactPhone, contactTel } from './data/siteContent'

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#333333]">
      <Header />
      <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <a
        href={`tel:${contactTel}`}
        className="fixed bottom-5 right-5 z-40 rounded-full bg-[#c0392b] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[#c0392b]/30 transition hover:bg-[#a93226] md:hidden"
      >
        Call {contactPhone}
      </a>
    </div>
  )
}

export default App
