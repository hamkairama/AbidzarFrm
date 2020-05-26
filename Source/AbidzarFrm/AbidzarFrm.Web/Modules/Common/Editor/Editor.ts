namespace AbidzarFrm.Common.Editor {
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class SendEmailTypeEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            // add option accepts a key (id) value and display text value
            this.addOption("Role", "Role");
            this.addOption("Personality", "Personality");
        }
    }
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class JenisKelaminEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("L", "Laki-laki");
            this.addOption("P", "Perempuan");
        }
    }
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class AgamaEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("A1", "Islam");
            this.addOption("A2", "Kristen");
            this.addOption("A1", "Katolik");
            this.addOption("A2", "Hindu");
            this.addOption("A1", "Buddha");
            this.addOption("A2", "Konghucu");
        }
    }
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class LevelAreaEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("RT", "RT");
            this.addOption("RW", "RW");
        }
    }
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class TypePosisiIklanEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("0", "Dashboard");
            this.addOption("1", "Informasi");
        }
    }
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class TypeSlideshowEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("0", "Slide");
            this.addOption("1", "Horizonscroll");
        }
    }
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class StatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("K", "Kawin");
            this.addOption("B", "Belum Kawin");
            this.addOption("J", "Janda");
        }
    }
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class PekerjaanEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("BRH", "Buruh");
            this.addOption("PNS", "Pegawai Negeri");
            this.addOption("PS", "Pegawai Swasta");
            this.addOption("BWU", "Wirausaha");
            this.addOption("MRT", "Mengurus Rumah Tangga");
            this.addOption("LLL", "Lain-Lain");
        }
    }
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class GolonganDarahEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("O", "O");
            this.addOption("A", "A");
            this.addOption("AB", "AB");
            this.addOption("B", "B");
        }
    }

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class WargaNegaraEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("WNI", "WNI");
            this.addOption("WNA", "WNA");
        }
    }

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class PendidikanEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("SD", "SD");
            this.addOption("SMP", "SMP");
            this.addOption("SLTA", "SLTA");
            this.addOption("D1", "D1");
            this.addOption("D2", "D2");
            this.addOption("D3", "D3");
            this.addOption("S1", "S1");
            this.addOption("S2", "S2");
            this.addOption("S3", "S3");
        }
    }

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class SelectEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("", "Select");
        }
    }

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class WarnaEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("default", "Default");
            this.addOption("dark", "Dark");
            this.addOption("white", "White");
            this.addOption("green", "Green");
            this.addOption("red", "Red");
            this.addOption("yellow", "Yellow");
            this.addOption("blue", "Blue");
            this.addOption("purple", "Purple");
        }
    }

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class Sequens3Editor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            for (var i = 1; i < 20; i++) {
                let val: string = "";
                if (i < 10) {
                    val = "00" + i.toString();
                } else {
                    val = "0" + i.toString();
                }
                this.addOption(val, val);
            }
        }
    }

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class MonthSelectionEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            for (var i = 1; i <= 12; i++)
                this.addOption(i.toString(), i.toString());
        }
    }

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class YearSelectionEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);

            var curYear = new Date().getFullYear();
            let index: number = 0;
            for (var t = curYear - 10; t <= curYear; t++)
                this.addOption(t.toString(), t.toString());
        }
    }

    @Serenity.Decorators.registerEditor()
    export class ProvinsiEditor extends Serenity.Select2Editor<Object, Object>
    {
        constructor(hidden: JQuery) {
            super(hidden, null);
            let items: AbidzarFrm.Rukuntangga.TbProvinsiRow[] = Q.getLookup("Rukuntangga.Provinsi").items;
            items.forEach((x, index) => {
                super.addItem({ id: x.Id.toString(), source: x.NamaProvinsi, text: x.NamaProvinsi, disabled: false });
            });
        }
    }

    @Serenity.Decorators.registerEditor()
    export class KotaEditor extends Serenity.Select2Editor<Object, Object>
    {
        constructor(hidden: JQuery) {
            super(hidden, null);
            let items: AbidzarFrm.Rukuntangga.TbKotaRow[] = Q.getLookup("Rukuntangga.Kota").items;
            items.forEach((x, index) => {
                super.addItem({ id: x.Id.toString(), source: x.NamaKota, text: x.NamaKota, disabled: false });
            });
        }
    }

    @Serenity.Decorators.registerEditor()
    export class KecamatanEditor extends Serenity.Select2Editor<Object, Object>
    {
        constructor(hidden: JQuery) {
            super(hidden, null);
            let items: AbidzarFrm.Rukuntangga.TbKecamatanRow[] = Q.getLookup("Rukuntangga.Kecamatan").items;
            items.forEach((x, index) => {
                super.addItem({ id: x.Id.toString(), source: x.NamaKecamatan, text: x.NamaKecamatan, disabled: false });
            });
        }
    }

    @Serenity.Decorators.registerEditor()
    export class KelurahanEditor extends Serenity.Select2Editor<Object, Object>
    {
        constructor(hidden: JQuery) {
            super(hidden, null);
            let items: AbidzarFrm.Rukuntangga.TbKelurahanRow[] = Q.getLookup("Rukuntangga.Kelurahan").items;
            items.forEach((x, index) => {
                super.addItem({ id: x.Id.toString(), source: x.NamaKelurahan, text: x.NamaKelurahan, disabled: false });
            });
        }
    }

    @Serenity.Decorators.registerEditor()
    export class JabatanEditor extends Serenity.Select2Editor<Object, Object>
    {
        constructor(hidden: JQuery) {
            super(hidden, null);
            let items: AbidzarFrm.Rukuntangga.TbJabatanRow[] = Q.getLookup("Rukuntangga.Jabatan").items;
            items.forEach((x, index) => {
                super.addItem({ id: x.Id.toString(), source: x.NamaJabatan, text: x.NamaJabatan, disabled: false });
            });
        }
    }

    @Serenity.Decorators.registerEditor()
    export class TransactionDocumentCodeEditor extends Serenity.Select2Editor<Object, Object>
    {
        constructor(hidden: JQuery) {
            super(hidden, null);
            let items: Rukuntangga.TbTransactionDocumentCodeRow[] = Q.getLookup("Rukuntangga.TransactionDocumentCode").items;
            items.forEach((x, index) => {
                super.addItem({ id: x.DocumentCode.toString(), source: x.DocumentCode, text: x.DocumentCode, disabled: false });
            });
        }
    }

    @Serenity.Decorators.registerEditor()
    export class EmailTemplateEditor extends Serenity.Select2Editor<Object, Object>
    {
        constructor(hidden: JQuery) {
            super(hidden, null);
            let items: Rukuntangga.TbEmailTemplateRow[] = Q.getLookup("Rukuntangga.EmailTemplate").items;
            items.forEach((x, index) => {
                super.addItem({ id: x.KodeTemplate.toString(), source: x.KodeTemplate, text: x.KodeTemplate, disabled: false });
            });
        }
    }

    @Serenity.Decorators.registerEditor()
    export class AdministrationRoleEditor extends Serenity.Select2Editor<Object, Object>
    {
        constructor(hidden: JQuery) {
            super(hidden, null);
            let items: Administration.RoleRow[] = Q.getLookup("Administration.Role").items;
            items.forEach((x, index) => {
                super.addItem({ id: x.RoleName, source: x.RoleName, text: x.RoleName, disabled: false });
            });
        }
    }

    @Serenity.Decorators.registerEditor()
    export class TransactionStatusEditor extends Serenity.Select2Editor<Object, Object>
    {
        constructor(hidden: JQuery) {
            super(hidden, null);
            let items: Rukuntangga.TbTransactionStatusRow[] = Q.getLookup("Rukuntangga.TransactionStatus").items;
            items.forEach((x, index) => {
                super.addItem({ id: x.Code, source: x.Internal, text: x.Internal, disabled: false });
            });
        }
    }
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class YesNoEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("1", "YES");
            this.addOption("0", "NO");
        }
    }
}
