namespace AbidzarFrm.Rukuntangga {
    export namespace TbPollingPemiluService {
        export const baseUrl = 'Rukuntangga/TbPollingPemilu';

        export declare function Create(request: Serenity.SaveRequest<TbPollingPemiluRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbPollingPemiluRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbPollingPemiluRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbPollingPemiluRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbPollingPemilu/Create",
            Update = "Rukuntangga/TbPollingPemilu/Update",
            Delete = "Rukuntangga/TbPollingPemilu/Delete",
            Retrieve = "Rukuntangga/TbPollingPemilu/Retrieve",
            List = "Rukuntangga/TbPollingPemilu/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbPollingPemiluService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

