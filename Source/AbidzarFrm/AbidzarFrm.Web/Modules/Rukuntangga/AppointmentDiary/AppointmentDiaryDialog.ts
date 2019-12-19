
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class AppointmentDiaryDialog extends Serenity.EntityDialog<AppointmentDiaryRow, any> {
        protected getFormKey() { return AppointmentDiaryForm.formKey; }
        protected getIdProperty() { return AppointmentDiaryRow.idProperty; }
        protected getLocalTextPrefix() { return AppointmentDiaryRow.localTextPrefix; }
        protected getNameProperty() { return AppointmentDiaryRow.nameProperty; }
        protected getService() { return AppointmentDiaryService.baseUrl; }
        protected getDeletePermission() { return AppointmentDiaryRow.insertPermission; }