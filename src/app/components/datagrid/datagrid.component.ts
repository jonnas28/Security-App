import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IDataColumn } from 'src/app/shared/contracts/idata-column';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent {
  constructor(private confirmationService:ConfirmationService,private messageService:MessageService){

  }
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

  @Output()
  onClickEdit= new EventEmitter<any>;

  @Output()
  onClickDelete = new EventEmitter<any>;

  editValue(value:any){
    this.onClickEdit.emit(value);
  }

  deleteValue(event:Event, value:any){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-trash',
      accept: () => {
        this.onClickDelete.emit(value);
      }
  });
    
  }
}
