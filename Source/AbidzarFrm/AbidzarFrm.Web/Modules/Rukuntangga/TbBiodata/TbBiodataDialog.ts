
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbBiodataDialog extends Common.GridEditorDialog<TbBiodataRow> {
        protected getFormKey() { return TbBiodataForm.formKey; }
        //protected getIdProperty() { return TbBiodataRow.idProperty; }
        protected getLocalTextPrefix() { return TbBiodataRow.localTextPrefix; }
        //protected getNameProperty() { return TbBiodataRow.nameProperty; }
        //protected getService() { return TbBiodataService.baseUrl; }
        //protected getDeletePermission() { return TbBiodataRow.insertPermission; }
    }
}