/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDetailJenisInformasiEditor extends Common.GridEditorBase<TbDetailJenisInformasiRow> {
        protected getColumnsKey() { return "Rukuntangga.TbDetailJenisInformasi"; }
        protected getDialogType() { return TbDetailJenisInformasiDialog; }
        protected getLocalTextPrefix() { return TbDetailJenisInformasiRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            return true;
        }
    }
}