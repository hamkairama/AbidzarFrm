
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDetailJenisInformasiDialog extends Common.GridEditorDialog<TbDetailJenisInformasiRow> {
        protected getFormKey() { return TbDetailJenisInformasiForm.formKey; }
        //protected getIdProperty() { return TbDetailJenisInformasiRow.idProperty; }
        protected getLocalTextPrefix() { return TbDetailJenisInformasiRow.localTextPrefix; }
        //protected getNameProperty() { return TbDetailJenisInformasiRow.nameProperty; }
        //protected getService() { return TbDetailJenisInformasiService.baseUrl; }
        //protected getDeletePermission() { return TbDetailJenisInformasiRow.insertPermission; }
    }
}