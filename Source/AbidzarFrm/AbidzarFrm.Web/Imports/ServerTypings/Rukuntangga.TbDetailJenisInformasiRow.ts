namespace AbidzarFrm.Rukuntangga {
    export interface TbDetailJenisInformasiRow {
        Id?: number;
        IdJenisInformasi?: number;
        Judul?: string;
        NamaFile?: string;
        Deskripsi?: string;
        LevelArea?: string;
        IsLandingPage?: number;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        IdJenisInformasiJenisInformasi?: string;
        IdJenisInformasiDibuatOleh?: string;
        IdJenisInformasiDibuatTanggal?: string;
        IdJenisInformasiDieditOleh?: string;
        IdJenisInformasiDieditTanggal?: string;
        IdJenisInformasiSystemStatus?: boolean;
        IdJenisInformasiKodeRt?: string;
    }

    export namespace TbDetailJenisInformasiRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Judul';
        export const localTextPrefix = 'Rukuntangga.TbDetailJenisInformasi';
        export const deletePermission = 'Informasi:Delete';
        export const insertPermission = 'Informasi:Insert';
        export const readPermission = 'Informasi:View';
        export const updatePermission = 'Informasi:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdJenisInformasi = "IdJenisInformasi",
            Judul = "Judul",
            NamaFile = "NamaFile",
            Deskripsi = "Deskripsi",
            LevelArea = "LevelArea",
            IsLandingPage = "IsLandingPage",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            IdJenisInformasiJenisInformasi = "IdJenisInformasiJenisInformasi",
            IdJenisInformasiDibuatOleh = "IdJenisInformasiDibuatOleh",
            IdJenisInformasiDibuatTanggal = "IdJenisInformasiDibuatTanggal",
            IdJenisInformasiDieditOleh = "IdJenisInformasiDieditOleh",
            IdJenisInformasiDieditTanggal = "IdJenisInformasiDieditTanggal",
            IdJenisInformasiSystemStatus = "IdJenisInformasiSystemStatus",
            IdJenisInformasiKodeRt = "IdJenisInformasiKodeRt"
        }
    }
}

