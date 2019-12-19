/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDetailPemiluEditor extends Common.GridEditorBase<TbDetailPemiluRow> {
        protected getColumnsKey() { return "Rukuntangga.TbDetailPemilu"; }
        protected getDialogType() { return TbDetailPemiluDialog; }
        protected getLocalTextPrefix() { return TbDetailPemiluRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            return true;
        }
    }
}