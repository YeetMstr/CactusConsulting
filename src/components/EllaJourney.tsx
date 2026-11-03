import { ArrowDown, ArrowRight } from 'lucide-react';
import { useScrollScene } from '../useScrollScene';
import { Eyebrow } from './Common';
import { CharacterSequence } from './CharacterSequence';
const moments=[
 {src:'ella-scroll',alt:'Ella checks her phone for messages and inspiration before her commute',time:'7:30 AM',label:'On the way',title:'A day starts in the group chat.',body:'On her commute to uni, Ella checks messages, her timetable and a few Reels. Friends, plans and food inspiration all live on the same screen.'},
 {src:'ella-study',alt:'Ella balances study, work messages and a busy schedule',time:'9:00 AM',label:'Study. Work. Repeat.',title:'A timetable with very little spare time.',body:'Lectures, an assignment deadline and a part-time shift fill the day. Between classes, Ella wants everyday tasks to take less effort — and less of her student budget.'},
 {src:'ella-recipe',alt:'Ella discovers a recipe shared in her social feed during a lunch break',time:'12:30 PM',label:'The lunchtime scroll',title:'A Reel becomes tonight’s dinner idea.',body:'A friend shares a recipe during her lunch break. It looks easy, affordable and worth making. Ella saves it for later, alongside the other ideas in her feed.'},
 {src:'ella-scroll',alt:'Ella checks messages from her housemates and compares dinner plans',time:'5:30 PM',label:'The shared-house check-in',title:'Who’s home? What’s already in the fridge?',body:'Her housemates are sorting dinner in the chat. They need to coordinate ingredients, dietary preferences and costs without buying the same things twice.'},
 {src:'ella-marketplace',alt:'Ella enjoys her meal after choosing a multi-brand marketplace',time:'7:00 PM',label:'Dinner, on her terms',title:'Her choice goes beyond one retailer.',body:'Ella chooses a multi-brand marketplace over a single retailer, prioritising affordability, convenience and alignment with her values.'},
];
export function EllaJourney(){
 const {ref,phase,setPhase}=useScrollScene();
 return <section id="gen-z" className="genz-section ella-journey wrap" ref={ref}>
  <Eyebrow number="02">THE GEN Z SHIFT</Eyebrow>
  <div className="ella-journey-heading" data-reveal><h2>Inspiration is instant.<br/><span>Life is a little busier.</span></h2><p>Meet Ella.<br/> A day in her digitally connected life.</p></div>
  <div className="scroll-story ella-story">
   <div className="story-visual ella-visual">
    <div className="ella-scene-top"><span>ELLA / GEN Z, 2031</span><span>{moments[phase].time} / 0{phase+1} OF 0{moments.length}</span></div>
    <div className="ella-illustration-stage"><div className="ella-scene-disc"/><CharacterSequence frames={moments} phase={phase}/></div>
    <div className="ella-scene-bottom"><p>{moments[phase].label}</p><span>SCROLL THROUGH HER DAY <ArrowDown size={13}/></span></div>
    <div className="phase-controls" aria-label="Preview Ella’s day">{moments.map((moment,i)=><button key={moment.label} className={phase===i?'selected':''} aria-label={`Preview Ella: ${moment.label}`} aria-pressed={phase===i} onClick={()=>setPhase(i)}>{i+1}</button>)}</div>
   </div>
   <div className="story-copy">{moments.map((moment,i)=><article className={`story-step ${phase===i?'in-focus':''}`} data-step={i} key={moment.label}><span className="step-number">{moment.time} / {moment.label}</span><h3>{moment.title}</h3><p>{moment.body}</p>{i===moments.length-1&&<a className="text-link" href="#technology-trends">What could change her next choice? <ArrowRight size={16}/></a>}</article>)}</div>
  </div>
  <div className="genz-bottom"><p>By 2031, Gen Z will be navigating more independent, time-constrained lives.<br/><strong>The opportunity: close the gap between discovery and dinner.</strong></p><div className="research-stat"><strong>69<span>%</span></strong><p>of Gen Z use social media<br/>for product discovery.</p></div><div className="research-stat"><strong>67<span>%</span></strong><p>of Gen Z want personalised<br/>content and recommendations.</p></div></div>
  <p className="source-note">An illustrative Gen Z day in 2031. <a href="#sources">Research acknowledgements.</a></p>
 </section>;
}
