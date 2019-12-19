
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbSlideShowDialog extends Serenity.EntityDialog<TbSlideShowRow, any> {
        protected getFormKey() { return TbSlideShowForm.formKey; }
        protected getIdProperty() { return TbSlideShowRow.idProperty; }
        protected getLocalTextPrefix() { return TbSlideShowRow.localTextPrefix; }
        protected getNameProperty() { return TbSlideShowRow.nameProperty; }
        protected getService() { return TbSlideShowService.baseUrl; }
        protected getDeletePermission() { return TbSlideShowRow.insertPermission; }
    }
}