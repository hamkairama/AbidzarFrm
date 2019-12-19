namespace AbidzarFrm.Rukuntangga {
    export interface TbKtpRow {
        Id?: number;
        Nik?: string;
        Nama?: string;
        TempatLahir?: string;
        TanggalLahir?: string;
        JenisKelamin?: string;
        Alamat?: string;
        IdKecamatan?: number;
        IdKota?: number;
        IdProvinsi?: number;
        IdKelurahan?: number;
        Rt?: string;
        Rw?: string;
        Agama?: string;
        StatusPerkawinan?: string;
        TanggalPerkawinan?: string;
        JenisPekerjaan?: string;
        Kewarganegaraan?: string;
        GolonganDarah?: string;
        Pendidikan?: string;
        PhotoKtp?: string;
        SignatureKtp?: string;
        KodePos?: string;
        NamaAyah?: string;
        NamaIbu?: string;
        Kk?: string;
        AlamatTinggal?: string;
        IdKelurahanTinggal?: number;
        RtTinggal?: string;
        RwTinggal?: string;
        Attachment?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        KodeRt?: string;
    }

    export namespace TbKtpRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nik';
        export const localTextPrefix = 'Rukuntangga.TbKtp';
        export const lookupKey = 'Rukuntangga.Ktp';

        export function getLookup(): Q.Lookup<TbKtpRow> {
            return Q.getLookup<TbKtpRow>('Rukuntangga.Ktp');
        }
        export const deletePermission = 'Master:Ktp:Delete';
        export const insertPermission = 'Master:Ktp:Insert';
        export const readPermission = 'Master:Ktp:View';
        export const updatePermission = 'Master:Ktp:Modify';

        export declare const enum Fields {
            Id = "Id",
            Nik = "Nik",
            Nama = "Nama",
            TempatLahir = "TempatLahir",
            TanggalLahir = "TanggalLahir",
            JenisKelamin = "JenisKelamin",
            Alamat = "Alamat",
            IdKecamatan = "IdKecamatan",
            IdKota = "IdKota",
            IdProvinsi = "IdProvinsi",
            IdKelurahan = "IdKelurahan",
            Rt = "Rt",
            Rw = "Rw",
            Agama = "Agama",
            StatusPerkawinan = "StatusPerkawinan",
            TanggalPerkawinan = "TanggalPerkawinan",
            JenisPekerjaan = "JenisPekerjaan",
            Kewarganegaraan = "Kewarganegaraan",
            GolonganDarah = "GolonganDarah",
            Pendidikan = "Pendidikan",
            PhotoKtp = "PhotoKtp",
            SignatureKtp = "SignatureKtp",
            KodePos = "KodePos",
            NamaAyah = "NamaAyah",
            NamaIbu = "NamaIbu",
            Kk = "Kk",
            AlamatTinggal = "AlamatTinggal",
            IdKelurahanTinggal = "IdKelurahanTinggal",
            RtTinggal = "RtTinggal",
            RwTinggal = "RwTinggal",
            Attachment = "Attachment",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            KodeRt = "KodeRt"
        }
    }
}

