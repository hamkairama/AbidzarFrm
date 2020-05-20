namespace AbidzarFrm.Rukuntangga {
    export interface TbKtpForm {
        Kk: Serenity.StringEditor;
        Nik: Serenity.StringEditor;
        Nama: Serenity.StringEditor;
        DataStatus: Common.Editor.DataStatusEditor;
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
        AlamatTinggal: Serenity.StringEditor;
        RtTinggal: Common.Editor.Sequens3Editor;
        RwTinggal: Common.Editor.Sequens3Editor;
        PhotoRumah: Serenity.ImageUploadEditor;
        KodeRt: Serenity.StringEditor;
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
                var w1 = Common.Editor.DataStatusEditor;
                var w2 = s.DateEditor;
                var w3 = Common.Editor.AgamaEditor;
                var w4 = Common.Editor.JenisKelaminEditor;
                var w5 = s.LookupEditor;
                var w6 = Common.Editor.SelectEditor;
                var w7 = s.TextAreaEditor;
                var w8 = Common.Editor.Sequens3Editor;
                var w9 = Common.Editor.StatusEditor;
                var w10 = Common.Editor.WargaNegaraEditor;
                var w11 = Common.Editor.PekerjaanEditor;
                var w12 = Common.Editor.GolonganDarahEditor;
                var w13 = Common.Editor.PendidikanEditor;
                var w14 = s.ImageUploadEditor;
                var w15 = Common.Editor.YesNoEditor;
                var w16 = s.MultipleImageUploadEditor;

                Q.initFormType(TbKtpForm, [
                    'Kk', w0,
                    'Nik', w0,
                    'Nama', w0,
                    'DataStatus', w1,
                    'TempatLahir', w0,
                    'TanggalLahir', w2,
                    'Agama', w3,
                    'JenisKelamin', w4,
                    'IdProvinsi', w5,
                    'IdKota', w6,
                    'IdKecamatan', w6,
                    'IdKelurahan', w6,
                    'Alamat', w7,
                    'Rt', w8,
                    'Rw', w8,
                    'KodePos', w0,
                    'StatusPerkawinan', w9,
                    'TanggalPerkawinan', w2,
                    'Kewarganegaraan', w10,
                    'JenisPekerjaan', w11,
                    'GolonganDarah', w12,
                    'Pendidikan', w13,
                    'PhotoKtp', w14,
                    'SignatureKtp', w14,
                    'NamaAyah', w0,
                    'NamaIbu', w0,
                    'TinggalSesuaiKtp', w15,
                    'IdProvinsiTinggal', w5,
                    'IdKotaTinggal', w6,
                    'IdKecamatanTinggal', w6,
                    'IdKelurahanTinggal', w6,
                    'AlamatTinggal', w0,
                    'RtTinggal', w8,
                    'RwTinggal', w8,
                    'PhotoRumah', w14,
                    'KodeRt', w0,
                    'Attachment', w16
                ]);
            }
        }
    }
}

