namespace AbidzarFrm.Rukuntangga {
    export interface TbPemiluRow {
        Id?: number;
        Judul?: string;
        FileName?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        KodeRt?: string;
        tbDetailPemiluRow?: TbDetailPemiluRow[];
    }

    export namespace TbPemiluRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Judul';
        export const localTextPrefix = 'Rukuntangga.TbPemilu';
        export const deletePermission = 'Questioner:Pemilu:Delete';
        export const insertPermission = 'Questioner:Pemilu:Insert';
        export const readPermission = 'Questioner:Pemilu:View';
        export const updatePermission = 'Questioner:Pemilu:Modify';

        export declare const enum Fields {
            Id = "Id",
            Judul = "Judul",
            FileName = "FileName",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            KodeRt = "KodeRt",
            tbDetailPemiluRow = "tbDetailPemiluRow"
        }
    }
}

