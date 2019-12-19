namespace AbidzarFrm.Rukuntangga {
    export interface TbJabatanRow {
        Id?: number;
        NamaJabatan?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbJabatanRow {
        export const idProperty = 'Id';
        export const nameProperty = 'NamaJabatan';
        export const localTextPrefix = 'Rukuntangga.TbJabatan';
        export const lookupKey = 'Rukuntangga.Jabatan';

        export function getLookup(): Q.Lookup<TbJabatanRow> {
            return Q.getLookup<TbJabatanRow>('Rukuntangga.Jabatan');
        }
        export const deletePermission = 'Master:Jabatan:Delete';
        export const insertPermission = 'Master:Jabatan:Insert';
        export const readPermission = 'Master:Jabatan:View';
        export const updatePermission = 'Master:Jabatan:Modify';

        export declare const enum Fields {
            Id = "Id",
            NamaJabatan = "NamaJabatan",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

