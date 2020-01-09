namespace AbidzarFrm.Rukuntangga {
    export interface TbTransactionStatusRow {
        Id?: number;
        DocumentCode?: string;
        Code?: string;
        Internal?: string;
        External?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
    }

    export namespace TbTransactionStatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DocumentCode';
        export const localTextPrefix = 'Rukuntangga.TbTransactionStatus';
        export const lookupKey = 'Rukuntangga.TransactionStatus';

        export function getLookup(): Q.Lookup<TbTransactionStatusRow> {
            return Q.getLookup<TbTransactionStatusRow>('Rukuntangga.TransactionStatus');
        }
        export const deletePermission = 'Security:TransactionStatus';
        export const insertPermission = 'Security:TransactionStatus';
        export const readPermission = 'Security:TransactionStatus';
        export const updatePermission = 'Security:TransactionStatus';

        export declare const enum Fields {
            Id = "Id",
            DocumentCode = "DocumentCode",
            Code = "Code",
            Internal = "Internal",
            External = "External",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal"
        }
    }
}

