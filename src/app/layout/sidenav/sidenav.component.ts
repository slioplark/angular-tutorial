import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnChanges {

  @Input() toggleStatus: boolean;

  @ViewChild(MatDrawer, { static: true }) matDrawer: MatDrawer;

  menu: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.matDrawer.toggle();
  }

  onClickExpand(menu: string) {
    this.menu = this.menu === menu ? '' : menu;
  }

}
