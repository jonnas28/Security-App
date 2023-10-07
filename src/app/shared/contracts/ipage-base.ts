import { IDataColumn } from "./idata-column";

export declare interface IPageBase<T>{
    dataSource:T[];
    columns:IDataColumn[];
    item?:T;
    selectedItem:T[];
}