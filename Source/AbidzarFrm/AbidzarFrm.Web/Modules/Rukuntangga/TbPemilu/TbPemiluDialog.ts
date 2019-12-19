
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TbPemiluDialog extends Serenity.EntityDialog<TbPemiluRow, any> {
        protected getFormKey() { return TbPemiluForm.formKey; }
        protected getIdProperty() { return TbPemiluRow.idProperty; }
        protected getLocalTextPrefix() { return TbPemiluRow.localTextPrefix; }
        protected getNameProperty() { return TbPemiluRow.nameProperty; }
        protected getService() { return TbPemiluService.baseUrl; }
        protected getDeletePermission() { return TbPemiluRow.insertPermission; }
    }
}