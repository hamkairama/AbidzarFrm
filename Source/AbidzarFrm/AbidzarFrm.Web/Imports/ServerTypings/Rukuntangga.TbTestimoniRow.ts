namespace AbidzarFrm.Rukuntangga {
    export interface TbTestimoniRow {
        Id?: number;
        Nik?: string;
        Deskripsi?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbTestimoniRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nik';
        export const localTextPrefix = 'Rukuntangga.TbTestimoni';
        export const deletePermission = 'Master:Testimoni:Delete';
        export const insertPermission = 'Master:Testimoni:Insert';
        export const readPermission = 'Master:Testimoni:View';
        export const updatePermission = 'Master:Testimoni:Modify';

        export declare const enum Fields {
            Id = "Id",
            Nik = "Nik",
            Deskripsi = "Deskripsi",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

