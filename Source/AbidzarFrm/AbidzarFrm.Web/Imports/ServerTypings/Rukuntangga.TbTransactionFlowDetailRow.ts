namespace AbidzarFrm.Rukuntangga {
    export interface TbTransactionFlowDetailRow {
        Id?: number;
        TransactionFlowId?: number;
        TransactionStatusCode?: string;
        Name?: string;
        StartStatus?: number;
        FinalStatus?: number;
        AccessButton?: string;
        PopupMessage?: string;
        NextStatus?: string;
        IsSendEmail?: number;
        SendEmailType?: string;
        SendEmailTo?: string;
        TemplateEmailType?: string;
        CcRequestor?: number;
        CcCreator?: number;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
    }

    export namespace TbTransactionFlowDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TransactionStatusCode';
        export const localTextPrefix = 'Rukuntangga.TbTransactionFlowDetail';
        export const deletePermission = 'Security:Flow';
        export const insertPermission = 'Security:Flow';
        export const readPermission = 'Security:Flow';
        export const updatePermission = 'Security:Flow';

        export declare const enum Fields {
            Id = "Id",
            TransactionFlowId = "TransactionFlowId",
            TransactionStatusCode = "TransactionStatusCode",
            Name = "Name",
            StartStatus = "StartStatus",
            FinalStatus = "FinalStatus",
            AccessButton = "AccessButton",
            PopupMessage = "PopupMessage",
            NextStatus = "NextStatus",
            IsSendEmail = "IsSendEmail",
            SendEmailType = "SendEmailType",
            SendEmailTo = "SendEmailTo",
            TemplateEmailType = "TemplateEmailType",
            CcRequestor = "CcRequestor",
            CcCreator = "CcCreator",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal"
        }
    }
}

