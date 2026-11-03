export const exploreStages=[
 ['First things first...','Place your phone in the trolley’s wireless charging cradle and activate Explore Mode. Your phone will now charge as it accompanies you for the trip.','Connect'],
 ['Getting your bearings','BLE beacons combined with existing digital price labels estimate your location. Approximate positioning helps Olive offer relevant guidance.','Locate'],
 ['Looking for something?','Choose an ingredient and Olive will provide the location of the ingredient with a suggested route to it. A clear aisle map keeps the directions easy to understand.','Navigate'],
 ['Scan as you go','Scan as you shop, adding each product to a running basket. Review quantities and prices as you go, rather than waiting until the end.','Scan'],
 ['One more thing...','Olive suggests recipes inspired by your preferences. See the ingredients, their prices, and where to find them. The choice to add them stays yours.','Discover'],
 ['All done!','Review your basket, complete an in-app checkout with your phone and receive an itemised receipt.','Checkout'],
] as const;
export const exploreProducts=[{id:'cream',name:'Cream cheese',aisle:'Dairy · Aisle 2',cents:450},{id:'biscuits',name:'Digestive biscuits',aisle:'Pantry · Aisle 6',cents:320},{id:'berries',name:'Strawberries',aisle:'Produce · Aisle 1',cents:460}] as const;
export function exploreTotal(counts:Record<string,number>){return exploreProducts.reduce((sum,p)=>sum+p.cents*(counts[p.id]||0),0);}
export const exploreMoney=(cents:number)=>`$${(cents/100).toFixed(2)}`;
