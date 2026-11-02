export type CharacterFrame = {src:string;alt:string;label:string};
/** Keep every frame mounted so scroll changes can crossfade in either direction. */
export function CharacterSequence({frames,phase,className=''}:{frames:CharacterFrame[];phase:number;className?:string}){
 return <div className={`character-sequence ${className}`} role="img" aria-label={frames[phase].alt}>{frames.map((frame,i)=><div className={`character-frame ${phase===i?'is-active':''}`} key={`${frame.src}-${i}`} aria-hidden="true"><img src={`/assets/${frame.src}.webp`} alt="" width={600} height={500} loading="lazy" decoding="async"/></div>)}</div>;
}
export const ellaFrames:CharacterFrame[]=[
 {src:'ella-recipe',alt:'Ella discovers a recipe she likes on her phone',label:'A recipe worth saving'},
 {src:'ella-share',alt:'Ella shares her recipe with Olive through Reel to Meal',label:'Inspiration, shared with Olive'},
 {src:'ella-share',alt:'Ella checks the recipe suggestions from Olive',label:'A little help from Olive'},
 {src:'ella-shop',alt:'Ella with a personalised bag of groceries',label:'A basket built around Ella'},
 {src:'ella-meal',alt:'Ella enjoys her finished meal',label:'From a saved Reel to dinner'},
];
