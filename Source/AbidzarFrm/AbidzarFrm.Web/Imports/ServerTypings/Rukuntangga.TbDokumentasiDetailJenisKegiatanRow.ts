namespace AbidzarFrm.Rukuntangga {
    export interface TbDokumentasiDetailJenisKegiatanRow {
        Id?: number;
        IdDetailJenisKegiatan?: number;
        NamaFile?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        IdDetailJenisKegiatanIdJenisKegiatan?: number;
        IdDetailJenisKegiatanNamaKegiatan?: string;
        IdDetailJenisKegiatanLokasi?: string;
        IdDetailJenisKegiatanDeskripsi?: string;
        IdDetailJenisKegiatanTanggalKegiatan?: string;
        IdDetailJenisKegiatanWarnaLatar?: string;
        IdDetailJenisKegiatanLevelArea?: string;
        IdDetailJenisKegiatanDibuatOleh?: string;
        IdDetailJenisKegiatanDibuatTanggal?: string;
        IdDetailJenisKegiatanDieditOleh?: string;
        IdDetailJenisKegiatanDieditTanggal?: string;
        IdDetailJenisKegiatanSystemStatus?: boolean;
    }

    export namespace TbDokumentasiDetailJenisKegiatanRow {
        export const idProperty = 'Id';
        export const nameProperty = 'NamaFile';
        export const localTextPrefix = 'Rukuntangga.TbDokumentasiDetailJenisKegiatan';
        export const deletePermission = 'Kegiatan:Delete';
        export const insertPermission = 'Kegiatan:Insert';
        export const readPermission = 'Kegiatan:View';
        export const updatePermission = 'Kegiatan:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdDetailJenisKegiatan = "IdDetailJenisKegiatan",
            NamaFile = "NamaFile",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            IdDetailJenisKegiatanIdJenisKegiatan = "IdDetailJenisKegiatanIdJenisKegiatan",
            IdDetailJenisKegiatanNamaKegiatan = "IdDetailJenisKegiatanNamaKegiatan",
            IdDetailJenisKegiatanLokasi = "IdDetailJenisKegiatanLokasi",
            IdDetailJenisKegiatanDeskripsi = "IdDetailJenisKegiatanDeskripsi",
            IdDetailJenisKegiatanTanggalKegiatan = "IdDetailJenisKegiatanTanggalKegiatan",
            IdDetailJenisKegiatanWarnaLatar = "IdDetailJenisKegiatanWarnaLatar",
            IdDetailJenisKegiatanLevelArea = "IdDetailJenisKegiatanLevelArea",
            IdDetailJenisKegiatanDibuatOleh = "IdDetailJenisKegiatanDibuatOleh",
            IdDetailJenisKegiatanDibuatTanggal = "IdDetailJenisKegiatanDibuatTanggal",
            IdDetailJenisKegiatanDieditOleh = "IdDetailJenisKegiatanDieditOleh",
            IdDetailJenisKegiatanDieditTanggal = "IdDetailJenisKegiatanDieditTanggal",
            IdDetailJenisKegiatanSystemStatus = "IdDetailJenisKegiatanSystemStatus"
        }
    }
}

