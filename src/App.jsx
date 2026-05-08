import { Navbar } from "./layout/Navbar";
import {Hero} from "./section/Hero";
import {About} from "./section/About";
import Project from "./section/Project";
import {Experience} from "./section/Experience";
import {Testimonials} from "./section/Education";
import {Contect} from "./section/Contect";
import LoadingScreen from "./loadingPage/LoadingScreen";
import { useState } from "react";
import { Helmet } from "react-helmet-async"; 

const App = () => {
  const [loading, setLoading] = useState(true);
  return(
 <div className="min-h-screen overflow-x-hidden">
       <Helmet>
        <title>Sal | Prompt Developer</title>
        <meta name="description" content="Portfolio of Sal — a frontend developer building modern web apps with React." />
        <meta name="keywords" content="Sal, React Developer, Frontend Developer, Portfolio, Web Developer" />
        <meta name="author" content="Sal" />
        <link rel="canonical" href="https://sorvisal.site" />

        {/* Open Graph (LinkedIn, Facebook previews) */}
        <meta property="og:title" content="Sal | Prompt Developer" />
        <meta property="og:description" content="Check out my portfolio — projects, experience, and more." />
        <meta property="og:url" content="https://sorvisal.site" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sorvisal.site/preview.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sal | Prompt Developer" />
        <meta name="twitter:description" content="Check out my portfolio." />
        <meta name="twitter:image" content="https://yourdomain.com/preview.png" />
      </Helmet>

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