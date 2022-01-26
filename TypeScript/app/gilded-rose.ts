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

  constructor(items: Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      GildedRose.ageItem(this.items[i]);
    }

    return this.items;
  }

  private static ageItem(item: Item) {
    this.updateItemQuality(item);

    this.updateItemSellIn(item);

    if (item.sellIn < 0) {
      this.updateExpiredItemQuality(item);
    }
  }

  private static updateItemQuality(item: Item) {
    if (item.name == 'Aged Brie') {
      this.increaseQuality(item);
    } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.increaseQuality(item);
      if (item.sellIn < 11) {
        this.increaseQuality(item);
      }
      if (item.sellIn < 6) {
        this.increaseQuality(item);
      }
    } else if (item.name == 'Sulfuras, Hand of Ragnaros') {
    } else {
      this.decreaseQuality(item);
    }
  }

  private static decreaseQuality(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1
    }
  }

  private static increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }

  private static updateItemSellIn(item: Item) {
    if (item.name == 'Sulfuras, Hand of Ragnaros') {
    } else {
      item.sellIn = item.sellIn - 1;
    }
  }

  private static updateExpiredItemQuality(item: Item) {
    if (item.name == 'Aged Brie') {
      this.increaseQuality(item);
    } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      item.quality = 0
    } else if (item.name == 'Sulfuras, Hand of Ragnaros') {
    } else {
      this.decreaseQuality(item);
    }
  }
}
