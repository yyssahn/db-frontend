import { Component, Input } from '@angular/core';



@Component({
  selector:'db-product-list-item',
  templateUrl: './duber-product-list-item.component.html',
  styleUrls: ['./duber-product-list-item.component.css']
})

export class DuberProductListItem{


    @Input() product;



}
