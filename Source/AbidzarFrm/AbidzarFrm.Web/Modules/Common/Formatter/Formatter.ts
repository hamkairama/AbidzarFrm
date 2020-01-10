namespace AbidzarFrm.Common.Formatter {
    @Serenity.Decorators.registerFormatter()
    export class TypePosisiIklanFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var result = ctx.value;
            switch (ctx.value) {
                case "0":
                    result = "Dashboard"
                    break;
                case "1":
                    result = "Informasi"
                    break;
            }
            return result
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class TypeSlideshowFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var result = ctx.value;
            switch (ctx.value) {
                case "0":
                    result = "Slide"
                    break;
                case "1":
                    result = "Horizonscroll"
                    break;
            }
            return result
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class DataStatusFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var result = ctx.value;
            var classStatus = ''
            switch (ctx.value) {
                case 0:
                    result = "Draft"
                    classStatus = 'label label-warning'
                    break;
                case 1:
                    result = "Request"
                    classStatus = 'label label-default'
                    break;
                case 2:
                    result = "Verified"
                    classStatus = 'label label-success'
                    break;
                case 3:
                    result = "Rejected"
                    classStatus = 'label label-danger'
                    break;
            }
            return '<span class="' + classStatus + '">' + Q.htmlEncode(result) + '</span>'
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class ProvinsiFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            var byId = AbidzarFrm.Rukuntangga.TbProvinsiRow.getLookup().itemById;
            if (byId[ctx.value] != null) {
                return byId[ctx.value].NamaProvinsi;
            } else {
                return ctx.value;
            }
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class KotaFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            var byId = AbidzarFrm.Rukuntangga.TbKotaRow.getLookup().itemById;
            if (byId[ctx.value] != null) {
                return byId[ctx.value].NamaKota;
            } else {
                return ctx.value;
            }
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class KecamatanFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            var byId = AbidzarFrm.Rukuntangga.TbKecamatanRow.getLookup().itemById;
            if (byId[ctx.value] != null) {
                return byId[ctx.value].NamaKecamatan;
            } else {
                return ctx.value;
            }
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class KelurahanFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            var byId = AbidzarFrm.Rukuntangga.TbKelurahanRow.getLookup().itemById;
            if (byId[ctx.value] != null) {
                return byId[ctx.value].NamaKelurahan;
            } else {
                return ctx.value;
            }
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class JabatanFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            var byId = AbidzarFrm.Rukuntangga.TbJabatanRow.getLookup().itemById;
            if (byId[ctx.value] != null) {
                return byId[ctx.value].NamaJabatan;
            } else {
                return ctx.value;
            }
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class NamaKtpFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {

            var data = AbidzarFrm.Rukuntangga.TbKtpRow.getLookup().items.filter(x => x.Nik == ctx.value);
            if (data.length > 0) {
                return data[0].Nama;
            } else {
                return ctx.value;
            }
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class YesNoFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var classCheck = ''
            switch (ctx.value) {
                case 0:
                    classCheck = 'check-box';
                    break;
                case 1:
                    classCheck = 'check-box checked';
                    break;
            }

            return '<span class="' + classCheck + '"></span>'
        }
    }

}