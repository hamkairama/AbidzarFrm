namespace AbidzarFrm.Modules.Common.Abstraction {
    export interface NextStatusRequest extends Serenity.ServiceRequest {
        AppLine?: string;
        Entity?: any;
        TransactionId?: number;
        TransactionCode?: string;
        DocumentCode?: string;
        Action?: number;
        NextStatusCode?: string;
        InsertUserId?: number;
        Requestor?: number;
        IsSendEmail?: boolean;
        SendEmailTo?: string;
        SendEmailCc?: string;
        CcCreator?: boolean;
        CcRequestor?: boolean;
        RejectedReason?: string;
        TemplateEmailType?: string;
    }
}

