/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbPollingPemiluEditor extends Common.GridEditorBase<TbPollingPemiluRow> {
        protected getColumnsKey() { return "Rukuntangga.TbPollingPemilu"; }
        protected getDialogType() { return TbPollingPemiluDialog; }
        protected getLocalTextPrefix() { return TbPollingPemiluRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            return true;
        }
    }
}