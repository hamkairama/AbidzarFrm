namespace AbidzarFrm.Rukuntangga {
    export interface TbPollingPemiluRow {
        Id?: number;
        IdDetailPemilu?: number;
        Nik?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        IdDetailPemiluIdPemilu?: number;
        IdDetailPemiluNoUrut?: number;
        IdDetailPemiluKandidat?: string;
        IdDetailPemiluFileName?: string;
        IdDetailPemiluDibuatOleh?: string;
        IdDetailPemiluDibuatTanggal?: string;
        IdDetailPemiluDieditOleh?: string;
        IdDetailPemiluDieditTanggal?: string;
        IdDetailPemiluSystemStatus?: boolean;
        NikId?: number;
        NikNama?: string;
        NikTempatLahir?: string;
        NikTanggalLahir?: string;
        NikJenisKelamin?: string;
        NikAlamat?: string;
        NikIdKelurahan?: number;
        NikRt?: string;
        NikRw?: string;
        NikAgama?: string;
        NikStatusPerkawinan?: string;
        NikTanggalPerkawinan?: string;
        NikJenisPekerjaan?: string;
        NikKewarganegaraan?: string;
        NikGolonganDarah?: string;
        NikPendidikan?: string;
        NikIdPhotoKtp?: number;
        NikIdSignatureKtp?: number;
        NikKodePos?: string;
        NikNamaAyah?: string;
        NikNamaIbu?: string;
        NikKk?: string;
        NikAlamatTinggal?: string;
        NikIdKelurahanTinggal?: number;
        NikRtTinggal?: string;
        NikRwTinggal?: string;
        NikDibuatOleh?: string;
        NikDibuatTanggal?: string;
        NikDieditOleh?: string;
        NikDieditTanggal?: string;
        NikSystemStatus?: boolean;
        NikKodeRt?: string;
    }

    export namespace TbPollingPemiluRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nik';
        export const localTextPrefix = 'Rukuntangga.TbPollingPemilu';
        export const deletePermission = 'Questioner:Pemilu:Delete';
        export const insertPermission = 'Questioner:Pemilu:Insert';
        export const readPermission = 'Questioner:Pemilu:View';
        export const updatePermission = 'Questioner:Pemilu:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdDetailPemilu = "IdDetailPemilu",
            Nik = "Nik",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            IdDetailPemiluIdPemilu = "IdDetailPemiluIdPemilu",
            IdDetailPemiluNoUrut = "IdDetailPemiluNoUrut",
            IdDetailPemiluKandidat = "IdDetailPemiluKandidat",
            IdDetailPemiluFileName = "IdDetailPemiluFileName",
            IdDetailPemiluDibuatOleh = "IdDetailPemiluDibuatOleh",
            IdDetailPemiluDibuatTanggal = "IdDetailPemiluDibuatTanggal",
            IdDetailPemiluDieditOleh = "IdDetailPemiluDieditOleh",
            IdDetailPemiluDieditTanggal = "IdDetailPemiluDieditTanggal",
            IdDetailPemiluSystemStatus = "IdDetailPemiluSystemStatus",
            NikId = "NikId",
            NikNama = "NikNama",
            NikTempatLahir = "NikTempatLahir",
            NikTanggalLahir = "NikTanggalLahir",
            NikJenisKelamin = "NikJenisKelamin",
            NikAlamat = "NikAlamat",
            NikIdKelurahan = "NikIdKelurahan",
            NikRt = "NikRt",
            NikRw = "NikRw",
            NikAgama = "NikAgama",
            NikStatusPerkawinan = "NikStatusPerkawinan",
            NikTanggalPerkawinan = "NikTanggalPerkawinan",
            NikJenisPekerjaan = "NikJenisPekerjaan",
            NikKewarganegaraan = "NikKewarganegaraan",
            NikGolonganDarah = "NikGolonganDarah",
            NikPendidikan = "NikPendidikan",
            NikIdPhotoKtp = "NikIdPhotoKtp",
            NikIdSignatureKtp = "NikIdSignatureKtp",
            NikKodePos = "NikKodePos",
            NikNamaAyah = "NikNamaAyah",
            NikNamaIbu = "NikNamaIbu",
            NikKk = "NikKk",
            NikAlamatTinggal = "NikAlamatTinggal",
            NikIdKelurahanTinggal = "NikIdKelurahanTinggal",
            NikRtTinggal = "NikRtTinggal",
            NikRwTinggal = "NikRwTinggal",
            NikDibuatOleh = "NikDibuatOleh",
            NikDibuatTanggal = "NikDibuatTanggal",
            NikDieditOleh = "NikDieditOleh",
            NikDieditTanggal = "NikDieditTanggal",
            NikSystemStatus = "NikSystemStatus",
            NikKodeRt = "NikKodeRt"
        }
    }
}

