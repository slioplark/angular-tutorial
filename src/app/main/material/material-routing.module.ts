import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'dialog', component: DialogComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
