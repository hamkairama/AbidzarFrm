namespace AbidzarFrm.Modules.Common.Abstraction {
    export interface NextStatusResponse extends Serenity.ServiceResponse {
        Index?: string;
        TransactionStatusCode?: string;
        FinalStatus?: string;
        AccessButton?: string;
        PopupMessage?: string;
        SendEmailTo?: string;
        CcCreator?: boolean;
        CcRequestor?: boolean;
        IsSendEmail?: boolean;
        TemplateEmailType?: string;
    }
}

