namespace AbidzarFrm.Rukuntangga {
    export interface TbUserApiRow {
        Id?: number;
        NamaApi?: string;
        IdUser?: string;
        Sandi?: string;
        Status?: boolean;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbUserApiRow {
        export const idProperty = 'Id';
        export const nameProperty = 'NamaApi';
        export const localTextPrefix = 'Rukuntangga.TbUserApi';
        export const deletePermission = 'Security:UserApi';
        export const insertPermission = 'Security:UserApi';
        export const readPermission = 'Security:UserApi';
        export const updatePermission = 'Security:UserApi';

        export declare const enum Fields {
            Id = "Id",
            NamaApi = "NamaApi",
            IdUser = "IdUser",
            Sandi = "Sandi",
            Status = "Status",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

