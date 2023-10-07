export interface IDataColumn{
    field:string;
    header:string;
    styling?:IColumnStyling;
}

export interface IColumnStyling{
    width?:string;
    minWidth?:string;
}