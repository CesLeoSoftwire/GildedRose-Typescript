import {expect} from 'chai';
import {Item, GildedRose} from '../app/gilded-rose';

describe('Aged Brie', function () {

    it('when 1 day passes quality increases (by 1 or 2)', function () {
        const gildedRose = new GildedRose([
            new Item('Aged Brie', 17, 20),
            new Item('Aged Brie', -17, 20)]);

        const expectedItems = [
            new Item('Aged Brie', 16, 21),
            new Item('Aged Brie', -18, 22)];

        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('2 days pass quality increases (by 2 or 4)', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 10, 10),
            new Item('Aged Brie', -2, 10)]);

        const expectedItems = [new Item('Aged Brie', 8, 12),
            new Item('Aged Brie', -4, 14)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });

    it('3 days pass quality increases (by 3 or 6)', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 18, 26),
            new Item('Aged Brie', -18, 26)]);

        const expectedItems = [new Item('Aged Brie', 15, 29),
            new Item('Aged Brie', -21, 32)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        const items3 = gildedRose.updateQuality();
        expect(items3).to.eql(expectedItems);
    });


    it('1 day passes from sellIn=0 => 2 increase', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);
        const expectedItems = [new Item('Aged Brie', -1, 12)];
        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('1 day passes from sellIn=-1 => 2 increase', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', -1, 10)]);
        const expectedItems = [new Item('Aged Brie', -2, 12)];
        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('2 days pass from sellIn=0 => 4 increase', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 26)]);
        const expectedItems = [new Item('Aged Brie', -2, 30)];
        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });

    it('3 days pass from sellIn=1 => 5 increase', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 26)]);
        const expectedItems = [new Item('Aged Brie', -2, 31)];
        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        const items3 = gildedRose.updateQuality();
        expect(items3).to.eql(expectedItems);
    });

    it('1 day stay within limits', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);
        const expectedItems = [new Item('Aged Brie', 4, 50)];
        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('2 days stay within limits', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 6, 50)]);
        const expectedItems = [new Item('Aged Brie', 4, 50)];
        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });


    it('3 days stay within limits', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 7, 50)]);
        const expectedItems = [new Item('Aged Brie', 4, 50)];
        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        const items3 = gildedRose.updateQuality();
        expect(items3).to.eql(expectedItems);
    });


});
