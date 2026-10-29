
import './App.css'
import Header from './Components/Header.jsx'
import Top from './Components/Top.jsx'
import TrackRecord from './Components/TrackRecord.jsx'
import Marquee from './Components/Marquee.jsx';


function App() {
  return (
    <>
      <div className='main-cont'>
        <Header />
        {/* <main id="home">
          <h1>Welcome to Marci Metzger Homes</h1>
          <p>Your next chapter starts here.</p>
        </main> */}
        <Top />
        <TrackRecord />
        <Marquee />

      </div>

    </>
  )
}

export default App
