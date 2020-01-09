namespace AbidzarFrm.Rukuntangga {
    export interface TbGaleryRow {
        Id?: number;
        Deskripsi?: string;
        LevelArea?: string;
        Photos?: string;
        Thumbnail?: string;
        DibuatOleh?: string;
        KodeRt?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
    }

    export namespace TbGaleryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Deskripsi';
        export const localTextPrefix = 'Rukuntangga.TbGalery';
        export const lookupKey = 'Rukuntangga.Galery';

        export function getLookup(): Q.Lookup<TbGaleryRow> {
            return Q.getLookup<TbGaleryRow>('Rukuntangga.Galery');
        }
        export const deletePermission = 'Master:Galery:Delete';
        export const insertPermission = 'Master:Galery:Insert';
        export const readPermission = 'Master:Galery:View';
        export const updatePermission = 'Master:Galery:Modify';

        export declare const enum Fields {
            Id = "Id",
            Deskripsi = "Deskripsi",
            LevelArea = "LevelArea",
            Photos = "Photos",
            Thumbnail = "Thumbnail",
            DibuatOleh = "DibuatOleh",
            KodeRt = "KodeRt",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal"
        }
    }
}

