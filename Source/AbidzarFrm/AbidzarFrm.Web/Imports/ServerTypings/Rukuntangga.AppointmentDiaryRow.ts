namespace AbidzarFrm.Rukuntangga {
    export interface AppointmentDiaryRow {
        Id?: number;
        Title?: string;
        SomeImportantKey?: number;
        DateTimeScheduled?: string;
        AppointmentLength?: number;
        StatusEnum?: number;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        KodeRt?: string;
    }

    export namespace AppointmentDiaryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Rukuntangga.AppointmentDiary';
        export const deletePermission = 'Master:Appointment:Delete';
        export const insertPermission = 'Master:Appointment:Insert';
        export const readPermission = 'Master:Appointment:View';
        export const updatePermission = 'Master:Appointment:Modify';

        export declare const enum Fields {
            Id = "Id",
            Title = "Title",
            SomeImportantKey = "SomeImportantKey",
            DateTimeScheduled = "DateTimeScheduled",
            AppointmentLength = "AppointmentLength",
            StatusEnum = "StatusEnum",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            KodeRt = "KodeRt"
        }
    }
}

