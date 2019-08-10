import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  isLoading = true;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'website', 'management'];
  dataSource = new MatTableDataSource<any>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.isLoading = false;
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
