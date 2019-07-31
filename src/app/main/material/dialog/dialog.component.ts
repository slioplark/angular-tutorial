import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { OpenDialogComponent } from './open-dialog/open-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(OpenDialogComponent, {
      width: '500px',
      data: { title: 'Install Angular' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The dialog click install button');
      } else {
        console.log('The dialog click cancel button');
      }
    });
  }

}
