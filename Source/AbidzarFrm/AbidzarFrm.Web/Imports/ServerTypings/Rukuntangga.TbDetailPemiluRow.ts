namespace AbidzarFrm.Rukuntangga {
    export interface TbDetailPemiluRow {
        Id?: number;
        IdPemilu?: number;
        NoUrut?: number;
        Kandidat?: string;
        FileName?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        IdPemiluJudul?: string;
        IdPemiluFileName?: string;
        IdPemiluDibuatOleh?: string;
        IdPemiluDibuatTanggal?: string;
        IdPemiluDieditOleh?: string;
        IdPemiluDieditTanggal?: string;
        IdPemiluSystemStatus?: boolean;
        IdPemiluKodeRt?: string;
        tbPollingPemiluRow?: TbPollingPemiluRow[];
    }

    export namespace TbDetailPemiluRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Kandidat';
        export const localTextPrefix = 'Rukuntangga.TbDetailPemilu';
        export const deletePermission = 'Questioner:Pemilu:Delete';
        export const insertPermission = 'Questioner:Pemilu:Insert';
        export const readPermission = 'Questioner:Pemilu:View';
        export const updatePermission = 'Questioner:Pemilu:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdPemilu = "IdPemilu",
            NoUrut = "NoUrut",
            Kandidat = "Kandidat",
            FileName = "FileName",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            IdPemiluJudul = "IdPemiluJudul",
            IdPemiluFileName = "IdPemiluFileName",
            IdPemiluDibuatOleh = "IdPemiluDibuatOleh",
            IdPemiluDibuatTanggal = "IdPemiluDibuatTanggal",
            IdPemiluDieditOleh = "IdPemiluDieditOleh",
            IdPemiluDieditTanggal = "IdPemiluDieditTanggal",
            IdPemiluSystemStatus = "IdPemiluSystemStatus",
            IdPemiluKodeRt = "IdPemiluKodeRt",
            tbPollingPemiluRow = "tbPollingPemiluRow"
        }
    }
}

