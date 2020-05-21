namespace AbidzarFrm.Rukuntangga {
    export namespace TbKtpService {
        export const baseUrl = 'Rukuntangga/TbKtp';

        export declare function Create(request: Serenity.SaveRequest<TbKtpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbKtpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbKtpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbKtpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetTransactionAccessButton(request: Modules.Common.Abstraction.AccessButtonRequest, onSuccess?: (response: Modules.Common.Abstraction.AccessButtonResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextStatus(request: Modules.Common.Abstraction.NextStatusRequest, onSuccess?: (response: Modules.Common.Abstraction.NextStatusResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function UpdateNextStatus(request: Modules.Common.Abstraction.NextStatusRequest, onSuccess?: (response: Modules.Common.Helpers.ResultStatusResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendEmail(request: Modules.Common.Abstraction.NextStatusRequest, onSuccess?: (response: Modules.Common.Helpers.ResultStatusResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbKtp/Create",
            Update = "Rukuntangga/TbKtp/Update",
            Delete = "Rukuntangga/TbKtp/Delete",
            Retrieve = "Rukuntangga/TbKtp/Retrieve",
            List = "Rukuntangga/TbKtp/List",
            GetTransactionAccessButton = "Rukuntangga/TbKtp/GetTransactionAccessButton",
            GetNextStatus = "Rukuntangga/TbKtp/GetNextStatus",
            UpdateNextStatus = "Rukuntangga/TbKtp/UpdateNextStatus",
            SendEmail = "Rukuntangga/TbKtp/SendEmail"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetTransactionAccessButton', 
            'GetNextStatus', 
            'UpdateNextStatus', 
            'SendEmail'
        ].forEach(x => {
            (<any>TbKtpService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

