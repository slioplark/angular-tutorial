import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() menu: string;
  @Input() item: string;

  @Output() menuChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClickMenu(item) {
    this.menu = (this.menu === item) ? '' : item;
    this.menuChange.emit(this.menu);
  }

}
