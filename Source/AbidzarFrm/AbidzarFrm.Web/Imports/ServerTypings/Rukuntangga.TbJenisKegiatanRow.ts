namespace AbidzarFrm.Rukuntangga {
    export interface TbJenisKegiatanRow {
        Id?: number;
        JenisKegiatan?: string;
        Deskripsi?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        KodeRt?: string;
        tbDetailJenisKegiatanRow?: TbDetailJenisKegiatanRow[];
    }

    export namespace TbJenisKegiatanRow {
        export const idProperty = 'Id';
        export const nameProperty = 'JenisKegiatan';
        export const localTextPrefix = 'Rukuntangga.TbJenisKegiatan';
        export const deletePermission = 'Kegiatan:Delete';
        export const insertPermission = 'Kegiatan:Insert';
        export const readPermission = 'Kegiatan:View';
        export const updatePermission = 'Kegiatan:Modify';

        export declare const enum Fields {
            Id = "Id",
            JenisKegiatan = "JenisKegiatan",
            Deskripsi = "Deskripsi",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            KodeRt = "KodeRt",
            tbDetailJenisKegiatanRow = "tbDetailJenisKegiatanRow"
        }
    }
}

