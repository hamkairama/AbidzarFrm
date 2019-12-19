namespace AbidzarFrm.Rukuntangga {
    export namespace TbTanyaRtService {
        export const baseUrl = 'Rukuntangga/TbTanyaRt';

        export declare function Create(request: Serenity.SaveRequest<TbTanyaRtRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbTanyaRtRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbTanyaRtRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbTanyaRtRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbTanyaRt/Create",
            Update = "Rukuntangga/TbTanyaRt/Update",
            Delete = "Rukuntangga/TbTanyaRt/Delete",
            Retrieve = "Rukuntangga/TbTanyaRt/Retrieve",
            List = "Rukuntangga/TbTanyaRt/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbTanyaRtService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

