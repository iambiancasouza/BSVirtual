import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Workflow from './components/Workflow'

const App = () => {
  return (
    <>
      <section id="/" />
      <Navbar />
      <div className="max-w-7xl mx-auto pt-14 px-6">
        <HeroSection />
        <section id="features">
          <FeatureSection />
        </section>
        <section id="workflow">
          <Workflow />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <Footer />
      </div>
      <p
        className="flex justify-center my-6 font-light text-neutral-500"
      >
        Copyright ©2024 BS Virtual
      </p>
    </>
  )
}

export default App
