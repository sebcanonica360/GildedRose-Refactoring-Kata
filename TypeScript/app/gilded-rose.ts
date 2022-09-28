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

class EnrichedItem {
  private readonly _item:Item;

  constructor(item:Item) {
    this._item = item;
  }

  updateQuality() {
    if (this._item.name != 'Aged Brie' && this._item.name != 'Backstage passes to a TAFKAL80ETC concert') {
    if (this._item.quality > 0) {
      if (this._item.name != 'Sulfuras, Hand of Ragnaros') {
        this._item.quality = this._item.quality - 1
      }
    }
  } else {
    if (this._item.quality < 50) {
      this._item.quality = this._item.quality + 1
      if (this._item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this._item.sellIn < 11) {
          if (this._item.quality < 50) {
            this._item.quality = this._item.quality + 1
          }
        }
        if (this._item.sellIn < 6) {
          if (this._item.quality < 50) {
            this._item.quality = this._item.quality + 1
          }
        }
      }
    }
  }
    if (this._item.name != 'Sulfuras, Hand of Ragnaros') {
      this._item.sellIn = this._item.sellIn - 1;
    }
    if (this._item.sellIn < 0) {
      if (this._item.name != 'Aged Brie') {
        if (this._item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this._item.quality > 0) {
            if (this._item.name != 'Sulfuras, Hand of Ragnaros') {
              this._item.quality = this._item.quality - 1
            }
          }
        } else {
          this._item.quality = this._item.quality - this._item.quality
        }
      } else {
        if (this._item.quality < 50) {
          this._item.quality = this._item.quality + 1
        }
      }
    }
  }
}

class AgedBrieEnrichedItem extends EnrichedItem {

}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const enrichedItem = new EnrichedItem(this.items[i]);
      enrichedItem.updateQuality();
    }

    return this.items;
  }
}
