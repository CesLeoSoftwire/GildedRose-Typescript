import {expect} from 'chai';
import {Item, GildedRose} from '../app/gilded-rose';

describe('Gilded Rose master test', function () {

    it('Should answer correctly', function () {

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
                new Item('Aged Brie', 14, 11),
                new Item('Aged Brie', -1, 12),
                new Item('Aged Brie', 9, 50),
                new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                new Item('Backstage passes to a TAFKAL80ETC concert', 14, 11),
                new Item('Backstage passes to a TAFKAL80ETC concert', 7, 12),
                new Item('Backstage passes to a TAFKAL80ETC concert', 2, 13),
                new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0),
                new Item('Happiness', 372530, 49)
            ];


        const items = gildedRose.updateQuality();

        console.log( items);
        console.log( expectedGildedRose);
        expect(items).to.eql(expectedGildedRose);


    });

});
