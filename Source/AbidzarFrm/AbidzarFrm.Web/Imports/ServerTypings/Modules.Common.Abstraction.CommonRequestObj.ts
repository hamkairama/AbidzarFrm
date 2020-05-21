namespace AbidzarFrm.Modules.Common.Abstraction {
    export interface CommonRequestObj extends Serenity.ServiceRequest {
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

