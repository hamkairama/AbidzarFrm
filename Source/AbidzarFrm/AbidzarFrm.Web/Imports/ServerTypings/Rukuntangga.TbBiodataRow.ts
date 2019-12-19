namespace AbidzarFrm.Rukuntangga {
    export interface TbBiodataRow {
        Id?: number;
        Nik?: string;
        Gelar?: string;
        Tahun?: string;
        Deskripsi?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbBiodataRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nik';
        export const localTextPrefix = 'Rukuntangga.TbBiodata';
        export const deletePermission = 'Master:RW:Delete';
        export const insertPermission = 'Master:RW:Insert';
        export const readPermission = 'Master:RW:View';
        export const updatePermission = 'Master:RW:Modify';

        export declare const enum Fields {
            Id = "Id",
            Nik = "Nik",
            Gelar = "Gelar",
            Tahun = "Tahun",
            Deskripsi = "Deskripsi",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

