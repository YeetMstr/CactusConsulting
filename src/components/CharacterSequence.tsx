export type CharacterFrame = {src:string;alt:string;label:string};
/** Keep every frame mounted so scroll changes can crossfade in either direction. */
export function CharacterSequence({frames,phase,className=''}:{frames:CharacterFrame[];phase:number;className?:string}){
 return <div className={`character-sequence ${className}`} role="img" aria-label={frames[phase].alt}>{frames.map((frame,i)=><div className={`character-frame ${phase===i?'is-active':''}`} key={`${frame.src}-${i}`} aria-hidden="true"><img src={`/assets/${frame.src}.webp`} alt="" width={600} height={500} loading="lazy" decoding="async"/></div>)}</div>;
}
