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

    isModalVisible:boolean = false;

    addRecord(): void {
        throw new Error("Method not implemented.");
    }

    updateRecord(data: T): void {
        throw new Error("Method not implemented.");
    }

    viewRecord(data: T): void {
        throw new Error("Method not implemented.");
    }
    
    deleteRecord(data: T): void {
        throw new Error("Method not implemented.");
    }
}