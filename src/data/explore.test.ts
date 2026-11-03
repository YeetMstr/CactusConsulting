import {test} from 'node:test';
import assert from 'node:assert/strict';
import {exploreTotal,exploreMoney,exploreStages} from './explore.ts';
test('Explore totals reflect repeated scans and removal in exact cents',()=>{assert.equal(exploreTotal({cream:2,biscuits:1,berries:1}),1680);assert.equal(exploreTotal({cream:0,biscuits:1,berries:1}),780);assert.equal(exploreTotal({}),0);assert.equal(exploreMoney(1230),'$12.30');});
test('Explore has six required stages in order',()=>{assert.deepEqual(exploreStages.map(x=>x[2]),['Connect','Locate','Navigate','Scan','Discover','Checkout']);});
