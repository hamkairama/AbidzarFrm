
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbKecamatanDialog extends Serenity.EntityDialog<TbKecamatanRow, any> {
        protected getFormKey() { return TbKecamatanForm.formKey; }
        protected getIdProperty() { return TbKecamatanRow.idProperty; }
        protected getLocalTextPrefix() { return TbKecamatanRow.localTextPrefix; }
        protected getNameProperty() { return TbKecamatanRow.nameProperty; }
        protected getService() { return TbKecamatanService.baseUrl; }
        protected getDeletePermission() { return TbKecamatanRow.insertPermission; }