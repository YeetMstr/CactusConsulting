import { ArrowUpRight, ArrowDown, Leaf, Plus, Check } from 'lucide-react';
import type { ReactNode } from 'react';
export function Eyebrow({number,children}:{number:string;children:ReactNode}){return <p className="eyebrow"><span>{number}</span>{children}</p>;}
export function ArrowLink({href,children,light=false}:{href:string;children:ReactNode;light?:boolean}){return <a className={`action ${light?'action-light':''}`} href={href}>{children}<ArrowUpRight size={17}/></a>;}
export function Sprout({size=22}:{size?:number}){return <Leaf size={size} strokeWidth={1.6}/>;}
export function Down(){return <ArrowDown size={17}/>;}
export function ProductMark({kind}:{kind:string}){return <span className={`product-mark ${kind}`} aria-hidden="true">{kind==='tomato'?<i/>:kind==='pasta'?<><i/><i/><i/></>:kind==='pesto'?<Leaf size={20}/>:<span>100g</span>}</span>;}
export function PlusMark({done=false}:{done?:boolean}){return done?<Check size={15}/>:<Plus size={15}/>;}
