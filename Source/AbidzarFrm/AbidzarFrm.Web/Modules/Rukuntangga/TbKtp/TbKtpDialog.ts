
namespace AbidzarFrm.Rukuntangga {
    export namespace VMRegistrationsRole {
        export const SA = 'SA';
        export const RW = 'RW';
        export const RT = 'RT';
        export const WARGA = 'WARGA';
    }
    export namespace StatusCode {
        export const Draft = 0;
        export const Requested = 1;
        export const Verified = 2;
        export const Rejected = 3;
    }

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TbKtpDialog extends Serenity.EntityDialog<TbKtpRow, any> {
        protected getFormKey() { return TbKtpForm.formKey; }
        protected getIdProperty() { return TbKtpRow.idProperty; }
        protected getLocalTextPrefix() { return TbKtpRow.localTextPrefix; }
        protected getNameProperty() { return TbKtpRow.nameProperty; }
        protected getService() { return TbKtpService.baseUrl; }
        protected getDeletePermission() { return TbKtpRow.insertPermission; }
        protected form = new TbKtpForm(this.idPrefix);

        public hasRole(role: string): boolean {
            return Authorization.userDefinition.Roles.indexOf(role) > -1;
        }

        constructor() {
            super();

            this.form.IdProvinsi.changeSelect2(e => {
                this.form.IdKota.value = "";
                this.form.IdKecamatan.value = "";
                this.form.IdKelurahan.value = "";

                this.form.IdKota.items = [];
                this.form.IdKecamatan.items = [];
                this.form.IdKelurahan.items = [];
                this.SetKota();
            });

            this.form.IdKota.changeSelect2(e => {
                this.form.IdKecamatan.value = "";
                this.form.IdKelurahan.value = "";

                this.form.IdKecamatan.items = [];
                this.form.IdKelurahan.items = [];
                this.SetKecamatan();
            });

            this.form.IdKecamatan.changeSelect2(e => {
                this.form.IdKelurahan.value = "";

                this.form.IdKelurahan.items = [];
                this.SetKelurahan();
            });

            this.form.IdProvinsiTinggal.changeSelect2(e => {
                this.form.IdKotaTinggal.value = "";
                this.form.IdKecamatanTinggal.value = "";
                this.form.IdKelurahanTinggal.value = "";

                this.form.IdKotaTinggal.items = [];
                this.form.IdKecamatanTinggal.items = [];
                this.form.IdKelurahanTinggal.items = [];
                this.SetKotaTinggal();
            });

            this.form.IdKotaTinggal.changeSelect2(e => {
                this.form.IdKecamatanTinggal.value = "";
                this.form.IdKelurahanTinggal.value = "";

                this.form.IdKecamatanTinggal.items = [];
                this.form.IdKelurahanTinggal.items = [];
                this.SetKecamatanTinggal();
            });

            this.form.IdKecamatanTinggal.changeSelect2(e => {
                this.form.IdKelurahanTinggal.value = "";

                this.form.IdKelurahanTinggal.items = [];
                this.SetKelurahanTinggal();
            });

            this.form.StatusPerkawinan.changeSelect2(e => {                
                Serenity.EditorUtils.setRequired(this.form.TanggalPerkawinan, this.form.StatusPerkawinan.value == "K");
            })
        }

        updateInterface() {
            super.updateInterface();            

            Serenity.EditorUtils.setRequired(this.form.TanggalPerkawinan, this.form.StatusPerkawinan.value == "K");
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            //if (this.isEditMode()) {
            //    this.SetKota();
            //    this.form.IdKota.value = "4";
            //    this.SetKecamatan();
            //    this.form.IdKecamatan.value = "8";
            //    this.SetKelurahan();
            //    this.form.IdKelurahan.value = "4";


            //    this.SetKotaTinggal();
            //    this.form.IdKotaTinggal.value = this.entity.IdKotaTinggal.toString();
            //    this.SetKecamatanTinggal();
            //    this.form.IdKecamatanTinggal.value = this.entity.IdKecamatanTinggal.toString();
            //    this.SetKelurahanTinggal();
            //    this.form.IdKelurahanTinggal.value = this.entity.IdKelurahanTinggal.toString();

            //}
        }

        validateBeforeSave(): boolean {
            super.validateBeforeSave();

            if (!this.OnlyNumberRegex(this.form.Nik.value, 16)) {
                Q.alert("Nik harus 16 digit");
                return false;
            }
            if (!this.OnlyNumberRegex(this.form.Kk.value, 16)) {
                Q.alert("Kk harus 10 digit");
                return false;
            }

            return true;
        }

        private OnlyNumberRegex(str: string, digit: number): boolean {
            if (str != null && str != "" && str != "-") {
                var pattern = new RegExp("^\\d{" + digit + "}$");
                return pattern.test(str);
            } else {
                return true;
            }
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            buttons.push({
                icon: "fa-arrow-circle-right text-blue",
                hint: "Submit",
                title: "Submit",
                cssClass: "btn-submit-boq",
                onClick: () => {
                    //if (this.IsValidPartialPassthrough()) {
                    //    if (!this.ValidateBeforeSubmitPartialPassthrough()) {
                    //        Q.alert("Please input PR Log No or Passthrough PR Log No ")
                    //        return;
                    //    } else {
                    //        let msg: string = this.ValidateLenghtPartialPassthrough();
                    //        if (msg != "") {
                    //            Q.alert(msg)
                    //            return;
                    //        }
                    //    }
                    //}
                }

            });

            return buttons;
        }

        private SetKota() {
            let idProvinsi: number = parseInt(this.form.IdProvinsi.value);
            let listData = AbidzarFrm.Rukuntangga.TbKotaRow.getLookup().items.filter(x => x.IdProvinsi == idProvinsi);
            var filtered: Serenity.Select2Item[] = [];
            listData.forEach(y => {
                filtered.push({ id: y.Id.toString(), source: y.NamaKota, text: y.NamaKota })
            })

            this.form.IdKota.items = filtered;
            if (this.isEditMode()) {
                this.form.IdKota.value = this.entity.IdKota.toString();
            }
        }

        private SetKecamatan() {
            let idKota: number = parseInt(this.form.IdKota.value);
            let listData = AbidzarFrm.Rukuntangga.TbKecamatanRow.getLookup().items.filter(x => x.IdKota == idKota);
            var filtered: Serenity.Select2Item[] = [];
            listData.forEach(y => {
                filtered.push({ id: y.Id.toString(), source: y.NamaKecamatan, text: y.NamaKecamatan })
            })

            this.form.IdKecamatan.items = filtered;
            if (this.isEditMode()) {
                this.form.IdKecamatan.value = this.entity.IdKecamatan.toString();
            }
        }

        private SetKelurahan() {
            let idKecamatan: number = parseInt(this.form.IdKecamatan.value);
            let listData = AbidzarFrm.Rukuntangga.TbKelurahanRow.getLookup().items.filter(x => x.IdKecamatan == idKecamatan);
            var filtered: Serenity.Select2Item[] = [];
            listData.forEach(y => {
                filtered.push({ id: y.Id.toString(), source: y.NamaKelurahan, text: y.NamaKelurahan })
            })

            this.form.IdKelurahan.items = filtered;
            if (this.isEditMode()) {
                this.form.IdKelurahan.value = this.entity.IdKelurahan.toString();
            }
        }

        private SetKotaTinggal() {
            let idProvinsi: number = parseInt(this.form.IdProvinsiTinggal.value);
            let listData = AbidzarFrm.Rukuntangga.TbKotaRow.getLookup().items.filter(x => x.IdProvinsi == idProvinsi);
            var filtered: Serenity.Select2Item[] = [];
            listData.forEach(y => {
                filtered.push({ id: y.Id.toString(), source: y.NamaKota, text: y.NamaKota })
            })

            this.form.IdKotaTinggal.items = filtered;
        }

        private SetKecamatanTinggal() {
            let idKota: number = parseInt(this.form.IdKotaTinggal.value);
            let listData = AbidzarFrm.Rukuntangga.TbKecamatanRow.getLookup().items.filter(x => x.IdKota == idKota);
            var filtered: Serenity.Select2Item[] = [];
            listData.forEach(y => {
                filtered.push({ id: y.Id.toString(), source: y.NamaKecamatan, text: y.NamaKecamatan })
            })

            this.form.IdKecamatanTinggal.items = filtered;
        }

        private SetKelurahanTinggal() {
            let idKecamatan: number = parseInt(this.form.IdKecamatanTinggal.value);
            let listData = AbidzarFrm.Rukuntangga.TbKelurahanRow.getLookup().items.filter(x => x.IdKecamatan == idKecamatan);
            var filtered: Serenity.Select2Item[] = [];
            listData.forEach(y => {
                filtered.push({ id: y.Id.toString(), source: y.NamaKelurahan, text: y.NamaKelurahan })
            })

            this.form.IdKelurahanTinggal.items = filtered;
        }


        get isDraft() {
            return this.entity.DataStatus == StatusCode.Draft;
        }
        get isRequest() {
            return this.entity.DataStatus == StatusCode.Requested;
        }
        get isVerified() {
            return this.entity.DataStatus == StatusCode.Verified;
        }
        get isRejected() {
            return this.entity.DataStatus == StatusCode.Requested;
        }
    }
}