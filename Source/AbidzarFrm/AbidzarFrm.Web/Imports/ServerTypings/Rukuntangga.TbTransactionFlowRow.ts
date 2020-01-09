namespace AbidzarFrm.Rukuntangga {
    export interface TbTransactionFlowRow {
        Id?: number;
        DocumentCode?: string;
        Code?: string;
        IsActive?: boolean;
        Description?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        tbTransactionFlowDetailRow?: TbTransactionFlowDetailRow[];
    }

    export namespace TbTransactionFlowRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DocumentCode';
        export const localTextPrefix = 'Rukuntangga.TbTransactionFlow';
        export const deletePermission = 'Security:Flow';
        export const insertPermission = 'Security:Flow';
        export const readPermission = 'Security:Flow';
        export const updatePermission = 'Security:Flow';

        export declare const enum Fields {
            Id = "Id",
            DocumentCode = "DocumentCode",
            Code = "Code",
            IsActive = "IsActive",
            Description = "Description",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            tbTransactionFlowDetailRow = "tbTransactionFlowDetailRow"
        }
    }
}

