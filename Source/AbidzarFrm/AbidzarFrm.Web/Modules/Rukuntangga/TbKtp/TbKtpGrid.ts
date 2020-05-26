/// <reference path="../../basicsamples/grids/enablingrowselection/selectableentitygrid.ts" />

namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class TbKtpGrid extends SelectableEntityGrid<TbKtpRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbKtp'; }
        protected getDialogType() { return TbKtpDialog; }
        protected getIdProperty() { return TbKtpRow.idProperty; }
        protected getInsertPermission() { return TbKtpRow.insertPermission; }

        private treeMixin: Serenity.TreeGridMixin<TbKtpRow>;

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            let buttons = super.getButtons();
            buttons.push(AbidzarFrm.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Rukuntangga/TbKtp/ListExcel',
                separator: true
            }));          

            return buttons;
        }
               
        private hasRole(role: string): boolean {
            return Authorization.userDefinition.UserRoles.indexOf(role) > -1;
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }
            var request = this.view.params;
            if (this.hasRole("RT")) {
                var ud = Authorization.userDefinition;
                request.Criteria = Serenity.Criteria.and(request.Criteria, [["KodeRt"], "=", ud.Ktp.KodeRt]);
            } else if (this.hasRole("RW")) {
                var listRt = Q.getLookup<TbRtRow>("Rukuntangga.TbRt").items.filter(f => f.IdRw == 4);
                var listRtx = [];

                listRt.forEach(item => {
                    listRtx.push(item.KodeRt);
                });

                if (listRtx.length < 1)
                    listRtx.push(0);

                request.Criteria = Serenity.Criteria.and(request.Criteria, [['KodeRt'], 'in', [listRtx]]);

            }

            return true;
        }


    }
}