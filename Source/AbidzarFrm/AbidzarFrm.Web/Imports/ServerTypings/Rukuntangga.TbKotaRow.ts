namespace AbidzarFrm.Rukuntangga {
    export interface TbKotaRow {
        Id?: number;
        IdProvinsi?: number;
        KodeKota?: string;
        NamaKota?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        IdProvinsiKodeProvinsi?: string;
        IdProvinsiNamaProvinsi?: string;
        IdProvinsiDibuatOleh?: string;
        IdProvinsiDibuatTanggal?: string;
        IdProvinsiDieditOleh?: string;
        IdProvinsiDieditTanggal?: string;
        IdProvinsiSystemStatus?: boolean;
    }

    export namespace TbKotaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'KodeKota';
        export const localTextPrefix = 'Rukuntangga.TbKota';
        export const lookupKey = 'Rukuntangga.Kota';

        export function getLookup(): Q.Lookup<TbKotaRow> {
            return Q.getLookup<TbKotaRow>('Rukuntangga.Kota');
        }
        export const deletePermission = 'Master:Kota:Delete';
        export const insertPermission = 'Master:Kota:Insert';
        export const readPermission = 'Master:Kota:View';
        export const updatePermission = 'Master:Kota:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdProvinsi = "IdProvinsi",
            KodeKota = "KodeKota",
            NamaKota = "NamaKota",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            IdProvinsiKodeProvinsi = "IdProvinsiKodeProvinsi",
            IdProvinsiNamaProvinsi = "IdProvinsiNamaProvinsi",
            IdProvinsiDibuatOleh = "IdProvinsiDibuatOleh",
            IdProvinsiDibuatTanggal = "IdProvinsiDibuatTanggal",
            IdProvinsiDieditOleh = "IdProvinsiDieditOleh",
            IdProvinsiDieditTanggal = "IdProvinsiDieditTanggal",
            IdProvinsiSystemStatus = "IdProvinsiSystemStatus"
        }
    }
}

