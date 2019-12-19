namespace AbidzarFrm.Rukuntangga {
    export interface TbRwRow {
        Id?: number;
        IdKecamatan?: number;
        IdKota?: number;
        IdProvinsi?: number;
        IdKelurahan?: number;
        KodeRw?: string;
        Nik?: string;
        NoRw?: string;
        NamaRw?: string;
        Photo?: string;
        Deskripsi?: string;
        Quotes?: string;
        Visi?: string;
        Misi?: string;
        Facebook?: string;
        Twitter?: string;
        Instagram?: string;
        Whatsapp?: string;
        Header?: string;
        Footer?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbRwRow {
        export const idProperty = 'Id';
        export const nameProperty = 'KodeRw';
        export const localTextPrefix = 'Rukuntangga.TbRw';
        export const lookupKey = 'Rukuntangga.Rw';

        export function getLookup(): Q.Lookup<TbRwRow> {
            return Q.getLookup<TbRwRow>('Rukuntangga.Rw');
        }
        export const deletePermission = 'Master:Rw:Delete';
        export const insertPermission = 'Master:Rw:Insert';
        export const readPermission = 'Master:Rw:View';
        export const updatePermission = 'Master:Rw:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdKecamatan = "IdKecamatan",
            IdKota = "IdKota",
            IdProvinsi = "IdProvinsi",
            IdKelurahan = "IdKelurahan",
            KodeRw = "KodeRw",
            Nik = "Nik",
            NoRw = "NoRw",
            NamaRw = "NamaRw",
            Photo = "Photo",
            Deskripsi = "Deskripsi",
            Quotes = "Quotes",
            Visi = "Visi",
            Misi = "Misi",
            Facebook = "Facebook",
            Twitter = "Twitter",
            Instagram = "Instagram",
            Whatsapp = "Whatsapp",
            Header = "Header",
            Footer = "Footer",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

