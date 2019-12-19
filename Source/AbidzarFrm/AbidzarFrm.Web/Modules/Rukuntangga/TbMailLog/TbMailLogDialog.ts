
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbMailLogDialog extends Serenity.EntityDialog<TbMailLogRow, any> {
        protected getFormKey() { return TbMailLogForm.formKey; }
        protected getIdProperty() { return TbMailLogRow.idProperty; }
        protected getLocalTextPrefix() { return TbMailLogRow.localTextPrefix; }
        protected getNameProperty() { return TbMailLogRow.nameProperty; }
        protected getService() { return TbMailLogService.baseUrl; }
        protected getDeletePermission() { return TbMailLogRow.insertPermission; }


        protected form = new TbMailLogForm(this.idPrefix);
        protected mailLogGrids: TbMailLogGrid;
        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();
            this.toolbar.findButton("btn-sent-email").toggle(this.isEditMode());
        }

        getToolbarButtons() {
            let buttons = super.getToolbarButtons();
            buttons.push({
                icon: "fa-edit text-green",
                hint: "Sent Email",
                title: "Send Email",
                cssClass: "btn-sent-email",
                onClick: () => {
                    TbMailLogService.SendEmail(
                        {
                            Entity: this.entity
                        },
                        response => {
                            Q.notifyInfo(response.MessageText);
                            this.dialogClose();
                            //this.mailLogGrids.refresh();
                        },
                        {
                            async: true
                        });
                }
            });

            return buttons;
        }
    }
}