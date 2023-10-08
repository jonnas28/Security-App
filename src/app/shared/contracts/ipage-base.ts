import { IDataColumn } from "./idata-column";

export declare interface IPageBase<T>{
    dataSource:T[];
    columns:IDataColumn[];
    item?:T;
    selectedItem:T[];

    addRecord():void;
    viewRecord(data:T):void;
    updateRecord(data:T):void;
    deleteRecord(data:T):void;
}