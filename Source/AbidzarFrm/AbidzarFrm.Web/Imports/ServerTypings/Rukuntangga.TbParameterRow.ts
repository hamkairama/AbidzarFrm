namespace AbidzarFrm.Rukuntangga {
    export interface TbParameterRow {
        Id?: number;
        Kode?: string;
        Deskripsi?: string;
        Value?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbParameterRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Kode';
        export const localTextPrefix = 'Rukuntangga.TbParameter';
        export const deletePermission = 'Security:Parameter';
        export const insertPermission = 'Security:Parameter';
        export const readPermission = 'Security:Parameter';
        export const updatePermission = 'Security:Parameter';

        export declare const enum Fields {
            Id = "Id",
            Kode = "Kode",
            Deskripsi = "Deskripsi",
            Value = "Value",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

