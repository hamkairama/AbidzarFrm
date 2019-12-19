namespace AbidzarFrm.Rukuntangga {
    export interface TbKelurahanRow {
        Id?: number;
        IdKecamatan?: number;
        KodeKelurahan?: string;
        NamaKelurahan?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        IdKecamatanIdKota?: number;
        IdKecamatanKodeKecamatan?: string;
        IdKecamatanNamaKecamatan?: string;
        IdKecamatanDibuatOleh?: string;
        IdKecamatanDibuatTanggal?: string;
        IdKecamatanDieditOleh?: string;
        IdKecamatanDieditTanggal?: string;
        IdKecamatanSystemStatus?: boolean;
    }

    export namespace TbKelurahanRow {
        export const idProperty = 'Id';
        export const nameProperty = 'KodeKelurahan';
        export const localTextPrefix = 'Rukuntangga.TbKelurahan';
        export const lookupKey = 'Rukuntangga.Kelurahan';

        export function getLookup(): Q.Lookup<TbKelurahanRow> {
            return Q.getLookup<TbKelurahanRow>('Rukuntangga.Kelurahan');
        }
        export const deletePermission = 'Master:Kelurahan:Delete';
        export const insertPermission = 'Master:Kelurahan:Insert';
        export const readPermission = 'Master:Kelurahan:View';
        export const updatePermission = 'Master:Kelurahan:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdKecamatan = "IdKecamatan",
            KodeKelurahan = "KodeKelurahan",
            NamaKelurahan = "NamaKelurahan",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            IdKecamatanIdKota = "IdKecamatanIdKota",
            IdKecamatanKodeKecamatan = "IdKecamatanKodeKecamatan",
            IdKecamatanNamaKecamatan = "IdKecamatanNamaKecamatan",
            IdKecamatanDibuatOleh = "IdKecamatanDibuatOleh",
            IdKecamatanDibuatTanggal = "IdKecamatanDibuatTanggal",
            IdKecamatanDieditOleh = "IdKecamatanDieditOleh",
            IdKecamatanDieditTanggal = "IdKecamatanDieditTanggal",
            IdKecamatanSystemStatus = "IdKecamatanSystemStatus"
        }
    }
}

