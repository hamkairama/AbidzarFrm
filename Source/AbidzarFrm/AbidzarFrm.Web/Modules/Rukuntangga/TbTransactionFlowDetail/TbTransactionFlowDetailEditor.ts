/// <reference path="../../common/helpers/grideditorbase.ts" />

namespace AbidzarFrm.Rukuntangga {
        @Serenity.Decorators.registerClass()
        export class TbTransactionFlowDetailEditor extends Common.GridEditorBase<TbTransactionFlowDetailRow> {
        protected getColumnsKey() { return "Rukuntangga.TbTransactionFlowDetail"; }
        protected getDialogType() { return TbTransactionFlowDetailDialog; }
        protected getLocalTextPrefix() { return TbTransactionFlowDetailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            return true;
        }
    }
}