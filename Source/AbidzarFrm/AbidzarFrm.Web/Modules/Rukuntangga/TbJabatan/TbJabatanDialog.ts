
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbJabatanDialog extends Serenity.EntityDialog<TbJabatanRow, any> {
        protected getFormKey() { return TbJabatanForm.formKey; }
        protected getIdProperty() { return TbJabatanRow.idProperty; }
        protected getLocalTextPrefix() { return TbJabatanRow.localTextPrefix; }
        protected getNameProperty() { return TbJabatanRow.nameProperty; }
        protected getService() { return TbJabatanService.baseUrl; }
        protected getDeletePermission() { return TbJabatanRow.insertPermission; }