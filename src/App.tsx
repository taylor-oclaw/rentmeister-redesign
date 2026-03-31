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
import { useTheme } from './hooks/useTheme'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
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
        href="tel:+18013994633"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-amber-500/25 transition hover:bg-amber-400 md:hidden"
      >
        Call (801) 399-4633
      </a>
    </div>
  )
}

export default App
