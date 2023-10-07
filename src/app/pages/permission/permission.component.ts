import { Component, OnInit } from '@angular/core';
import { IdentityRoleDTO } from 'src/app/service/api/apiClient';
import { PageBase } from 'src/app/shared/class/page-base.class';
import { PageDestroy } from 'src/app/shared/class/page-destroy.class';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent extends PageBase<IdentityRoleDTO> implements PageDestroy,OnInit {
  
  ngOnInit(): void {
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

    this.dataSource=[
      {
        name:'Administrator',
        normalizedName:'ADMINISTRATOR'
      },
      {
        name:'Visitor',
        normalizedName:'VISITOR'
      }
    ]

    
  }
  
}