namespace AbidzarFrm.Rukuntangga {
    export interface TbPhotoKtpRow {
        Id?: number;
        NamaFile?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbPhotoKtpRow {
        export const idProperty = 'Id';
        export const nameProperty = 'NamaFile';
        export const localTextPrefix = 'Rukuntangga.TbPhotoKtp';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            NamaFile = "NamaFile",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

