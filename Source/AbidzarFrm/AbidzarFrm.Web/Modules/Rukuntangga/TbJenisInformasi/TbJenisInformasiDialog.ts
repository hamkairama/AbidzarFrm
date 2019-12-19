
namespace AbidzarFrm.Rukuntangga {
    @Serenity.Decorators.panel()
    @Serenity.Decorators.registerClass()
    export class TbJenisInformasiDialog extends Serenity.EntityDialog<TbJenisInformasiRow, any> {
        protected getFormKey() { return TbJenisInformasiForm.formKey; }
        protected getIdProperty() { return TbJenisInformasiRow.idProperty; }
        protected getLocalTextPrefix() { return TbJenisInformasiRow.localTextPrefix; }
        protected getNameProperty() { return TbJenisInformasiRow.nameProperty; }
        protected getService() { return TbJenisInformasiService.baseUrl; }
        protected getDeletePermission() { return TbJenisInformasiRow.insertPermission; }
    }
}