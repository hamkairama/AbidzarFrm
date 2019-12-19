
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbStrukturDialog extends Serenity.EntityDialog<TbStrukturRow, any> {
        protected getFormKey() { return TbStrukturForm.formKey; }
        protected getIdProperty() { return TbStrukturRow.idProperty; }
        protected getLocalTextPrefix() { return TbStrukturRow.localTextPrefix; }
        protected getNameProperty() { return TbStrukturRow.nameProperty; }
        protected getService() { return TbStrukturService.baseUrl; }
        protected getDeletePermission() { return TbStrukturRow.insertPermission; }
    }
}