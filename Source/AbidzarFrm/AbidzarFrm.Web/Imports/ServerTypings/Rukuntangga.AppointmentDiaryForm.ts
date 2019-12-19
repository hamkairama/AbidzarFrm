namespace AbidzarFrm.Rukuntangga {
    export interface AppointmentDiaryForm {
        Title: Serenity.StringEditor;
        SomeImportantKey: Serenity.IntegerEditor;
        DateTimeScheduled: Serenity.DateEditor;
        AppointmentLength: Serenity.IntegerEditor;
        StatusEnum: Serenity.IntegerEditor;
        DibuatOleh: Serenity.StringEditor;
        DibuatTanggal: Serenity.DateEditor;
        DieditOleh: Serenity.StringEditor;
        DieditTanggal: Serenity.DateEditor;
        SystemStatus: Serenity.BooleanEditor;
        KodeRt: Serenity.StringEditor;
    }

    export class AppointmentDiaryForm extends Serenity.PrefixedContext {
        static formKey = 'Rukuntangga.AppointmentDiary';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AppointmentDiaryForm.init)  {
                AppointmentDiaryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(AppointmentDiaryForm, [
                    'Title', w0,
                    'SomeImportantKey', w1,
                    'DateTimeScheduled', w2,
                    'AppointmentLength', w1,
                    'StatusEnum', w1,
                    'DibuatOleh', w0,
                    'DibuatTanggal', w2,
                    'DieditOleh', w0,
                    'DieditTanggal', w2,
                    'SystemStatus', w3,
                    'KodeRt', w0
                ]);
            }
        }
    }
}

