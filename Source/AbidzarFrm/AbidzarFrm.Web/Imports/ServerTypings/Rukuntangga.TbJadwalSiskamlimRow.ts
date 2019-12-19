namespace AbidzarFrm.Rukuntangga {
    export interface TbJadwalSiskamlimRow {
        Id?: number;
        Nik?: string;
        Nama?: string;
        Tanggal?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbJadwalSiskamlimRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nik';
        export const localTextPrefix = 'Rukuntangga.TbJadwalSiskamlim';
        export const deletePermission = 'Master:JadwalSiskamling:Delete';
        export const insertPermission = 'Master:JadwalSiskamling:Insert';
        export const readPermission = 'Master:JadwalSiskamling:View';
        export const updatePermission = 'Master:JadwalSiskamling:Modify';

        export declare const enum Fields {
            Id = "Id",
            Nik = "Nik",
            Nama = "Nama",
            Tanggal = "Tanggal",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

