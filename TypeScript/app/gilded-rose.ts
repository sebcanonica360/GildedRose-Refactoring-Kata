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

class BaseQualityUpdater {
  private readonly _item:Item;
  constructor (item:Item) {
    this._item = item;
  }

  updateExpiredQuality() {
    if (this._item.name === 'Aged Brie') {
      this.increaseQuality();
    } else if (this._item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this._item.quality = 0;
    } else if (this._item.name === 'Sulfuras, Hand of Ragnaros') {
    } else {
      this.decreaseQuality();
    }
  }

  updateSellIn() {
    if (this._item.name === 'Sulfuras, Hand of Ragnaros') {
    } else {
      this._item.sellIn = this._item.sellIn - 1;
    }
  }

  updateNormalQuality() {
    if (this._item.name === 'Aged Brie') {
      this.increaseQuality();
    } else if (this._item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.increaseQuality();
      if (this._item.sellIn < 11) {
        this.increaseQuality();
      }
      if (this._item.sellIn < 6) {
        this.increaseQuality();
      }
    } else if (this._item.name === 'Sulfuras, Hand of Ragnaros') {
    } else {
      this.decreaseQuality();
    }
  }

  private increaseQuality() {
    if (this._item.quality < 50) {
      this._item.quality = this._item.quality + 1;
    }
  }

  private decreaseQuality() {
    if (this._item.quality > 0) {
      this._item.quality = this._item.quality - 1;
    }
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item: Item) => {
      const qualityUpdater = this.buildQualityUpdater(item);
      qualityUpdater.updateNormalQuality();
      qualityUpdater.updateSellIn();
      if (item.sellIn < 0) {
        qualityUpdater.updateExpiredQuality();
      }
    });

    return this.items;
  }
  buildQualityUpdater(item: Item) {
    return new BaseQualityUpdater(item);
  }

}
