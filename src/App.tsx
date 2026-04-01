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
import { DetailPage } from './pages/DetailPage'
import { contactPhone, contactTel, detailPages } from './data/siteContent'

function PageWrapper({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">{children}</main>
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#333333]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/reviews" element={<PageWrapper><ReviewsPage /></PageWrapper>} />
        <Route path="/promotions" element={<PageWrapper><PromotionsPage /></PageWrapper>} />
        <Route path="/quote" element={<PageWrapper><QuotePage /></PageWrapper>} />
        <Route path="/careers" element={<PageWrapper><CareersPage /></PageWrapper>} />
        {detailPages.map((page) => (
          <Route key={page.slug} path={`/${page.slug}`} element={<PageWrapper><DetailPage page={page} /></PageWrapper>} />
        ))}
        <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
      </Routes>
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
