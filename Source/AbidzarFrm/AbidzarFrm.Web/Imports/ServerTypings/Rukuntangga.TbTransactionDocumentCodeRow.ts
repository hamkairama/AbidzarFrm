namespace AbidzarFrm.Rukuntangga {
    export interface TbTransactionDocumentCodeRow {
        Id?: number;
        DocumentCode?: string;
        Description?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
    }

    export namespace TbTransactionDocumentCodeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DocumentCode';
        export const localTextPrefix = 'Rukuntangga.TbTransactionDocumentCode';
        export const lookupKey = 'Rukuntangga.TransactionDocumentCode';

        export function getLookup(): Q.Lookup<TbTransactionDocumentCodeRow> {
            return Q.getLookup<TbTransactionDocumentCodeRow>('Rukuntangga.TransactionDocumentCode');
        }
        export const deletePermission = 'Security:DocumentCode';
        export const insertPermission = 'Security:DocumentCode';
        export const readPermission = 'Security:DocumentCode';
        export const updatePermission = 'Security:DocumentCode';

        export declare const enum Fields {
            Id = "Id",
            DocumentCode = "DocumentCode",
            Description = "Description",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal"
        }
    }
}

