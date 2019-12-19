namespace AbidzarFrm.Rukuntangga {
    export namespace TbMailLogService {
        export const baseUrl = 'Rukuntangga/TbMailLog';

        export declare function Create(request: Serenity.SaveRequest<TbMailLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbMailLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbMailLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbMailLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendEmail(request: Serenity.SaveRequest<TbMailLogRow>, onSuccess?: (response: Modules.Common.Helpers.ResultStatusResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbMailLog/Create",
            Update = "Rukuntangga/TbMailLog/Update",
            Delete = "Rukuntangga/TbMailLog/Delete",
            Retrieve = "Rukuntangga/TbMailLog/Retrieve",
            List = "Rukuntangga/TbMailLog/List",
            SendEmail = "Rukuntangga/TbMailLog/SendEmail"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'SendEmail'
        ].forEach(x => {
            (<any>TbMailLogService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

