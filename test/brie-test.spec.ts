import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Aged Brie', function () {

    describe('Increasing Quality', function () {

        describe('Positive sellIn', function () {

            it('1 day', function () {
                const gildedRose = new GildedRose([new Item('Aged Brie', 17, 20)]);
                const expectedItems = [new Item('Aged Brie', 16, 21)];
                const items = gildedRose.updateQuality();
                expect(items).to.eql(expectedItems);
            });

            it('2 days', function () {
                const gildedRose = new GildedRose([new Item('Aged Brie', 10, 10)]);
                const expectedItems = [new Item('Aged Brie', 8, 12)];
                const items1 = gildedRose.updateQuality();
                const items2 = gildedRose.updateQuality();
                expect(items2).to.eql(expectedItems);
            });

            it('3 days', function () {
                const gildedRose = new GildedRose([new Item('Aged Brie', 18, 26)]);
                const expectedItems = [new Item('Aged Brie', 15, 29)];
                const items1 = gildedRose.updateQuality();
                const items2 = gildedRose.updateQuality();
                const items3 = gildedRose.updateQuality();
                expect(items3).to.eql(expectedItems);
            });

        });

        describe('Negative sellIn', function () {

            it('1 day', function () {
                const gildedRose = new GildedRose([new Item('Aged Brie', -17, 20)]);
                const expectedItems = [new Item('Aged Brie', -18, 22)];
                const items = gildedRose.updateQuality();
                expect(items).to.eql(expectedItems);
            });

            it('2 days', function () {
                const gildedRose = new GildedRose([new Item('Aged Brie', -2, 10)]);
                const expectedItems = [new Item('Aged Brie', -4, 14)];
                const items1 = gildedRose.updateQuality();
                const items2 = gildedRose.updateQuality();
                expect(items2).to.eql(expectedItems);
            });

            it('3 days', function () {
                const gildedRose = new GildedRose([new Item('Aged Brie', -18, 26)]);
                const expectedItems = [new Item('Aged Brie', -21, 32)];
                const items1 = gildedRose.updateQuality();
                const items2 = gildedRose.updateQuality();
                const items3 = gildedRose.updateQuality();
                expect(items3).to.eql(expectedItems);
            });

        });

        describe('Positive to Negative sellIn', function () {

            it('1 day from 0', function () {
                const gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);
                const expectedItems = [new Item('Aged Brie', -1, 12)];
                const items = gildedRose.updateQuality();
                expect(items).to.eql(expectedItems);
            });

            it('1 day from -1', function () {
                const gildedRose = new GildedRose([new Item('Aged Brie', -1, 10)]);
                const expectedItems = [new Item('Aged Brie', -2, 12)];
                const items = gildedRose.updateQuality();
                expect(items).to.eql(expectedItems);
            });

            it('2 days', function () {
                const gildedRose = new GildedRose([new Item('Aged Brie', 0, 26)]);
                const expectedItems = [new Item('Aged Brie', -2, 30)];
                const items1 = gildedRose.updateQuality();
                const items2 = gildedRose.updateQuality();
                expect(items2).to.eql(expectedItems);
            });

            it('3 days', function () {
                const gildedRose = new GildedRose([new Item('Aged Brie', -3, 26)]);
                const expectedItems = [new Item('Aged Brie', -6, 32)];
                const items1 = gildedRose.updateQuality();
                const items2 = gildedRose.updateQuality();
                const items3 = gildedRose.updateQuality();
                expect(items3).to.eql(expectedItems);
            });

        });
    });

    describe('Stay within limits', function () {

        it('1 day', function () {
            const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);
            const expectedItems = [new Item('Aged Brie', 4, 50)];
            const items = gildedRose.updateQuality();
            expect(items).to.eql(expectedItems);
        });

        it('2 days', function () {
            const gildedRose = new GildedRose([new Item('Aged Brie', 6, 50)]);
            const expectedItems = [new Item('Aged Brie', 4, 50)];
            const items1 = gildedRose.updateQuality();
            const items2 = gildedRose.updateQuality();
            expect(items2).to.eql(expectedItems);
        });


        it('3 days', function () {
            const gildedRose = new GildedRose([new Item('Aged Brie', 7, 50)]);
            const expectedItems = [new Item('Aged Brie', 4, 50)];
            const items1 = gildedRose.updateQuality();
            const items2 = gildedRose.updateQuality();
            const items3 = gildedRose.updateQuality();
            expect(items3).to.eql(expectedItems);
        });

    });

});
