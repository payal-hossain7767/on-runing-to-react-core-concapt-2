
import { Suspense } from 'react'
import './App.css'
import Navber from './assets/component/navber/Navber'
import Prices from './assets/component/prices/Prices'
import { HiX } from 'react-icons/hi'
import Rechart from './assets/component/Rechat/Rechart'




const pricesPromices=fetch('./prices.json')
.then(res=>res.json())


function App() {


  return (
    <>
      <header>
        <Navber></Navber>

      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner text-accent"></span>}>
          <Prices  pricesPromices={pricesPromices}></Prices>
        </Suspense>
      </main>
      <footer>
        <Rechart></Rechart>
      </footer>

    </>
  )
}

export default App
