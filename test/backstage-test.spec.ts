import {expect} from 'chai';
import {Item, GildedRose} from '../app/gilded-rose';

describe('Backstage passes to a TAFKAL80ETC concert', function () {

    it('when 1 day passes quality increases by 1 (over 10 sellIn)', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 17, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 13, 50)]);

        const expectedItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 16, 21),
            new Item('Backstage passes to a TAFKAL80ETC concert', 12, 50)];

        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('when 2 days pass quality increases by 2 (over 10 sellIn)', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 17, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 13, 50)]);

        const expectedItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 22),
            new Item('Backstage passes to a TAFKAL80ETC concert', 11, 50)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });

    it('when 3 days pass quality increases by 3 (over 10 sellIn)', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 17, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 13, 50)]);

        const expectedItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 14, 23),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        const items3 = gildedRose.updateQuality();
        expect(items3).to.eql(expectedItems);
    });


    it('when 1 day passes quality increases by 2 (between 6 and 10 sellIn)', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 50)]);

        const expectedItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 9, 22),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50)];

        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('when 2 days pass quality increases by 4 (between 6 and 10 sellIn)', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 50)]);

        const expectedItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 8, 24),
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });

    it('when 3 days pass quality increases by 6 (between 6 and 10 sellIn)', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 13, 50)]);

        const expectedItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 7, 26),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        const items3 = gildedRose.updateQuality();
        expect(items3).to.eql(expectedItems);
    });


    it('when 1 day passes quality increases by 3 (between 0 and 5 sellIn)', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50)]);

        const expectedItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 23),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)];

        const items = gildedRose.updateQuality();
        expect(items).to.eql(expectedItems);
    });

    it('when 2 days pass quality increases by 6 (between 0 and 5 sellIn)', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 3, 50)]);

        const expectedItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 2, 26),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        expect(items2).to.eql(expectedItems);
    });

    it('when 3 days pass quality increases by 9 (between 0 and 5 sellIn)', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 3, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50)]);

        const expectedItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 29),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        const items3 = gildedRose.updateQuality();
        expect(items3).to.eql(expectedItems);
    });

    it('when sellIn hits -1, quality is 0', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 2, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)]);

        const expectedItems = [
            new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0)];

        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        const items3 = gildedRose.updateQuality();
        expect(items3).to.eql(expectedItems);
    });

});
