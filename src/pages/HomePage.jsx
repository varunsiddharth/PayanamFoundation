import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Programs from '../components/sections/Programs'
import Impact from '../components/sections/Impact'
import Donate from '../components/sections/Donate'
import Testimonials from '../components/sections/Testimonials'
import Gallery from '../components/sections/Gallery'
import Newsletter from '../components/sections/Newsletter'
import Contact from '../components/sections/Contact'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Donate />
      <Testimonials />
      <Gallery />
      <Newsletter />
      <Contact />
    </div>
  )
}

export default HomePage

