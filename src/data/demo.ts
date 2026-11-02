export type Preference = 'classic' | 'plant';
export type DemoItem = {name:string; detail:string; price:number; kind:string};
export function basket(preference:Preference, alternative:boolean):DemoItem[]{
 return [
 {name:alternative?'Wholemeal penne':'Rigatoni',detail:'500 g · pantry essential',price:alternative?2.4:2.1,kind:'pasta'},
 {name:preference==='plant'?'Plant-based pesto':'Basil pesto',detail:preference==='plant'?'190 g · dairy-free alternative':'190 g · classic recipe',price:preference==='plant'?4.5:3.5,kind:'pesto'},
 {name:'Cherry tomatoes',detail:'250 g · fresh produce',price:3.9,kind:'tomato'},
 {name:preference==='plant'?'Nutritional yeast':'Parmesan',detail:preference==='plant'?'100 g · suggested swap':'100 g · suggested topping',price:preference==='plant'?4:3.2,kind:'cheese'},
 ];
}
export function total(items:DemoItem[]){return Math.round(items.reduce((sum,item)=>sum+item.price,0)*100)/100;}
export function canUnlock(input:string, ordered:boolean, collected:boolean){return ordered&&!collected&&input==='2031';}
export const money=(amount:number)=>`A$${amount.toFixed(2)}`;
