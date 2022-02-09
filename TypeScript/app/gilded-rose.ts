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
  protected item: Item;
  constructor(item: Item) {
       this.item = item;
  }

  age() {
    this.updateItemQuality();

    this.updateItemSellIn();

    if (this.item.sellIn < 0) {
      this.updateExpiredItemQuality();
    }
  }

  private updateItemQuality() {
    if (this.item.name == 'Aged Brie') {
      this.increaseQuality();
    } else if (this.item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.increaseQuality();
      if (this.item.sellIn < 11) {
        this.increaseQuality();
      }
      if (this.item.sellIn < 6) {
        this.increaseQuality();
      }
    } else if (this.item.name == 'Sulfuras, Hand of Ragnaros') {
    } else {
      this.decreaseQuality();
    }
  }

  protected updateItemSellIn() {
    this.item.sellIn = this.item.sellIn - 1;
  }

  private updateExpiredItemQuality() {
    if (this.item.name == 'Aged Brie') {
      this.increaseQuality();
    } else if (this.item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.item.quality = 0
    } else if (this.item.name == 'Sulfuras, Hand of Ragnaros') {
    } else {
      this.decreaseQuality();
    }
  }

  protected decreaseQuality() {
    if (this.item.quality > 0) {
      this.item.quality = this.item.quality - 1
    }
  }

  protected increaseQuality() {
    if (this.item.quality < 50) {
      this.item.quality = this.item.quality + 1
    }
  }
}

class SulfurasItemAger extends ItemAger {
  constructor(item: Item) {
    super(item);
  }

  protected updateItemSellIn() {}

  protected updateItemQuality() {}

  protected updateExpiredItemQuality() {}
}

class AgedBrieAger extends ItemAger {
  constructor(item: Item) {
    super(item);
  }

  protected updateItemQuality() {
    this.increaseQuality();
  }

  protected updateExpiredItemQuality() {
    this.increaseQuality();
  }
}

class BackstagePassesItemAger  extends ItemAger{
  constructor(item: Item) {
    super(item);
  }

  protected updateItemQuality() {
    this.increaseQuality();
    if (this.item.sellIn < 11) {
      this.increaseQuality();
    }
    if (this.item.sellIn < 6) {
      this.increaseQuality();
    }
  }

  protected updateItemSellIn() {
    this.item.sellIn = this.item.sellIn - 1;
  }

  protected updateExpiredItemQuality() {
    this.item.quality = 0
  }
}

function createItemAger(item: Item): ItemAger {
  if (item.name === "Sulfuras, Hand of Ragnaros") {
    return new SulfurasItemAger(item);
  } else if (item.name === "Aged Brie") {
    return new AgedBrieAger(item);
  } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
    return new BackstagePassesItemAger(item);
  }
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
}
