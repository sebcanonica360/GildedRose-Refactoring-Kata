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

class QualityUpdater {
  protected readonly _item:Item;

  constructor(item:Item) {
    this._item = item;
  }

  updateQuality() {
    this.decreaseQuality();
    this._item.sellIn = this._item.sellIn - 1;

    if (this._item.sellIn < 0) {
      this.decreaseQuality();
    }
  }

  protected decreaseQuality() {
    if (this._item.quality > 0) {
      this._item.quality = this._item.quality - 1
    }
  }

  protected increaseQuality() {
    if (this._item.quality < 50) {
      this._item.quality = this._item.quality + 1
    }
  }
}

class ConjureQualityUpdater extends QualityUpdater {
  updateQuality() {
    this.decreaseQuality();
    this.decreaseQuality();
    this._item.sellIn = this._item.sellIn - 1;

    if (this._item.sellIn < 0) {
      this.decreaseQuality();
      this.decreaseQuality();
    }
  }
}

class AgedBrieQualityUpdater extends QualityUpdater {
  updateQuality() {
    this.increaseQuality();
    this._item.sellIn = this._item.sellIn - 1;
    if (this._item.sellIn < 0) {
        this.increaseQuality();
    }
  }
}

class BackstageQualityUpdate extends QualityUpdater {
  updateQuality() {
    this.increaseQuality();
    if (this._item.sellIn < 11) {
      this.increaseQuality();
    }
    if (this._item.sellIn < 6) {
      this.increaseQuality();
    }
    this._item.sellIn = this._item.sellIn - 1;
    if (this._item.sellIn < 0) {
        this._item.quality = 0;
    }
  }
}

class SulfurasQualityUpdater extends QualityUpdater {
  updateQuality() {}
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let qualityUpdater:QualityUpdater;
      switch(this.items[i].name) {
        case "Aged Brie":
          qualityUpdater = new AgedBrieQualityUpdater(this.items[i]);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          qualityUpdater = new BackstageQualityUpdate(this.items[i]);
          break;
        case "Sulfuras, Hand of Ragnaros":
          qualityUpdater = new SulfurasQualityUpdater(this.items[i]);
          break;
        case "Conjured Mana Cake":
          qualityUpdater = new ConjureQualityUpdater(this.items[i]);
          break;
        default:
          qualityUpdater = new QualityUpdater(this.items[i]);
      }
      qualityUpdater.updateQuality();
    }

    return this.items;
  }
}
