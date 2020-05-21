namespace AbidzarFrm.Modules.Common.Abstraction {
    export interface AccessButtonObj {
        Index?: string;
        TransactionStatusCode?: string;
        FinalStatus?: string;
        AccessButton?: string;
        PopupMessage?: string;
        SendEmailTo?: string;
        CcCreator?: boolean;
        CcRequestor?: boolean;
    }
}

