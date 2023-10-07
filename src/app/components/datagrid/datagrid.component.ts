import { Component, Input } from '@angular/core';
import { IDataColumn } from 'src/app/shared/contracts/idata-column';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent {
  @Input()
  caption:string="";

  @Input()
  dataColumns:IDataColumn[]=[];

  @Input()
  dataSource: any[]=[];

  @Input()
  selectedItem: any;

  @Input()
  allowMultipleSelection:boolean=false;
}
