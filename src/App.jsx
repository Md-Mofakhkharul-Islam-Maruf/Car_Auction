import './App.css'
import Auction from './components/Auctions/Auction'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Auction></Auction>
      <Footer></Footer>

    </>
  )
}

export default App
