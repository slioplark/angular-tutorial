import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menu: string;

  constructor() { }

  ngOnInit() {
  }

  onClickExpand(menu: string) {
    this.menu = this.menu === menu ? '' : menu;
  }

}
