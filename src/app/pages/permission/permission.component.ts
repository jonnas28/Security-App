import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { catchError, lastValueFrom, takeUntil } from 'rxjs';
import { PageBase } from 'src/app/shared/class/page-base.class';
import { PageDestroy } from 'src/app/shared/class/page-destroy.class';
import { FormComponent } from './form/form.component';
import { MessageService } from 'primeng/api';
import { ApiClient, IdentityRoleDTO, PermissionDTO } from 'src/app/service/api/apiClient';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent extends PageBase<IdentityRoleDTO> implements PageDestroy,OnInit {
  /**
   *
   */

  constructor(
    private apiClient:ApiClient,
    private dialogService:DialogService,
    private messageService:MessageService
  ) {
    super();
  }

  async loadDataSource(){
    const res = await lastValueFrom(this.apiClient.getPermission(1,10,undefined)
    .pipe(takeUntil(this.unsubscribe$))
    .pipe(catchError((e) => {
      throw e;
    }))
    )

    if(res.statusCode === 200){
      this.dataSource= res.result!;
    }
  }

  ngOnInit(): void {
    this.loadDataSource();
    this.columns=[
      {
        field:'name',
        header:'Name',
        styling:{
          minWidth:'10 rem'
        }
      },
      {
        field:'description',
        header:'Description'
      }
    ]
  }

  override addRecord(): void {
    const result = this.dialogService.open(FormComponent,{
      header: 'Add Permission',
      data: { }
    })

    result.onClose.subscribe(async (data:PermissionDTO)=> {
      if(data){
        const res = await lastValueFrom(this.apiClient.addPermission(data)
          .pipe(takeUntil(this.unsubscribe$))
          .pipe(catchError((e) => {
            throw e;
          })))

          if(res.statusCode === 200){
            this.messageService.add({ severity: 'success', summary: 'Add Permission Success!', detail:data.name });
          }
      }
    });
  }

  override updateRecord(data: PermissionDTO): void {
    const result = this.dialogService.open(FormComponent,{
      header: 'Edit Permission',
      data: data
    })

    result.onClose.subscribe(async (data:PermissionDTO)=> {
      if(data){
        const res = await lastValueFrom(this.apiClient.updatePermission(data.id!,data)
          .pipe(takeUntil(this.unsubscribe$))
          .pipe(catchError((e) => {
            throw e;
          })))

          if(res.statusCode === 200){
            this.messageService.add({ severity: 'success', summary: 'Update Permission Success!', detail:data.name });
          }
      }
    });
  }

  override async deleteRecord(data: PermissionDTO): Promise<void> {
    if(data){
      const res = await lastValueFrom(this.apiClient.deletePermission(data.id)
        .pipe(takeUntil(this.unsubscribe$))
        .pipe(catchError((e) => {
          throw e;
        })))
    }
  }
  
  
}