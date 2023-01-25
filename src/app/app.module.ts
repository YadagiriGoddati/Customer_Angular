import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerdInventoryDatatableComponent } from './herd-inventory-datatable/herd-inventory-datatable.component';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 

const routes: Routes = [  
  { path: '', component: HerdInventoryDatatableComponent,pathMatch: 'full'},  
  { path: 'example2', component: DataTableComponent }, 
];  
@NgModule({
  declarations: [
    AppComponent,
    HerdInventoryDatatableComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
