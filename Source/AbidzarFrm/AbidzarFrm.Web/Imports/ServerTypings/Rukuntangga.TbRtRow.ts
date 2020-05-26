namespace AbidzarFrm.Rukuntangga {
    export interface TbRtRow {
        Id?: number;
        IdRw?: number;
        KodeRt?: string;
        NoRt?: string;
        Nik?: string;
        NamaRt?: string;
        KodeLogin?: string;
        Photo?: string;
        Deskripsi?: string;
        Quotes?: string;
        Visi?: string;
        Misi?: string;
        Facebook?: string;
        Twitter?: string;
        Instagram?: string;
        Whatsapp?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        IdRwKodeRw?: string;
        IdRwNamaRw?: string;
    }

    export namespace TbRtRow {
        export const idProperty = 'Id';
        export const nameProperty = 'KodeRt';
        export const localTextPrefix = 'Rukuntangga.TbRt';
        export const lookupKey = 'Rukuntangga.TbRt';

        export function getLookup(): Q.Lookup<TbRtRow> {
            return Q.getLookup<TbRtRow>('Rukuntangga.TbRt');
        }
        export const deletePermission = 'Master:Rt:Delete';
        export const insertPermission = 'Master:Rt:Insert';
        export const readPermission = 'Master:Rt:View';
        export const updatePermission = 'Master:Rt:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdRw = "IdRw",
            KodeRt = "KodeRt",
            NoRt = "NoRt",
            Nik = "Nik",
            NamaRt = "NamaRt",
            KodeLogin = "KodeLogin",
            Photo = "Photo",
            Deskripsi = "Deskripsi",
            Quotes = "Quotes",
            Visi = "Visi",
            Misi = "Misi",
            Facebook = "Facebook",
            Twitter = "Twitter",
            Instagram = "Instagram",
            Whatsapp = "Whatsapp",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            IdRwKodeRw = "IdRwKodeRw",
            IdRwNamaRw = "IdRwNamaRw"
        }
    }
}

