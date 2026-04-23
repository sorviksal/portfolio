import { Navbar } from "./layout/Navbar";
import {Hero} from "./section/Hero";
import {About} from "./section/About";
import Project from "./section/Project";
import {Experience} from "./section/Experience";
import {Testimonials} from "./section/Education";
import {Contect} from "./section/Contect";
import LoadingScreen from "./loadingPage/LoadingScreen";
import { useState } from "react";


const App = () => {
  const [loading, setLoading] = useState(true);
  return(
 <div className="min-h-screen overflow-x-hidden">
      {loading && (
        <LoadingScreen
          username="sal@gmail.com"
          onDone={() => setLoading(false)}
        />
      )}
 
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Project />
            <Experience />
            <Testimonials />
            <Contect />
          </main>
        </>
      )}
    </div>
  )
}
  
export default App;