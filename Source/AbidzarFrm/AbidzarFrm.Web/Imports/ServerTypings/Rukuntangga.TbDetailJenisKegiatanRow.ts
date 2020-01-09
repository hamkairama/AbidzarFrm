namespace AbidzarFrm.Rukuntangga {
    export interface TbDetailJenisKegiatanRow {
        Id?: number;
        IdJenisKegiatan?: number;
        NamaKegiatan?: string;
        Lokasi?: string;
        Deskripsi?: string;
        TanggalKegiatan?: string;
        WarnaLatar?: string;
        LevelArea?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        NamaFile?: string;
        Dokumentasi?: string;
        IdJenisKegiatanJenisKegiatan?: string;
        IdJenisKegiatanDeskripsi?: string;
        IdJenisKegiatanDibuatOleh?: string;
        IdJenisKegiatanDibuatTanggal?: string;
        IdJenisKegiatanDieditOleh?: string;
        IdJenisKegiatanDieditTanggal?: string;
        IdJenisKegiatanSystemStatus?: boolean;
        IdJenisKegiatanKodeRt?: string;
    }

    export namespace TbDetailJenisKegiatanRow {
        export const idProperty = 'Id';
        export const nameProperty = 'NamaKegiatan';
        export const localTextPrefix = 'Rukuntangga.TbDetailJenisKegiatan';
        export const deletePermission = 'Kegiatan:Delete';
        export const insertPermission = 'Kegiatan:Insert';
        export const readPermission = 'Kegiatan:View';
        export const updatePermission = 'Kegiatan:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdJenisKegiatan = "IdJenisKegiatan",
            NamaKegiatan = "NamaKegiatan",
            Lokasi = "Lokasi",
            Deskripsi = "Deskripsi",
            TanggalKegiatan = "TanggalKegiatan",
            WarnaLatar = "WarnaLatar",
            LevelArea = "LevelArea",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            NamaFile = "NamaFile",
            Dokumentasi = "Dokumentasi",
            IdJenisKegiatanJenisKegiatan = "IdJenisKegiatanJenisKegiatan",
            IdJenisKegiatanDeskripsi = "IdJenisKegiatanDeskripsi",
            IdJenisKegiatanDibuatOleh = "IdJenisKegiatanDibuatOleh",
            IdJenisKegiatanDibuatTanggal = "IdJenisKegiatanDibuatTanggal",
            IdJenisKegiatanDieditOleh = "IdJenisKegiatanDieditOleh",
            IdJenisKegiatanDieditTanggal = "IdJenisKegiatanDieditTanggal",
            IdJenisKegiatanSystemStatus = "IdJenisKegiatanSystemStatus",
            IdJenisKegiatanKodeRt = "IdJenisKegiatanKodeRt"
        }
    }
}

