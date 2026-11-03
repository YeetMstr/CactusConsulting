import { useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Leaf, Sparkles } from 'lucide-react';
import { EllaJourney } from './components/EllaJourney';
import { TechnologyTrends } from './components/TechnologyTrends';
import { Navigation } from './components/Navigation';
import { Phone } from './components/Phone';
import { Eyebrow, Down } from './components/Common';
import { ReelExperience } from './components/ReelExperience';
import { LockerExperience } from './components/LockerExperience';
import { Beyond,Ecosystem } from './components/Ecosystem';
import { Roadmap } from './components/Roadmap';
import { BusinessCase } from './components/BusinessCase';
import { Sources } from './components/Sources';
import { usePageMotion } from './useScrollScene';
export default function App(){
 usePageMotion();
 useEffect(()=>{
  const hash=decodeURIComponent(window.location.hash.slice(1));
  if(!hash)return;
  const frame=requestAnimationFrame(()=>document.getElementById(hash)?.scrollIntoView({block:'start'}));
  return ()=>cancelAnimationFrame(frame);
 },[]);
 return <><Navigation/><main id="main"><section id="vision" className="hero dark"><div className="hero-inner wrap"><div className="hero-copy"><p className="eyebrow"><span className="hero-status"/>A CACTUS CONSULTING VISION</p><p className="hero-kicker">WOOLWORTHS 2031</p><h1>Woolworths<br/>2031<br/><span>Built around you.</span></h1><p className="hero-description">Kendrick Bui, Beatrice Chong,<br/>Matthew Choy, Jude Shen</p><a className="hero-link" href="#gen-z">Step into the future <ArrowUpRight size={19}/></a></div><div className="hero-art"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-device"><Phone hero/></div><div className="floating-note note-one"><span className="note-icon"><Sparkles size={20}/></span><div><small>FROM INSPIRATION</small><strong>To tonight’s dinner.</strong></div></div><div className="floating-note note-two"><span className="note-icon"><CheckIcon/></span><div><small>READY IN 5</small><strong>Your day. Uninterrupted.</strong></div></div><span className="hero-concept"></span></div></div><div className="hero-footer wrap"><span>CACTUS CONSULTING <i/> FUTURE OF RETAIL</span><a href="#gen-z">SCROLL TO DISCOVER <Down/></a><span>01 — 09</span></div></section>
 <EllaJourney/><TechnologyTrends/>
 <ReelExperience/><Beyond/><LockerExperience/><Ecosystem/><Roadmap/><BusinessCase/>
 <section className="closing-section"><div className="wrap"><Eyebrow number="09">THE FUTURE IS READY</Eyebrow><h2>The future of shopping<br/>moves <em>with you.</em></h2><div className="closing-products"><a href="#reel-to-meal"><Leaf size={22}/><span>Reel to Meal</span><ArrowUpRight size={20}/></a><a href="#ready-in-5"><span className="five-icon">5</span><span>Ready in 5</span><ArrowUpRight size={20}/></a></div><p className="closing-wordmark" data-reveal>woolworths<span>2031</span></p><p className="closing-line">A plan for a Gen Z future.</p><a className="text-link" href="#reel-to-meal">Explore the solutions <ArrowRight size={17}/></a></div></section><Sources/></main><footer className="site-footer wrap"><div className="cactus-credit"><img src={`${import.meta.env.BASE_URL}assets/cactus.webp`} alt="Cactus Consulting" loading="lazy"/><p>Kendrick Bui · Jude Shen<br/>Matthew Choy · Beatrice Chong</p></div><p>Independent case competition concept.<br/>2031 vision · FY34 modelled outcomes.</p><a href="#vision">Back to the future <ArrowUpRight size={15}/></a></footer></>;
}
function CheckIcon(){return <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="m8 12 3 3 5-6"/></svg>;}
