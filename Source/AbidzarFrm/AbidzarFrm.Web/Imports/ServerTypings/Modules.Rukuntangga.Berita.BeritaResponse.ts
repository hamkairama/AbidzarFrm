namespace AbidzarFrm.Modules.Rukuntangga.Berita {
    export interface BeritaResponse extends Serenity.ServiceResponse {
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

