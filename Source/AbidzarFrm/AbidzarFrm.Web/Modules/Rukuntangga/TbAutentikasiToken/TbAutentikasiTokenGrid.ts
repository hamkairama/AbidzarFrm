
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbAutentikasiTokenGrid extends Serenity.EntityGrid<TbAutentikasiTokenRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbAutentikasiToken'; }
        protected getDialogType() { return TbAutentikasiTokenDialog; }
        protected getIdProperty() { return TbAutentikasiTokenRow.idProperty; }
        protected getInsertPermission() { return TbAutentikasiTokenRow.insertPermission; }