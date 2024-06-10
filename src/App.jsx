import './App.css'
import Hero from "./components/hero_section/Hero"
import Productive from './components/productive_section/Productive'
import Banner from './components/banner_section/Banner'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Hero />
      <main className='font-open_sans'>
        <Productive />
        <Banner />
      </main>
      <Footer />
    </>
  )
}

export default App
