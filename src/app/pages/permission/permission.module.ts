import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionComponent } from './permission.component';
import { DatagridModule } from 'src/app/components/datagrid/datagrid.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
@NgModule({
  declarations: [
    PermissionComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    FileUploadModule,
    PermissionRoutingModule,
    DatagridModule
  ]
})
export class PermissionModule { }
