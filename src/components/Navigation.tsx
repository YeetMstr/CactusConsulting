import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
const links=[['vision','Vision'],['reel-to-meal','Reel to Meal'],['ready-in-5','Ready in 5'],['ecosystem','Ecosystem'],['impact','Impact']];
export function Navigation(){
 const [open,setOpen]=useState(false),[active,setActive]=useState('vision');
 useEffect(()=>{
  let frame=0;
  const update=()=>{
   frame=0;const marker=window.innerHeight*.35;let current='vision';
   links.forEach(([id])=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=marker)current=id;});
   setActive(current);
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
  update();window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);
  return ()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);};
 },[]);
 return <><a className="skip-link" href="#main">Skip to content</a><header className="site-nav"><a className="wordmark" href="#vision" aria-label="Woolworths 2031 home">woolworths<span>2031</span></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="chapter-nav" aria-label={open?'Close navigation':'Open navigation'}>{open?<X/>:<Menu/>}</button><nav id="chapter-nav" aria-label="Chapters" className={open?'open':''}>{links.map(([id,label])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)} aria-current={active===id?'location':undefined}>{label}</a>)}</nav></header></>;
}
