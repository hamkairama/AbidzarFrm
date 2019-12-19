namespace AbidzarFrm.Rukuntangga {
    export namespace TbTestimoniService {
        export const baseUrl = 'Rukuntangga/TbTestimoni';

        export declare function Create(request: Serenity.SaveRequest<TbTestimoniRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbTestimoniRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbTestimoniRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbTestimoniRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbTestimoni/Create",
            Update = "Rukuntangga/TbTestimoni/Update",
            Delete = "Rukuntangga/TbTestimoni/Delete",
            Retrieve = "Rukuntangga/TbTestimoni/Retrieve",
            List = "Rukuntangga/TbTestimoni/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbTestimoniService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

