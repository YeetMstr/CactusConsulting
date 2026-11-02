import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function useScrollScene(){
 const ref=useRef<HTMLElement>(null);
 const [phase,setPhase]=useState(0);
 useEffect(()=>{
  if(!ref.current||document.documentElement.dataset.motion==='reduce')return;
  const root=ref.current;
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   const steps=root.querySelectorAll<HTMLElement>('[data-step]');
   const updatePhase=()=>{
    let active=0;
    steps.forEach((step,i)=>{if(step.getBoundingClientRect().top<=window.innerHeight*.7)active=i;});
    setPhase(active);
   };
   ScrollTrigger.create({trigger:root,start:'top bottom',end:'bottom top',onUpdate:updatePhase,onRefresh:updatePhase});
   updatePhase();
   const visual=root.querySelector('[data-scene-visual]');
   if(visual)gsap.fromTo(visual,{rotateY:-9,scale:0.91},{rotateY:0,scale:1,ease:'none',scrollTrigger:{trigger:root,start:'top 70%',end:'bottom bottom',scrub:true}});
   const flights=root.querySelectorAll<HTMLElement>('[data-ingredient]');
   if(flights.length){
    const flight=gsap.timeline({scrollTrigger:{trigger:steps[1],start:'top 80%',endTrigger:steps[4],end:'top 65%',scrub:true}});
    flights.forEach((el,i)=>{
     const startX=[-185,175,-175,180][i],startY=[-160,-90,80,135][i];
     flight.fromTo(el,{x:startX,y:startY,opacity:0,scale:.85},{x:startX,y:startY,opacity:1,scale:1,duration:.2},i*.06);
     flight.to(el,{x:0,y:70,scale:.25,opacity:0,duration:.35,ease:'power2.inOut'},.55+i*.05);
    });
   }
   const door=root.querySelector('[data-scene-visual] .active-compartment .locker-door');
   const goods=root.querySelector('[data-scene-visual] .locker-goods');
   if(door&&goods){
    const fulfilment=gsap.timeline({scrollTrigger:{trigger:steps[1],start:'top 65%',endTrigger:steps[4],end:'top 35%',scrub:true}});
    fulfilment.set(door,{rotateY:0},0).set(goods,{x:-60,opacity:0},0)
     .to(door,{rotateY:-115,duration:.15},.15)
     .to(goods,{x:0,opacity:1,duration:.2},.28)
     .to(door,{rotateY:0,duration:.15},.52)
     .to(door,{rotateY:-115,duration:.18},.82);
   }
   return ()=>{};
  });
  const refresh=()=>ScrollTrigger.refresh();
  window.addEventListener('load',refresh);
  document.fonts.ready.then(refresh);
  return ()=>{mm.revert();window.removeEventListener('load',refresh);};
 },[]);
 return {ref,phase,setPhase};
}
export function usePageMotion(){
 useEffect(()=>{
  if(document.documentElement.dataset.motion==='reduce')return;
  const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   gsap.from('.hero-copy > *',{y:22,opacity:0,duration:0.85,stagger:0.09,ease:'power2.out'});
   gsap.to('.hero-device',{y:-65,rotate:-3,scale:1.06,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
   gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.fromTo(el,{y:30,opacity:0.35},{y:0,opacity:1,duration:0.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',toggleActions:'play none none reverse'}}));
   gsap.fromTo('.timeline-progress',{scaleY:0},{scaleY:1,transformOrigin:'top',ease:'none',scrollTrigger:{trigger:'.timeline',start:'top 65%',end:'bottom 70%',scrub:true}});
  });
  return ()=>mm.revert();
 },[]);
}
