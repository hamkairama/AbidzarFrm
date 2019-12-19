
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbPollingPemiluDialog extends Common.GridEditorDialog<TbPollingPemiluRow> {
        protected getFormKey() { return TbPollingPemiluForm.formKey; }
        //protected getIdProperty() { return TbPollingPemiluRow.idProperty; }
        protected getLocalTextPrefix() { return TbPollingPemiluRow.localTextPrefix; }
        //protected getNameProperty() { return TbPollingPemiluRow.nameProperty; }
        //protected getService() { return TbPollingPemiluService.baseUrl; }
        //protected getDeletePermission() { return TbPollingPemiluRow.insertPermission; }
    }
}