
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDetailPemiluDialog extends Common.GridEditorDialog<TbDetailPemiluRow> {
        protected getFormKey() { return TbDetailPemiluForm.formKey; }
        //protected getIdProperty() { return TbDetailPemiluRow.idProperty; }
        protected getLocalTextPrefix() { return TbDetailPemiluRow.localTextPrefix; }
        //protected getNameProperty() { return TbDetailPemiluRow.nameProperty; }
        //protected getService() { return TbDetailPemiluService.baseUrl; }
        //protected getDeletePermission() { return TbDetailPemiluRow.insertPermission; }
    }
}