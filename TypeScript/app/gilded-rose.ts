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
    this.items.forEach((item: Item) => {
      if (item.name === 'Aged Brie') {
        this.increaseQuality(item);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.increaseQuality(item);
        if (item.sellIn < 11) {
          this.increaseQuality(item);
        }
        if (item.sellIn < 6) {
          this.increaseQuality(item);
        }
      } else {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          this.decreaseQuality(item);
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name === 'Aged Brie') {
          this.increaseQuality(item);
        } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          item.quality = 0
        } else {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            this.decreaseQuality(item);
          }
        }
      }
    });

    return this.items;
  }


  private increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  private decreaseQuality(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
  }
}
