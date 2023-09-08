import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css'
import Home from './pages/Home';

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {

      // Horizontal scrolling
      const container = document.getElementById("container");
      const tl1 = gsap.timeline();
      
      tl1.to(container, {
          x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            end: () => "+=" + container.clientWidth,
          }
        }) 
      })

  return (
    <div>
      <div id='container'>
        <Home />
      </div>
    </div>
  )
}

export default App
