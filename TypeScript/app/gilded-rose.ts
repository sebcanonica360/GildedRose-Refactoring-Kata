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
      this.updateNormalQuality(item);

      this.updateSellIn(item);

      if (item.sellIn < 0) {
        this.updateExpiredQuality(item);
      }
    });

    return this.items;
  }


  private updateExpiredQuality(item: Item) {
    if (item.name === 'Aged Brie') {
      this.increaseQuality(item);
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      item.quality = 0;
    } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
    } else {
      this.decreaseQuality(item);
    }
  }

  private updateSellIn(item: Item) {
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
    } else {
      item.sellIn = item.sellIn - 1;
    }
  }

  private updateNormalQuality(item: Item) {
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
    } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
    } else {
      this.decreaseQuality(item);
    }
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
