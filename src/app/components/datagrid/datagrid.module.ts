import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridComponent } from './datagrid.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    DatagridComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
  ],
  exports:[
    DatagridComponent
  ]
})
export class DatagridModule { }
