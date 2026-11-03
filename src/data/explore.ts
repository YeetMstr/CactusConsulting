export const exploreStages=[
 ['Dock. Charge. Explore.','Place your phone in the trolley’s proposed charging cradle and activate Explore Mode. Your shopping companion comes along for the whole trip.','Connect'],
 ['A little context. A better shop.','With permission, Bluetooth Low Energy beacons could estimate your aisle. Approximate positioning helps Olive offer relevant guidance without claiming exact shelf-level location.','Locate'],
 ['Less searching. More finding.','Ask Olive to find an item on your list. Follow a suggested route to Aisle 2, Dairy, with clear directions to the cream cheese.','Navigate'],
 ['Scan it. Keep moving.','Scan as You Shop adds each product to a running basket. Review quantities and prices as you go, rather than waiting until the end.','Scan'],
 ['Something worth making.','As you shop, Olive highlights nearby products and suggests a classic cheesecake inspired by your preferences. Discover something new before reviewing your basket.','Discover'],
 ['Your shop, wrapped up.','Review your basket, complete a simulated in-app checkout and receive an itemised receipt. Real deployment would require store verification and supported payment systems.','Checkout'],
] as const;
export const exploreProducts=[{id:'cream',name:'Cream cheese',aisle:'Dairy · Aisle 2',cents:450},{id:'biscuits',name:'Digestive biscuits',aisle:'Pantry · Aisle 6',cents:320},{id:'berries',name:'Strawberries',aisle:'Produce · Aisle 1',cents:460}] as const;
export function exploreTotal(counts:Record<string,number>){return exploreProducts.reduce((sum,p)=>sum+p.cents*(counts[p.id]||0),0);}
export const exploreMoney=(cents:number)=>`$${(cents/100).toFixed(2)}`;
