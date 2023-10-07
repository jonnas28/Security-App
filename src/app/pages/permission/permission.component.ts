import { Component, OnInit } from '@angular/core';
import { catchError, lastValueFrom, takeUntil } from 'rxjs';
import { ApiClient, IdentityRoleDTO } from 'src/app/service/api/apiClient';
import { PageBase } from 'src/app/shared/class/page-base.class';
import { PageDestroy } from 'src/app/shared/class/page-destroy.class';

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
    private apiClient:ApiClient
  ) {
    super();
    
  }

  async loadDataSource(){
    const res = await lastValueFrom(this.apiClient.rolesGET(1,10,undefined)
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
        field:'normalizedName',
        header:'Normalized Name'
      }
    ]

    
  }
  
}