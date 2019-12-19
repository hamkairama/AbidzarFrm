
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbJadwalSiskamlimGrid extends Serenity.EntityGrid<TbJadwalSiskamlimRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbJadwalSiskamlim'; }
        protected getDialogType() { return TbJadwalSiskamlimDialog; }
        protected getIdProperty() { return TbJadwalSiskamlimRow.idProperty; }
        protected getInsertPermission() { return TbJadwalSiskamlimRow.insertPermission; }