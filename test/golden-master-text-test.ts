import {expect} from 'chai';
import {Item, GildedRose} from '../app/gilded-rose';

describe('Gilded Rose master test', function () {

    it('Should answer for 1 day', function () {

        const gildedRose = new GildedRose(
            [
                new Item('Aged Brie', 15, 10),
                new Item('Aged Brie', 0, 10),
                new Item('Aged Brie', 10, 50),
                new Item('Sulfuras, Hand of Ragnaros', 1, 80),
                new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 8, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
                new Item('Happiness', 372531, 50)
            ]
        );

        const expectedGildedRose =
            [
                new Item('Aged Brie', 14, 11),
                new Item('Aged Brie', -1, 12),
                new Item('Aged Brie', 9, 50),
                new Item('Sulfuras, Hand of Ragnaros', 1, 80),
                new Item('Backstage passes to a TAFKAL80ETC concert', 14, 11),
                new Item('Backstage passes to a TAFKAL80ETC concert', 7, 12),
                new Item('Backstage passes to a TAFKAL80ETC concert', 2, 13),
                new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
                new Item('Happiness', 372530, 49)
            ];


        const items = gildedRose.updateQuality();


        expect(items).to.eql(expectedGildedRose);


    });

    it('Should answer for 2 days', function () {

        const gildedRose = new GildedRose(
            [
                new Item('Aged Brie', 15, 10),
                new Item('Aged Brie', 0, 10),
                new Item('Aged Brie', 10, 50),
                new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 8, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
                new Item('Happiness', 372531, 50)
            ]
        );

        const expectedGildedRose =
            [
                new Item('Aged Brie', 13, 12),
                new Item('Aged Brie', -2, 14),
                new Item('Aged Brie', 8, 50),
                new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                new Item('Backstage passes to a TAFKAL80ETC concert', 13, 12),
                new Item('Backstage passes to a TAFKAL80ETC concert', 6, 14),
                new Item('Backstage passes to a TAFKAL80ETC concert', 1, 16),
                new Item('Backstage passes to a TAFKAL80ETC concert', -2, 0),
                new Item('Happiness', 372529, 48)
            ];


        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();


        expect(items2).to.eql(expectedGildedRose);


    });

    it('Should answer for 3 days', function () {

        const gildedRose = new GildedRose(
            [
                new Item('Aged Brie', 15, 10),
                new Item('Aged Brie', 0, 10),
                new Item('Aged Brie', 10, 50),
                new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 8, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10),
                new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
                new Item('Happiness', 372531, 50)
            ]
        );

        const expectedGildedRose =
            [
                new Item('Aged Brie', 12, 13),
                new Item('Aged Brie', -3, 16),
                new Item('Aged Brie', 7, 50),
                new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                new Item('Backstage passes to a TAFKAL80ETC concert', 12, 13),
                new Item('Backstage passes to a TAFKAL80ETC concert', 5, 16),
                new Item('Backstage passes to a TAFKAL80ETC concert', 0, 19),
                new Item('Backstage passes to a TAFKAL80ETC concert', -3, 0),
                new Item('Happiness', 372528, 47)
            ];


        const items1 = gildedRose.updateQuality();
        const items2 = gildedRose.updateQuality();
        const items3 = gildedRose.updateQuality();


        expect(items3).to.eql(expectedGildedRose);


    });
});
