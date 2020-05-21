
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class AppointmentDiaryGrid extends Serenity.EntityGrid<AppointmentDiaryRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.AppointmentDiary'; }
        protected getDialogType() { return AppointmentDiaryDialog; }
        protected getIdProperty() { return AppointmentDiaryRow.idProperty; }
        protected getInsertPermission() { return AppointmentDiaryRow.insertPermission; }

    }
}