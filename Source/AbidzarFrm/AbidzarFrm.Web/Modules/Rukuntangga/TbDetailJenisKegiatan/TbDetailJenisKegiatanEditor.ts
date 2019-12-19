/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class TbDetailJenisKegiatanEditor extends Common.GridEditorBase<TbDetailJenisKegiatanRow> {
        protected getColumnsKey() { return "Rukuntangga.TbDetailJenisKegiatan"; }
        protected getDialogType() { return TbDetailJenisKegiatanDialog; }
        protected getLocalTextPrefix() { return TbDetailJenisKegiatanRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            return true;
        }
    }
}