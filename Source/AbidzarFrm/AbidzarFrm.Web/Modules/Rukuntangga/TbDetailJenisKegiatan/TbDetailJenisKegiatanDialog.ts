
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDetailJenisKegiatanDialog extends Common.GridEditorDialog<TbDetailJenisKegiatanRow> {
        protected getFormKey() { return TbDetailJenisKegiatanForm.formKey; }
        //protected getIdProperty() { return TbDetailJenisKegiatanRow.idProperty; }
        protected getLocalTextPrefix() { return TbDetailJenisKegiatanRow.localTextPrefix; }
        //protected getNameProperty() { return TbDetailJenisKegiatanRow.nameProperty; }
        //protected getService() { return TbDetailJenisKegiatanService.baseUrl; }
        //protected getDeletePermission() { return TbDetailJenisKegiatanRow.insertPermission; }
    }
}