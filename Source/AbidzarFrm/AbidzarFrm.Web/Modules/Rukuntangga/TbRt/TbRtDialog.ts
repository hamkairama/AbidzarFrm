
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TbRtDialog extends Serenity.EntityDialog<TbRtRow, any> {
        protected getFormKey() { return TbRtForm.formKey; }
        protected getIdProperty() { return TbRtRow.idProperty; }
        protected getLocalTextPrefix() { return TbRtRow.localTextPrefix; }
        protected getNameProperty() { return TbRtRow.nameProperty; }
        protected getService() { return TbRtService.baseUrl; }
        protected getDeletePermission() { return TbRtRow.insertPermission; }

        protected form = new TbRtForm(this.idPrefix);

        constructor() {
            super();           
            $('<a class="inplace-button btn-pick-item"> <i class="fa fa-search-plus"></i></a>')
                .insertAfter(this.form.IdRwKodeRw.element)
                .click(() => this.PickRw());
        }

        private GetRwById(idRw: number) {
            let data = TbRwRow.getLookup().itemById[idRw];
            this.form.IdRwKodeRw.value = data == null ? "" : data.KodeRw;
        }

        private PickRw() {
            var dlg = new PickRwDialog();
            dlg.OldItemId = this.form.IdRw.value;
            dlg.dialogOpen();
            dlg.element.on('dialogclose', () => {
                this.form.IdRw.value = dlg.pickRwGrid.id;
                this.GetRwById(this.form.IdRw.value);
            });
        }

        updateInterface() {
            super.updateInterface();
            this.element.find(".IdRw").toggle(false);
        }

    }
}