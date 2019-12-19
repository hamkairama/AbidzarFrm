
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class PickRwDialog extends Serenity.TemplatedDialog<any> {
        public pickRwGrid: PickRwGrid;
        public oldItemId: number;
        public projectType: string;

        constructor() {
            super();
            this.dialogTitle = "RW";
        }
        protected onDialogOpen() {
            this.pickRwGrid = new PickRwGrid(this.byId('TbRwGrid'));
            super.onDialogOpen();
        }

        getTemplate() {
            return (
                "<div id='~_TbRwGrid' style='height:600px; margin-left:10px;margin-right:10px;'></div>"
            );
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();

            opt.buttons = [
                {
                    text: Q.text('Dialogs.OkButton'),
                    click: () => {
                        this.dialogClose();
                    }
                },
                {
                    text: Q.text('Dialogs.CancelButton'),
                    click: () => {
                        this.pickRwGrid.id = this.oldItemId;
                        this.dialogClose();
                    }
                }

            ];

            return opt;
        }


        get OldItemId(): number {
            return this.oldItemId;
        }
        set OldItemId(value: number) {
            this.oldItemId = value;
        }
    }
}