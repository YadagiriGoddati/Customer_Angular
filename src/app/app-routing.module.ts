import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerdInventoryDatatableComponent } from './herd-inventory-datatable/herd-inventory-datatable.component';

const routes: Routes = [
  { path: 'HerdInventoryDatatable', component: HerdInventoryDatatableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}