/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbBiodataEditor extends Common.GridEditorBase<TbBiodataRow> {
        protected getColumnsKey() { return "Rukuntangga.TbBiodata"; }
        protected getDialogType() { return TbBiodataDialog; }
        protected getLocalTextPrefix() { return TbBiodataRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            return true;
        }
    }
}