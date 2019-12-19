namespace AbidzarFrm.Rukuntangga {
    export interface TbUserRow {
        Id?: number;
        Nik?: string;
        Sandi?: string;
        Email?: string;
        Status?: boolean;
        KodeVerifikasi?: string;
        IsMobile?: boolean;
        IdRole?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbUserRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nik';
        export const localTextPrefix = 'Rukuntangga.TbUser';
        export const deletePermission = 'Security:User';
        export const insertPermission = 'Security:User';
        export const readPermission = 'Security:User';
        export const updatePermission = 'Security:User';

        export declare const enum Fields {
            Id = "Id",
            Nik = "Nik",
            Sandi = "Sandi",
            Email = "Email",
            Status = "Status",
            KodeVerifikasi = "KodeVerifikasi",
            IsMobile = "IsMobile",
            IdRole = "IdRole",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

