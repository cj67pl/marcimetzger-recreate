
import './App.css'
import Header from './Components/Header.jsx'
import Top from './Components/Top.jsx'
import TrackRecord from './Components/TrackRecord.jsx'
import Marquee from './Components/Marquee.jsx';
import Services from './Components/Services.jsx';
import About from './Components/About.jsx';
import Gallery from './Components/Gallery.jsx'
import CallToAction from './Components/CallToAction.jsx';
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx';

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
                <Services />
                <About />
                <Gallery />
                <CallToAction />
                <Contact />
                <Footer />
            </div>

        </>
    )
}

export default App
