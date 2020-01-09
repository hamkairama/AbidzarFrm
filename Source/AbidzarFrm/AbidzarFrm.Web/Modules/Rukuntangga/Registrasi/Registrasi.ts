/// <reference path="../tbktp/tbktpdialog.ts" />

namespace AbidzarFrm.Rukuntangga {

    /**
     * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
     */
    @Serenity.Decorators.panel()
    export class Registrasi extends Rukuntangga.TbKtpDialog {

        constructor() {
            super();
        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
        }

        protected onSaveSuccess(response) {
            this.showSaveSuccessMessage(response);
        }
    }
}