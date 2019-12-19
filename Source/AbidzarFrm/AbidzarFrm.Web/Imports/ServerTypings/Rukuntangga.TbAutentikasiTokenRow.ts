namespace AbidzarFrm.Rukuntangga {
    export interface TbAutentikasiTokenRow {
        Id?: number;
        Token?: string;
        Aplikasi?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbAutentikasiTokenRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Token';
        export const localTextPrefix = 'Rukuntangga.TbAutentikasiToken';
        export const deletePermission = 'Security:AutentikasiToken';
        export const insertPermission = 'Security:AutentikasiToken';
        export const readPermission = 'Security:AutentikasiToken';
        export const updatePermission = 'Security:AutentikasiToken';

        export declare const enum Fields {
            Id = "Id",
            Token = "Token",
            Aplikasi = "Aplikasi",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

