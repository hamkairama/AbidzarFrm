namespace AbidzarFrm.Rukuntangga {
    export interface TbKtpForm {
        Kk: Serenity.StringEditor;
        Nik: Serenity.StringEditor;
        Nama: Serenity.StringEditor;
        TempatLahir: Serenity.StringEditor;
        TanggalLahir: Serenity.DateEditor;
        Agama: Common.Editor.AgamaEditor;
        JenisKelamin: Common.Editor.JenisKelaminEditor;
        IdProvinsi: Serenity.LookupEditor;
        IdKota: Serenity.LookupEditor;
        IdKecamatan: Serenity.LookupEditor;
        IdKelurahan: Serenity.LookupEditor;
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
        IdKelurahanTinggal: Serenity.IntegerEditor;
        AlamatTinggal: Serenity.StringEditor;
        RtTinggal: Common.Editor.Sequens3Editor;
        RwTinggal: Common.Editor.Sequens3Editor;
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
                var w1 = s.DateEditor;
                var w2 = Common.Editor.AgamaEditor;
                var w3 = Common.Editor.JenisKelaminEditor;
                var w4 = s.LookupEditor;
                var w5 = s.TextAreaEditor;
                var w6 = Common.Editor.Sequens3Editor;
                var w7 = Common.Editor.StatusEditor;
                var w8 = Common.Editor.WargaNegaraEditor;
                var w9 = Common.Editor.PekerjaanEditor;
                var w10 = Common.Editor.GolonganDarahEditor;
                var w11 = Common.Editor.PendidikanEditor;
                var w12 = s.ImageUploadEditor;
                var w13 = s.IntegerEditor;
                var w14 = s.MultipleImageUploadEditor;

                Q.initFormType(TbKtpForm, [
                    'Kk', w0,
                    'Nik', w0,
                    'Nama', w0,
                    'TempatLahir', w0,
                    'TanggalLahir', w1,
                    'Agama', w2,
                    'JenisKelamin', w3,
                    'IdProvinsi', w4,
                    'IdKota', w4,
                    'IdKecamatan', w4,
                    'IdKelurahan', w4,
                    'Alamat', w5,
                    'Rt', w6,
                    'Rw', w6,
                    'KodePos', w0,
                    'StatusPerkawinan', w7,
                    'TanggalPerkawinan', w1,
                    'Kewarganegaraan', w8,
                    'JenisPekerjaan', w9,
                    'GolonganDarah', w10,
                    'Pendidikan', w11,
                    'PhotoKtp', w12,
                    'SignatureKtp', w12,
                    'NamaAyah', w0,
                    'NamaIbu', w0,
                    'IdKelurahanTinggal', w13,
                    'AlamatTinggal', w0,
                    'RtTinggal', w6,
                    'RwTinggal', w6,
                    'KodeRt', w0,
                    'Attachment', w14
                ]);
            }
        }
    }
}

