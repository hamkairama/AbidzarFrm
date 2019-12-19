
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbJadwalSiskamlimDialog extends Serenity.EntityDialog<TbJadwalSiskamlimRow, any> {
        protected getFormKey() { return TbJadwalSiskamlimForm.formKey; }
        protected getIdProperty() { return TbJadwalSiskamlimRow.idProperty; }
        protected getLocalTextPrefix() { return TbJadwalSiskamlimRow.localTextPrefix; }
        protected getNameProperty() { return TbJadwalSiskamlimRow.nameProperty; }
        protected getService() { return TbJadwalSiskamlimService.baseUrl; }
        protected getDeletePermission() { return TbJadwalSiskamlimRow.insertPermission; }