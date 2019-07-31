import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialogComponent } from '../main/material/dialog/dialog.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'mat-dialog', component: DialogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
