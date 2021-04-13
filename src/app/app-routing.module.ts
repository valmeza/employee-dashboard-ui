import { AddComponent } from './components/add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'add', component: AddComponent },
  { path: 'update/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
