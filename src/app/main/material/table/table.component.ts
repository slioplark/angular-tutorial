import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/mocks/users';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'website', 'management'];
  dataSource: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.dataSource = data;
    });
  }

}
