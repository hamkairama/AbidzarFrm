namespace AbidzarFrm.Rukuntangga {
    export interface TbProvinsiRow {
        Id?: number;
        KodeProvinsi?: string;
        NamaProvinsi?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbProvinsiRow {
        export const idProperty = 'Id';
        export const nameProperty = 'KodeProvinsi';
        export const localTextPrefix = 'Rukuntangga.TbProvinsi';
        export const lookupKey = 'Rukuntangga.Provinsi';

        export function getLookup(): Q.Lookup<TbProvinsiRow> {
            return Q.getLookup<TbProvinsiRow>('Rukuntangga.Provinsi');
        }
        export const deletePermission = 'Master:Provinsi:Delete';
        export const insertPermission = 'Master:Provinsi:Insert';
        export const readPermission = 'Master:Provinsi:View';
        export const updatePermission = 'Master:Provinsi:Modify';

        export declare const enum Fields {
            Id = "Id",
            KodeProvinsi = "KodeProvinsi",
            NamaProvinsi = "NamaProvinsi",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

