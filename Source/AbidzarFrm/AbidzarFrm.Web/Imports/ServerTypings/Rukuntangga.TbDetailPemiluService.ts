namespace AbidzarFrm.Rukuntangga {
    export namespace TbDetailPemiluService {
        export const baseUrl = 'Rukuntangga/TbDetailPemilu';

        export declare function Create(request: Serenity.SaveRequest<TbDetailPemiluRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbDetailPemiluRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbDetailPemiluRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbDetailPemiluRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbDetailPemilu/Create",
            Update = "Rukuntangga/TbDetailPemilu/Update",
            Delete = "Rukuntangga/TbDetailPemilu/Delete",
            Retrieve = "Rukuntangga/TbDetailPemilu/Retrieve",
            List = "Rukuntangga/TbDetailPemilu/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbDetailPemiluService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

