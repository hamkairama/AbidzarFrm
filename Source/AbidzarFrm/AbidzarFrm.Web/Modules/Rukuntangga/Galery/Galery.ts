/// <reference path="../tbgalery/tbgalerydialog.ts" />

namespace AbidzarFrm.Rukuntangga {

    /**
     * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
     */
    @Serenity.Decorators.panel()
    export class Galery extends Rukuntangga.TbGaleryDialog {

        protected form = new TbGaleryForm(this.idPrefix);
        constructor() {
            super();
        }

        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();
            this.saveAndCloseButton.hide();           
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.element.find(jQuery(".Deskripsi")).hide();
            this.element.find(jQuery(".LevelArea")).hide();
            this.element.find(jQuery(".Thumbnail")).hide(); 
            this.element.find(jQuery(".delete")).hide();
            this.element.find(jQuery(".s-Toolbar")).hide();
            this.element.find(jQuery(".caption")).hide();
        }

        protected onSaveSuccess(response) {
            this.showSaveSuccessMessage(response);
        }
    }
}