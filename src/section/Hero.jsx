import { useState } from "react";
import { Button } from "../components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { TechGlobe } from "./Skills";

const COLORS = [
  "#ff3b3b", "#3b82f6", "#facc15",
  "#22c55e", "#a855f7", "#06b6d4", "#f97316","#FFFFFF",
];
export const Hero = () => {
  const [dots] = useState(() =>
    Array.from({ length: 60 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 4 + 3,      // px
      opacity: Math.random() * 0.6 + 0.3,
      duration: 4 + Math.random() * 4,  // 4–10s
      delay: Math.random() * 5,         // 0–5s
    }))
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="./hero-bg3.jpg" 
          alt="Hero Image" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
      </div>

      {/* Color Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div 
            key={i}
            className="absolute rounded-full blur-[0.3px]"
            style={{
              backgroundColor: dot.color,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              opacity: dot.opacity,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Contents */}
         <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* left Column */}
                <div className="space-y-8">
                  <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                        Software Developer  
                    </span>
                    
                  </div>

                  {/* Headline */}
                  <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
                      Building the <span className="text-primary glow-text glow-pulse">future,</span>
                      <br />
                      one line of code
                      <br />
                      <span className="font-serif italic font-normal text-white">
                        at a time.
                      </span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in">
                      Hi, I'm Sor Visal - a software developer spacializing 
                      in Node JS, React, Javascript. I build scalble, performent
                      web/app application that users love.                      
                    </p>
                  </div> 

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                    <Button size="lg">
                      Contact Me <ArrowRight className="w-5 h-5"/>
                    </Button>
                    <AnimatedBorderButton/>
                  </div>
                  {/* Social Links */}
                  <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                    <span className="p-2 text-sm text-muted-foreground">Follow Me:</span>
                      {[
                        { icon: Github, href: "https://github.com/sorviksal" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/sor-viksal-88aa60397/" },
                        { icon: Instagram, href: "https://www.instagram.com/___viksal/" },
                      ].map((social, idx) => (
                        <a
                          key={idx}
                          href={social.href}
                          className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        >
                          {<social.icon className="w-5 h-5"/>}
                        </a>
                    ))}
                  </div>
                </div>
                {/* Right Column - Profile Image*/}
                <div className="relative animate-fade-in animation-delay-300">
                  {/* Profile Image */}
                  <div className="relative max-w-md mx-auto">
                    <div className=" absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse "/>
                    <div className="relative glass rounded-3xl p-2 glow-border group">
                      <img src="./IMG_3965.PNG" alt="Visal-Sor" className="w-full aspect-[4/5] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"/>

                      {/* Floating Badge */}
                      <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                            <span className="text-sm font-medium">
                              Available for work</span>
                        </div>
                      </div>
                      {/* Stats Badge */}
                      <div className=" absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-30">
                        <div className="text-2xl font-bold text-primary">8+</div>
                        <div className="text-xs text-muted-foreground">Months Exper.</div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
              {/* Skill Section */}
                    <TechGlobe />
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800"
        >
          <a href="#about"
           className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce"/>
           </a>
        </div>
    </section>
  );
};

export default Hero;
