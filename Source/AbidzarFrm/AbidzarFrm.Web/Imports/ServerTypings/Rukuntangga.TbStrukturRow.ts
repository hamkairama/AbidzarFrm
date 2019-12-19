namespace AbidzarFrm.Rukuntangga {
    export interface TbStrukturRow {
        Id?: number;
        IdKtp?: string;
        IdJabatan?: number;
        AwalPeriode?: string;
        AkhirPeriode?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        IdJabatanNamaJabatan?: string;
        IdJabatanDibuatOleh?: string;
        IdJabatanDibuatTanggal?: string;
        IdJabatanDieditOleh?: string;
        IdJabatanDieditTanggal?: string;
        IdJabatanSystemStatus?: boolean;
    }

    export namespace TbStrukturRow {
        export const idProperty = 'Id';
        export const nameProperty = 'IdKtp';
        export const localTextPrefix = 'Rukuntangga.TbStruktur';
        export const deletePermission = 'Master:Struktur:Delete';
        export const insertPermission = 'Master:Struktur:Insert';
        export const readPermission = 'Master:Struktur:View';
        export const updatePermission = 'Master:Struktur:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdKtp = "IdKtp",
            IdJabatan = "IdJabatan",
            AwalPeriode = "AwalPeriode",
            AkhirPeriode = "AkhirPeriode",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            IdJabatanNamaJabatan = "IdJabatanNamaJabatan",
            IdJabatanDibuatOleh = "IdJabatanDibuatOleh",
            IdJabatanDibuatTanggal = "IdJabatanDibuatTanggal",
            IdJabatanDieditOleh = "IdJabatanDieditOleh",
            IdJabatanDieditTanggal = "IdJabatanDieditTanggal",
            IdJabatanSystemStatus = "IdJabatanSystemStatus"
        }
    }
}

