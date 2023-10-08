import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PermissionDTO } from 'src/app/service/api/apiClient';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  data:PermissionDTO|undefined;
  constructor(public ref: DynamicDialogRef,public dialogService: DialogService, public dialogConfig: DynamicDialogConfig) {
    
  }
  ngOnInit(): void {
    this.data = this.dialogConfig.data
  }
  
  save(): void {
    this.ref.close(this.data);
  }

  cancel():void{
    this.ref.close();
  }
}
