namespace AbidzarFrm.Rukuntangga {
    export namespace TbTanyaRtDetailService {
        export const baseUrl = 'Rukuntangga/TbTanyaRtDetail';

        export declare function Create(request: Serenity.SaveRequest<TbTanyaRtDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbTanyaRtDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbTanyaRtDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbTanyaRtDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbTanyaRtDetail/Create",
            Update = "Rukuntangga/TbTanyaRtDetail/Update",
            Delete = "Rukuntangga/TbTanyaRtDetail/Delete",
            Retrieve = "Rukuntangga/TbTanyaRtDetail/Retrieve",
            List = "Rukuntangga/TbTanyaRtDetail/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbTanyaRtDetailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

