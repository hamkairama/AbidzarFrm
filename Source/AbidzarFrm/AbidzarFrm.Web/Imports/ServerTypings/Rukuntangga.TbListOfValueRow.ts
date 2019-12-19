namespace AbidzarFrm.Rukuntangga {
    export interface TbListOfValueRow {
        Id?: number;
        Kode?: string;
        Deskripsi?: string;
        Value?: string;
        Group?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbListOfValueRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Kode';
        export const localTextPrefix = 'Rukuntangga.TbListOfValue';
        export const deletePermission = 'Security:ListOfValue';
        export const insertPermission = 'Security:ListOfValue';
        export const readPermission = 'Security:ListOfValue';
        export const updatePermission = 'Security:ListOfValue';

        export declare const enum Fields {
            Id = "Id",
            Kode = "Kode",
            Deskripsi = "Deskripsi",
            Value = "Value",
            Group = "Group",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

