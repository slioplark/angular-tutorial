import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/mocks/users';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'website', 'management'];
  dataSource = USERS;

  constructor() { }

  ngOnInit() {
  }

}
