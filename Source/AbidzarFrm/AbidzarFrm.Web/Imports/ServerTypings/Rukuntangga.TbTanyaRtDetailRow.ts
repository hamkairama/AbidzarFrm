namespace AbidzarFrm.Rukuntangga {
    export interface TbTanyaRtDetailRow {
        Id?: number;
        IdTanyaRt?: number;
        Deskripsi?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        IdTanyaRtJudul?: string;
        IdTanyaRtDibuatOleh?: string;
        IdTanyaRtDibuatTanggal?: string;
        IdTanyaRtDieditOleh?: string;
        IdTanyaRtDieditTanggal?: string;
        IdTanyaRtSystemStatus?: boolean;
    }

    export namespace TbTanyaRtDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Deskripsi';
        export const localTextPrefix = 'Rukuntangga.TbTanyaRtDetail';
        export const deletePermission = 'Master:TanyaRt:Delete';
        export const insertPermission = 'Master:TanyaRt:Insert';
        export const readPermission = 'Master:TanyaRt:View';
        export const updatePermission = 'Master:TanyaRt:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdTanyaRt = "IdTanyaRt",
            Deskripsi = "Deskripsi",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            IdTanyaRtJudul = "IdTanyaRtJudul",
            IdTanyaRtDibuatOleh = "IdTanyaRtDibuatOleh",
            IdTanyaRtDibuatTanggal = "IdTanyaRtDibuatTanggal",
            IdTanyaRtDieditOleh = "IdTanyaRtDieditOleh",
            IdTanyaRtDieditTanggal = "IdTanyaRtDieditTanggal",
            IdTanyaRtSystemStatus = "IdTanyaRtSystemStatus"
        }
    }
}

