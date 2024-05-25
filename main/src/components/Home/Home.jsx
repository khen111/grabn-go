
import Footer from '../Footer'
import Header from '../Header'
import Banner from './Banner'
import Categories from './Categories'
import Featured from './Featured'
import Products from './Products'

function Home() {
  return (
    <div>
      <Header/>
      <Banner />
      <Featured />
      <Categories />
      <Products />
      <Footer />

    </div>
  )
}

export default Home
