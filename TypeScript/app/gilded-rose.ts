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

class ItemAger {
  private item: Item;
  constructor(item: Item) {
       this.item = item;
  }

  age() {
    this.updateItemQuality(this.item);

    this.updateItemSellIn(this.item);

    if (this.item.sellIn < 0) {
      this.updateExpiredItemQuality(this.item);
    }
  }

  private updateItemQuality(item: Item) {
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

  private updateItemSellIn(item: Item) {
    if (item.name == 'Sulfuras, Hand of Ragnaros') {
    } else {
      item.sellIn = item.sellIn - 1;
    }
  }

  private updateExpiredItemQuality(item: Item) {
    if (item.name == 'Aged Brie') {
      this.increaseQuality(item);
    } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      item.quality = 0
    } else if (item.name == 'Sulfuras, Hand of Ragnaros') {
    } else {
      this.decreaseQuality(item);
    }
  }

  private decreaseQuality(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1
    }
  }

  private increaseQuality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }
}

function createItemAger(item: Item) {
  return new ItemAger(item);
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
    const itemAger = createItemAger(item);
    itemAger.age();
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
}
