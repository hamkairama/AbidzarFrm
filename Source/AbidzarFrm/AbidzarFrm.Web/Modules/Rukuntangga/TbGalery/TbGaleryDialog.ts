
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbGaleryDialog extends Serenity.EntityDialog<TbGaleryRow, any> {
        protected getFormKey() { return TbGaleryForm.formKey; }
        protected getIdProperty() { return TbGaleryRow.idProperty; }
        protected getLocalTextPrefix() { return TbGaleryRow.localTextPrefix; }
        protected getNameProperty() { return TbGaleryRow.nameProperty; }
        protected getService() { return TbGaleryService.baseUrl; }
        protected getDeletePermission() { return TbGaleryRow.insertPermission; }