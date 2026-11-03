import test from 'node:test';
import assert from 'node:assert/strict';
import {basket,total,canUnlock,money} from './demo.ts';
import {financials,years} from './strategy.ts';
test('basket preferences change products and calculate an exact illustrative total',()=>{
 const classic=basket('classic',false),plant=basket('plant',true);
 assert.equal(total(classic),12.7);assert.equal(total(plant),14.8);
 assert.equal(plant[0].name,'Wholemeal penne');assert.equal(plant[1].name,'Plant-based pesto');assert.equal(plant[3].name,'Nutritional yeast');assert.equal(money(total(classic)),'A$12.70');
});
test('collection requires a confirmed order and valid one-time PIN',()=>{
 assert.equal(canUnlock('2031',false,false),false);assert.equal(canUnlock('1234',true,false),false);assert.equal(canUnlock('2031',true,false),true);assert.equal(canUnlock('2031',true,true),false);
});
test('annual model preserves supplied chronology and FY34 projections',()=>{
 assert.equal(years.length,8);Object.values(financials).forEach(row=>assert.equal(row.length,8));
 assert.deepEqual([financials.sales[7],financials.ebitda[7],financials.ebit[7],financials.npv[7]].map(n=>Number(n.toFixed(2))),[397.68,75.62,73.21,109.72]);
 assert.equal(financials.reelOrders[7],4000);assert.equal(financials.readyOrders[7],12600);assert.equal(financials.readyStores[2],20);assert.equal(financials.readyStores[7],750);
 assert.ok(financials.gmv[7]>financials.sales[7]);assert.equal(Number(financials.ebitda[0].toFixed(2)),-1.29);assert.equal(Number(financials.npv[3].toFixed(2)),-5.10);
});
