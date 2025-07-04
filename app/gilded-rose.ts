export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            switch (this.items[i].name) {
                case 'Sulfuras, Hand of Ragnaros':
                    break;
                case 'Aged Brie':
                    this.updateAgedBrie(i);
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    this.updateBackstagePasses(i);
                    break;
                case 'Conjured Mana Cake':
                    this.updateCake(i);
                    break;
                default:
                    this.updateBasicProduct(i);
                    break;
            }
        }
        return this.items;
    }

    updateAgedBrie(i: number) {

        this.items[i].quality++;

        if (this.items[i].sellIn <= 0) {
            this.items[i].quality++;
        }
        if (this.items[i].quality > 50) {
            this.items[i].quality = 50;
        }

        this.items[i].sellIn = this.items[i].sellIn - 1;
    }

    updateBackstagePasses(i: number) {
        if (this.items[i].quality < 50) {

            this.items[i].quality = this.items[i].quality + 1
            if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                }
            }
            if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                }
            }

        }
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].sellIn < 0) {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
        }
    }

    updateCake(i: number) {
        this.items[i].sellIn = this.items[i].sellIn - 1;

        if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 2;
        }

        if (this.items[i].sellIn < 0) {
            if (this.items[i].quality > 0) {
                this.items[i].quality = this.items[i].quality - 4;
            }
        }
    }

    updateBasicProduct(i: number) {
        this.items[i].sellIn = this.items[i].sellIn - 1;

        if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1;
        }
        if (this.items[i].sellIn < 0) {
            if (this.items[i].quality > 0) {
                this.items[i].quality = this.items[i].quality - 1;
            }
        }
    }

}
