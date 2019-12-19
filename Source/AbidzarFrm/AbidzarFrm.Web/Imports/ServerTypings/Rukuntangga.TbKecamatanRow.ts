namespace AbidzarFrm.Rukuntangga {
    export interface TbKecamatanRow {
        Id?: number;
        IdKota?: number;
        KodeKecamatan?: string;
        NamaKecamatan?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        IdKotaIdProvinsi?: number;
        IdKotaKodeKota?: string;
        IdKotaNamaKota?: string;
        IdKotaDibuatOleh?: string;
        IdKotaDibuatTanggal?: string;
        IdKotaDieditOleh?: string;
        IdKotaDieditTanggal?: string;
        IdKotaSystemStatus?: boolean;
    }

    export namespace TbKecamatanRow {
        export const idProperty = 'Id';
        export const nameProperty = 'KodeKecamatan';
        export const localTextPrefix = 'Rukuntangga.TbKecamatan';
        export const lookupKey = 'Rukuntangga.Kecamatan';

        export function getLookup(): Q.Lookup<TbKecamatanRow> {
            return Q.getLookup<TbKecamatanRow>('Rukuntangga.Kecamatan');
        }
        export const deletePermission = 'Master:Kecamatan:Delete';
        export const insertPermission = 'Master:Kecamatan:Insert';
        export const readPermission = 'Master:Kecamatan:View';
        export const updatePermission = 'Master:Kecamatan:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdKota = "IdKota",
            KodeKecamatan = "KodeKecamatan",
            NamaKecamatan = "NamaKecamatan",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            IdKotaIdProvinsi = "IdKotaIdProvinsi",
            IdKotaKodeKota = "IdKotaKodeKota",
            IdKotaNamaKota = "IdKotaNamaKota",
            IdKotaDibuatOleh = "IdKotaDibuatOleh",
            IdKotaDibuatTanggal = "IdKotaDibuatTanggal",
            IdKotaDieditOleh = "IdKotaDieditOleh",
            IdKotaDieditTanggal = "IdKotaDieditTanggal",
            IdKotaSystemStatus = "IdKotaSystemStatus"
        }
    }
}

