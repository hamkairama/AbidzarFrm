namespace AbidzarFrm.Rukuntangga {
    export interface TbLaporanKasRow {
        Id?: number;
        Deskripsi?: string;
        Tanggal?: string;
        Total?: number;
        Tipe?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        KodeRt?: string;
    }

    export namespace TbLaporanKasRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Deskripsi';
        export const localTextPrefix = 'Rukuntangga.TbLaporanKas';
        export const deletePermission = 'Master:LaporanKas:Delete';
        export const insertPermission = 'Master:LaporanKas:Insert';
        export const readPermission = 'Master:LaporanKas:View';
        export const updatePermission = 'Master:LaporanKas:Modify';

        export declare const enum Fields {
            Id = "Id",
            Deskripsi = "Deskripsi",
            Tanggal = "Tanggal",
            Total = "Total",
            Tipe = "Tipe",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            KodeRt = "KodeRt"
        }
    }
}

