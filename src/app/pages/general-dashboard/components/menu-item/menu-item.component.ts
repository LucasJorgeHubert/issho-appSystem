import { Component, OnInit, Input } from '@angular/core';

export interface menuItem {
  imgUrl: string;
  item: string;
  active: boolean;
}

@Component({
  selector: 'issho-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() item: menuItem;

  constructor() { }

  ngOnInit() {
  }

}
