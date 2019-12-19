namespace AbidzarFrm.Rukuntangga {
    export interface TbHistoricalUserLoginRow {
        Id?: number;
        Nik?: string;
        Login?: string;
        Logout?: string;
        IsMobile?: boolean;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbHistoricalUserLoginRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nik';
        export const localTextPrefix = 'Rukuntangga.TbHistoricalUserLogin';
        export const deletePermission = 'Security:HistorycalLogin';
        export const insertPermission = 'Security:HistorycalLogin';
        export const readPermission = 'Security:HistorycalLogin';
        export const updatePermission = 'Security:HistorycalLogin';

        export declare const enum Fields {
            Id = "Id",
            Nik = "Nik",
            Login = "Login",
            Logout = "Logout",
            IsMobile = "IsMobile",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

