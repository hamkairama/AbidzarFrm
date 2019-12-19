namespace AbidzarFrm.Rukuntangga {
    export interface TbTanyaRtRow {
        Id?: number;
        Judul?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbTanyaRtRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Judul';
        export const localTextPrefix = 'Rukuntangga.TbTanyaRt';
        export const deletePermission = 'Master:TanyaRt:Delete';
        export const insertPermission = 'Master:TanyaRt:Insert';
        export const readPermission = 'Master:TanyaRt:View';
        export const updatePermission = 'Master:TanyaRt:Modify';

        export declare const enum Fields {
            Id = "Id",
            Judul = "Judul",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

