import { ArrowDown } from 'lucide-react';
import { useScrollScene } from '../useScrollScene';
import { Eyebrow } from './Common';
import { CharacterSequence } from './CharacterSequence';
const moments=[
 {src:'ella-scroll',alt:'Ella checks her phone for messages and inspiration before her commute',time:'7:30 AM',label:'Finding Food Inspiration',title:'Starting the day with Social Media',body:'Gen Z will be 19-35, in university, and starting full-time working or families. On her commute to uni, Ella checks messages, her timetable and a few Reels.'},
 {src:'ella-study',alt:'Ella balances study, work messages and a busy schedule',time:'9:00 AM',label:'Too much effort',title:'She leads a busy life',body:'She is swamped with uni assignments and work. She is also not sure the store has the specific brand/item she saw. Would rather order online - Gen Z will expect personalised experiences that simplify their increasingly busy lives.'},
 {src:'ella-recipe',alt:'Ella discovers a recipe shared in her social feed during a lunch break',time:'12:30 PM',label:'Sharing videos on social media',title:'A reel becomes tonight’s dinner idea.',body:'A friend shares a recipe during her lunch break. It looks easy, affordable and worth making. Ella saves it for later.'},
 {src:'ella-scroll',alt:'Ella checks messages from her housemates about dinner plans',time:'5:30 PM',label:'Gen Z Renewed interest in communal and co-living',title:'Who’s home for dinner?',body:'Her housemates are sorting dinner in the chat. They need to coordinate ingredients, dietary preferences and costs without buying the same things twice.'},
 {src:'ella-marketplace',alt:'Ella enjoys her meal after choosing a multi-brand marketplace',time:'7:00 PM',label:'Full stomach!',title:'Her choices go beyond one retailer.',body:'Ella chooses a multi-brand marketplace over a single retailer, prioritising affordability, convenience and alignment with her values.'},
];
export function EllaJourney(){
 const {ref,phase,setPhase}=useScrollScene();
 return <section id="gen-z" className="genz-section ella-journey wrap" ref={ref}>
  <Eyebrow number="02">THE GEN Z SHIFT</Eyebrow>
  <div className="ella-journey-heading" data-reveal><h2>Day in a Life of Gen Z<br/><span>Looking Ahead</span></h2><p>Meet Ella.<br/> By 2031, Gen Z will be navigating increasingly independent and time-constrained lifestyles, relying on digital platforms to discover, plan and manage everyday needs.</p></div>
  <div className="scroll-story ella-story">
   <div className="story-visual ella-visual">
    <div className="ella-scene-top"><span>ELLA / GEN Z, 2031</span><span>{moments[phase].time} / 0{phase+1} OF 0{moments.length}</span></div>
    <div className="ella-illustration-stage"><div className="ella-scene-disc"/><CharacterSequence frames={moments} phase={phase}/></div>
    <div className="ella-scene-bottom"><p>{moments[phase].label}</p><span>SCROLL THROUGH HER DAY <ArrowDown size={13}/></span></div>
    <div className="phase-controls" aria-label="Preview Ella’s day">{moments.map((moment,i)=><button key={moment.label} className={phase===i?'selected':''} aria-label={`Preview Ella: ${moment.label}`} aria-pressed={phase===i} onClick={()=>setPhase(i)}>{i+1}</button>)}</div>
   </div>
   <div className="story-copy">{moments.map((moment,i)=><article className={`story-step ${phase===i?'in-focus':''}`} data-step={i} key={moment.label}><span className="step-number">{moment.time} / {moment.label}</span><h3>{moment.title}</h3><p>{moment.body}</p></article>)}</div>
  </div>
  <div className="genz-bottom"><p>By 2031, Gen Z will be navigating more independent, time-constrained lives.<br/><strong>The opportunity: close the gap between discovery and dinner.</strong></p><div className="research-stat"><strong>69<span>%</span></strong><p>of Gen Z use social media<br/>for product discovery.</p></div><div className="research-stat"><strong>67<span>%</span></strong><p>of Gen Z want personalised<br/>content and recommendations.</p></div></div>
  <p className="source-note"><a href="#sources">Research acknowledgements.</a></p>
 </section>;
}
