import { ArrowDown, ArrowRight } from 'lucide-react';
import { useScrollScene } from '../useScrollScene';
import { Eyebrow } from './Common';
import { CharacterSequence } from './CharacterSequence';
const moments=[
 {src:'ella-scroll',alt:'Ella looks through her phone for recipe inspiration',label:'The scroll',title:'A feed full of possibilities.',body:'Ella discovers food ideas while she scrolls. Inspiration is already part of her day.'},
 {src:'ella-recipe',alt:'Ella finds a recipe she wants to make',label:'The spark',title:'That looks like dinner.',body:'A recipe catches her eye. She saves it — but a saved video still isn’t a shopping list.'},
 {src:'ella-busy',alt:'Ella lies on the sofa with her phone, busy with study and work',label:'The friction',title:'Now, find the time.',body:'Study, work and an independent life compete for her attention. Planning a grocery shop adds another task.'},
];
export function EllaJourney(){
 const {ref,phase,setPhase}=useScrollScene();
 return <section id="gen-z" className="genz-section ella-journey wrap" ref={ref}>
  <Eyebrow number="02">THE GEN Z SHIFT</Eyebrow>
  <div className="ella-journey-heading" data-reveal><h2>Inspiration is instant.<br/><span>Life is a little busier.</span></h2><p>Meet Ella.<br/> A day in her digitally connected life.</p></div>
  <div className="scroll-story ella-story">
   <div className="story-visual ella-visual">
    <div className="ella-scene-top"><span>ELLA / GEN Z, 2031</span><span>0{phase+1} / 03</span></div>
    <div className="ella-illustration-stage"><div className="ella-scene-disc"/><CharacterSequence frames={moments} phase={phase}/></div>
    <div className="ella-scene-bottom"><p>{moments[phase].label}</p><span>SCROLL THROUGH HER DAY <ArrowDown size={13}/></span></div>
    <div className="phase-controls" aria-label="Preview Ella’s day">{moments.map((moment,i)=><button key={moment.label} className={phase===i?'selected':''} aria-label={`Preview Ella: ${moment.label}`} aria-pressed={phase===i} onClick={()=>setPhase(i)}>{i+1}</button>)}</div>
   </div>
   <div className="story-copy">{moments.map((moment,i)=><article className={`story-step ${phase===i?'in-focus':''}`} data-step={i} key={moment.label}><span className="step-number">0{i+1} / {moment.label}</span><h3>{moment.title}</h3><p>{moment.body}</p>{i===2&&<a className="text-link" href="#reel-to-meal">Give inspiration a next step <ArrowRight size={16}/></a>}</article>)}</div>
  </div>
  <div className="genz-bottom"><p>By 2031, Gen Z will be navigating more independent, time-constrained lives.<br/><strong>The opportunity: close the gap between discovery and dinner.</strong></p><div className="research-stat"><strong>69<span>%</span></strong><p>of Gen Z use social media<br/>for product discovery.</p></div><div className="research-stat"><strong>67<span>%</span></strong><p>of Gen Z want personalised<br/>content and recommendations.</p></div></div>
  <p className="source-note">Deck-reported research, pp2–4. Source footer groups seven publishers; individual attribution, sample and market are unspecified. <a href="#sources">See source context.</a></p>
 </section>;
}
