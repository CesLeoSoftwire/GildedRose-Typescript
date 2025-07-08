import {expect} from 'chai';
import {Item, GildedRose} from '../app/gilded-rose';

describe('Conjured Mana Cake', function () {

    it('when 1 day passes quality decreases (by 1 or 2)', function () {
        const gildedRose = new GildedRose([
            new Item('Conjured Mana Cake', 17, 20),
            new Item('Conjured Mana Cake', -17, 20)]);

        const expectedItems = [
            new Item('Conjured Mana Cake', 16, 18),
            new Item('Conjured Mana Cake', -18, 16)];

        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('2 days pass quality decreases (by 4 or 8)', function () {
        const gildedRose = new GildedRose([
            new Item('Conjured Mana Cake', 10, 10),
            new Item('Conjured Mana Cake', -2, 10)]);

        const expectedItems = [
            new Item('Conjured Mana Cake', 8, 6),
            new Item('Conjured Mana Cake', -4, 2)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });

    it('3 days pass quality decreases (by 6 or 12)', function () {
        const gildedRose = new GildedRose([
            new Item('Conjured Mana Cake', 18, 26),
            new Item('Conjured Mana Cake', -18, 26)]);

        const expectedItems = [
            new Item('Conjured Mana Cake', 15, 20),
            new Item('Conjured Mana Cake', -21, 14)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        const items3 = gildedRose.updateQuality();
        expect(items3).to.eql(expectedItems);
    });


    it('1 day passes from sellIn=0 => 4 decrease', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 10)]);
        const expectedItems = [new Item('Conjured Mana Cake', -1, 6)];
        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('1 day passes from sellIn=-1 => 4 decrease', function () {
        const gildedRose = new GildedRose([new Item('Conjured Mana Cake', -1, 10)]);
        const expectedItems = [new Item('Conjured Mana Cake', -2, 6)];
        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('not going below 0', function () {
        const gildedRose = new GildedRose([
            new Item('Conjured Mana Cake', 17, 1),
            new Item('Conjured Mana Cake', -17, 0)]);

        const expectedItems = [
            new Item('Conjured Mana Cake', 15, 0),
            new Item('Conjured Mana Cake', -19, 0)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });

});
