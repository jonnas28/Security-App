import { Injectable } from "@angular/core";
import { IPageBase } from "../contracts/ipage-base";
import { IDataColumn } from "../contracts/idata-column";
import { PageDestroy } from "./page-destroy.class";

@Injectable()
export abstract class PageBase<T> extends PageDestroy implements IPageBase<T>{
    dataSource: T[] = [];
    columns: IDataColumn[]=[];
    item?: T;
    selectedItem:T[]=[];
}