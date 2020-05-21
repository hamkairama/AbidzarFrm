namespace AbidzarFrm.Rukuntangga {
    export interface TbKtpForm {
        Kk: Serenity.StringEditor;
        Nik: Serenity.StringEditor;
        Nama: Serenity.StringEditor;
        DataStatus: Serenity.StringEditor;
        TempatLahir: Serenity.StringEditor;
        TanggalLahir: Serenity.DateEditor;
        Agama: Common.Editor.AgamaEditor;
        JenisKelamin: Common.Editor.JenisKelaminEditor;
        IdProvinsi: Serenity.LookupEditor;
        IdKota: Common.Editor.SelectEditor;
        IdKecamatan: Common.Editor.SelectEditor;
        IdKelurahan: Common.Editor.SelectEditor;
        Alamat: Serenity.TextAreaEditor;
        Rt: Common.Editor.Sequens3Editor;
        Rw: Common.Editor.Sequens3Editor;
        KodePos: Serenity.StringEditor;
        StatusPerkawinan: Common.Editor.StatusEditor;
        TanggalPerkawinan: Serenity.DateEditor;
        Kewarganegaraan: Common.Editor.WargaNegaraEditor;
        JenisPekerjaan: Common.Editor.PekerjaanEditor;
        GolonganDarah: Common.Editor.GolonganDarahEditor;
        Pendidikan: Common.Editor.PendidikanEditor;
        PhotoKtp: Serenity.ImageUploadEditor;
        SignatureKtp: Serenity.ImageUploadEditor;
        NamaAyah: Serenity.StringEditor;
        NamaIbu: Serenity.StringEditor;
        TinggalSesuaiKtp: Common.Editor.YesNoEditor;
        IdProvinsiTinggal: Serenity.LookupEditor;
        IdKotaTinggal: Common.Editor.SelectEditor;
        IdKecamatanTinggal: Common.Editor.SelectEditor;
        IdKelurahanTinggal: Common.Editor.SelectEditor;
        RwTinggal: Common.Editor.Sequens3Editor;
        RtTinggal: Common.Editor.Sequens3Editor;
        KodeRt: Serenity.StringEditor;
        AlamatTinggal: Serenity.StringEditor;
        Latitude: Serenity.DecimalEditor;
        Longitude: Serenity.DecimalEditor;
        PhotoRumah: Serenity.ImageUploadEditor;
        Attachment: Serenity.MultipleImageUploadEditor;
    }

    export class TbKtpForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.TbKtp';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbKtpForm.init)  {
                TbKtpForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = Common.Editor.AgamaEditor;
                var w3 = Common.Editor.JenisKelaminEditor;
                var w4 = s.LookupEditor;
                var w5 = Common.Editor.SelectEditor;
                var w6 = s.TextAreaEditor;
                var w7 = Common.Editor.Sequens3Editor;
                var w8 = Common.Editor.StatusEditor;
                var w9 = Common.Editor.WargaNegaraEditor;
                var w10 = Common.Editor.PekerjaanEditor;
                var w11 = Common.Editor.GolonganDarahEditor;
                var w12 = Common.Editor.PendidikanEditor;
                var w13 = s.ImageUploadEditor;
                var w14 = Common.Editor.YesNoEditor;
                var w15 = s.DecimalEditor;
                var w16 = s.MultipleImageUploadEditor;

                Q.initFormType(TbKtpForm, [
                    'Kk', w0,
                    'Nik', w0,
                    'Nama', w0,
                    'DataStatus', w0,
                    'TempatLahir', w0,
                    'TanggalLahir', w1,
                    'Agama', w2,
                    'JenisKelamin', w3,
                    'IdProvinsi', w4,
                    'IdKota', w5,
                    'IdKecamatan', w5,
                    'IdKelurahan', w5,
                    'Alamat', w6,
                    'Rt', w7,
                    'Rw', w7,
                    'KodePos', w0,
                    'StatusPerkawinan', w8,
                    'TanggalPerkawinan', w1,
                    'Kewarganegaraan', w9,
                    'JenisPekerjaan', w10,
                    'GolonganDarah', w11,
                    'Pendidikan', w12,
                    'PhotoKtp', w13,
                    'SignatureKtp', w13,
                    'NamaAyah', w0,
                    'NamaIbu', w0,
                    'TinggalSesuaiKtp', w14,
                    'IdProvinsiTinggal', w4,
                    'IdKotaTinggal', w5,
                    'IdKecamatanTinggal', w5,
                    'IdKelurahanTinggal', w5,
                    'RwTinggal', w7,
                    'RtTinggal', w7,
                    'KodeRt', w0,
                    'AlamatTinggal', w0,
                    'Latitude', w15,
                    'Longitude', w15,
                    'PhotoRumah', w13,
                    'Attachment', w16
                ]);
            }
        }
    }
}

