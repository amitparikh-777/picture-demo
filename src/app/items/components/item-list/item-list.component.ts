import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Item } from '../../models/item.types';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  public itemsList: Item[];
  private itemsMap = new Map<number, Item>();

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.prepareItems();
  }

  prepareItems() {
    this.itemsService
      .getItems()
      .pipe(take(1))
      .subscribe((items: Item[]) => {
        this.itemsList = items;
        this.storeItems(items);
      });
  }

  storeItems(items: Item[]): void {
    if (!!!this.itemsMap.size) {
      items.forEach((i: Item) => {
        this.itemsMap.set(i.id, i);
      });
    }
  }
}
