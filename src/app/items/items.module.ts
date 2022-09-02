import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, HttpClientModule, MatCardModule],
  declarations: [ItemListComponent, ItemDetailComponent],
  exports: [ItemDetailComponent, ItemListComponent],
})
export class ItemsModule {}
