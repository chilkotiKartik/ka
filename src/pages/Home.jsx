import React, { useState, useEffect , useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'
import SubHome from "../components/SubHome";
import Achievement from "../components/Achievement";
import AviationTabs from "../components/AviationTabs"
import EventsPage from '../components/EventsPage';
import { Routes, Route } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const homeAnimation = useRef(null)
  const hamburger = useRef(null)
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time) {

      lenis.raf(time);
      requestAnimationFrame(raf);
      }

    requestAnimationFrame(raf);
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % 3);
    }, 700); // Adjust speed as desired
    return () => clearInterval(interval);
  }, []);
  
  
  
  useGSAP(() => {
    const mainHeadingSplit = new SplitType('.main-heading', { types: 'chars' });
    const subheadingSplit = new SplitType('.subheading', { types: 'chars' });
    
    const mainChars = mainHeadingSplit.chars;
    const subChars = subheadingSplit.chars;
    
    
    const aryabhattaEnd = "ARYABHATTA".length - 1;
    const vymanikAndEnd = "ARYABHATTAVYMANIKAAND".length - 1;
    const antarikShaEnd = "ARYABHATTAVYMANIKAANDANTARIKSHA".length - 1;
    
    const mapping = [
      { 
        mainChars: [mainChars[0]], // First 'A'
        subRange: { start: 0, end: aryabhattaEnd }
      },
      { 
        mainChars: [mainChars[1]], // 'V'
        subRange: { start: aryabhattaEnd + 1, end: vymanikAndEnd }
      },
      { 
        mainChars: [mainChars[2]], // Second 'A'
        subRange: { start: vymanikAndEnd + 1, end: antarikShaEnd }
      },
      { 
        mainChars: [mainChars[3], mainChars[4], mainChars[5]], // 'SYA' (grouped)
        subRange: { start: antarikShaEnd + 1, end: subChars.length - 1 }
      }
    ];

    gsap.set(mainChars.slice(1), { color: '#555', opacity: 0.5 });
    gsap.set(subChars.slice(aryabhattaEnd + 1), { color: '#555', opacity: 0.5 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeAnimation.current,
        start: 'top top',
        end: 'bottom 0%',
        scrub: 3,
        pin: true,
      },
    });

    mapping.forEach((section, index) => {
      if (index == 0 ) return;
      tl.to(section.mainChars, {
        color: '#fff',
        opacity: 1,
        duration: 0.3,
      }, index  * 0.3);
      
      tl.to(subChars.slice(section.subRange.start, section.subRange.end + 1), {
        color: '#fff',
        opacity: 1,
        duration: 0.3,
      }, index  * 0.3); 
    });
  }, { scope: homeAnimation });
  
  return (
    <>
      {loading && (
        <div
          id="loadingPage"
          className="bg-[#161616] fixed w-full h-full flex flex-col items-center justify-center z-50"
        >
          <div className="loading flex flex-col items-center">
            <img src="/favicon.svg" alt="avasya-logo" />
            <div className="mt-12 w-[257px] ">
              <div className="text-white flex justify-center font-[600] tracking-[1.68px]">
                LOADING
              </div>
              <div className="loading-bar mt-1"></div>
            </div>
          </div>
          <div className="footer-text fixed bottom-0">
            <p className="text-[#626262] w-[590px] text-center">
              Focuses on unmanned aircraft systems and aerospace vehicles.
              Develops aviation and energy technologies.
            </p>
          </div>
        </div>
      )}

    <div className="min-h-screen bg-[#161616] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-2 md:px-6 sticky top-0 z-30 bg-[rgba(22,22,22,0.85)] backdrop-blur-md border-b border-white/10 shadow-[0_2px_16px_0_rgba(0,0,0,0.12)] py-1.5 md:py-2 transition-all duration-300">
        {/* Left: Hamburger */}
        <div className="flex-1 flex">
          <div ref={hamburger} className="w-9 h-9 hover:cursor-pointer m-1 md:m-3 flex-shrink-0">
            <div className="grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => {
                const row = Math.floor(i / 3);
                return (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 border rounded-[0.5px]"
                    style={{
                      background: row === activeRow ? "#FAFBFB" : "#2D2D2D",
                      border: row === activeRow ? "#FAFBFB" : "#2D2D2D",
                      transition: "background 0.3s"
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <img
            src="./favicon.svg"
            alt="Avasya Logo"
            className="w-20 md:w-32 transition-all duration-300"
          />
        </div>
        {/* Right: Button */}
        <div className="flex-1 flex justify-end">
          <button
            className="group flex items-center gap-2 text-xs md:text-sm font-semibold uppercase px-3 md:px-5 py-1.5 md:py-2 rounded-md bg-black text-white border border-white shadow-lg hover:bg-white hover:text-black hover:shadow-[0_0_16px_2px_rgba(255,255,255,0.2)] transition-all duration-300 focus:outline-none"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            JOIN RESEARCH TEAM
          </button>
        </div>
      </header>
      <div ref={homeAnimation}>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen overflow-hidden">
          <h1 className="main-heading text-[22vw] uppercase tracking-wide text-center leading-none text-nowrap ">
            AVASYA
          </h1>
          <p className="subheading text-[1.5rem] w-[555px] font-bold text-white-400 uppercase tracking-wide text-center ">
            Aryabhatta Vymanika and Antariksha Shastriya Society
          </p>
        </section>
      </div>
      <div>
        <SubHome />
        <Achievement />   
        <AviationTabs />
        <EventsPage/> {/* This should be here */}
      </div>
      
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aviation" element={<AviationTabs />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
    </>
  );
};

export default Home;
