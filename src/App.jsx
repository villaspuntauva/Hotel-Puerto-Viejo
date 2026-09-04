import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Rooms from './components/Rooms.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import History from './components/History.jsx'
import Location from './components/Location.jsx'
import SurfForecast from './components/SurfForecast.jsx'
import BookingCTA from './components/BookingCTA.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Rooms />
        <Services />
        <Gallery />
        <History />
        <Location />
        <SurfForecast />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
