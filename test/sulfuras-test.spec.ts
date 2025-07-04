import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Sulfuras Unit Test 1 day', function () {

    it('Should stay the same sellIn positive', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 7, 80) ]);
        const expectedItems = [ new Item('Sulfuras, Hand of Ragnaros', 7, 80) ];
        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('Should stay the same sellIn 0', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const expectedItems = [ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ];
        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('Should stay the same sellIn negative', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', -34, 80) ]);
        const expectedItems = [ new Item('Sulfuras, Hand of Ragnaros', -34, 80) ];
        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

});

describe('Sulfuras Unit Test 2 days', function () {

    it('Should stay the same sellIn positive', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 7, 80) ]);
        const expectedItems = [ new Item('Sulfuras, Hand of Ragnaros', 7, 80) ];
        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });

    it('Should stay the same sellIn 0', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const expectedItems = [ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ];
        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });

    it('Should stay the same sellIn negative', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', -34, 80) ]);
        const expectedItems = [ new Item('Sulfuras, Hand of Ragnaros', -34, 80) ];
        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });

});
