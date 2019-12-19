
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class TbJenisKegiatanDialog extends Serenity.EntityDialog<TbJenisKegiatanRow, any> {
        protected getFormKey() { return TbJenisKegiatanForm.formKey; }
        protected getIdProperty() { return TbJenisKegiatanRow.idProperty; }
        protected getLocalTextPrefix() { return TbJenisKegiatanRow.localTextPrefix; }
        protected getNameProperty() { return TbJenisKegiatanRow.nameProperty; }
        protected getService() { return TbJenisKegiatanService.baseUrl; }
        protected getDeletePermission() { return TbJenisKegiatanRow.insertPermission; }
    }
}