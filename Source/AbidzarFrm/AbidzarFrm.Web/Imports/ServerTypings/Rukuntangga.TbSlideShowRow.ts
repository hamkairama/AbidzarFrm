namespace AbidzarFrm.Rukuntangga {
    export interface TbSlideShowRow {
        Id?: number;
        Judul?: string;
        Deskripsi?: string;
        FileName?: string;
        Tipe?: number;
        Posisi?: number;
        PathUrl?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        KodeRt?: string;
    }

    export namespace TbSlideShowRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Judul';
        export const localTextPrefix = 'Rukuntangga.TbSlideShow';
        export const deletePermission = 'Master:Slidesho:Delete';
        export const insertPermission = 'Master:Slideshow:Insert';
        export const readPermission = 'Master:Slideshow:View';
        export const updatePermission = 'Master:Slideshow:Modify';

        export declare const enum Fields {
            Id = "Id",
            Judul = "Judul",
            Deskripsi = "Deskripsi",
            FileName = "FileName",
            Tipe = "Tipe",
            Posisi = "Posisi",
            PathUrl = "PathUrl",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            KodeRt = "KodeRt"
        }
    }
}

