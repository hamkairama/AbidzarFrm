namespace AbidzarFrm.Rukuntangga {
    export interface TbMailLogRow {
        Id?: number;
        Subject?: string;
        Body?: string;
        From?: string;
        To?: string;
        Cc?: string;
        Status?: boolean;
        ErrorMessage?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
    }

    export namespace TbMailLogRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Subject';
        export const localTextPrefix = 'Rukuntangga.TbMailLog';
        export const deletePermission = '*';
        export const insertPermission = '*';
        export const readPermission = '*';
        export const updatePermission = '*';

        export declare const enum Fields {
            Id = "Id",
            Subject = "Subject",
            Body = "Body",
            From = "From",
            To = "To",
            Cc = "Cc",
            Status = "Status",
            ErrorMessage = "ErrorMessage",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal"
        }
    }
}

