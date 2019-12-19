namespace AbidzarFrm.Modules.Common.Helpers {
    export interface ResultStatusResponse extends Serenity.ServiceResponse {
        Status?: number;
        MessageText?: string;
        IsSuccess?: boolean;
    }
}

