
namespace AbidzarFrm.Rukuntangga {

    @Serenity.Decorators.registerClass()
    export class PickRwGrid extends Serenity.EntityGrid<TbRwRow, any> {
        protected getColumnsKey() { return 'Rukuntangga.TbRw'; }
        //protected getDialogType() { return BoqItemPriceHeaderDialog; }
        protected getIdProperty() { return TbRwRow.idProperty; }
        protected getLocalTextPrefix() { return TbRwRow.localTextPrefix; }
        protected getService() { return TbRwService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
            this.toolbar.findButton("add-button").toggle(false);
        }

        protected getColumns() {
            var columns = super.getColumns();
            columns.unshift({
                field: 'Pick Item',
                name: '',
                format: ctx => '<input type="radio" name="pilihitem" class="pick-item">',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });
            return columns;
        }

        public id: number;

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.hasClass('pick-item')) {
                this.id = item.Id;
            }
            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('pick-item')) {
                    this.id = item.Id;
                    this.element.parent().dialog('close');
                }

            }
        }

        //protected getQuickFilters() {
        //    var filters = super.getQuickFilters();
        //    //hide status by hamka hirama bejos hirama
        //    filters.splice(Q.indexOf(filters, x => x.field == "Status"), 1);

        //    return filters;
        //}
    }
}