namespace AbidzarFrm.Rukuntangga {
    export namespace TbAutentikasiTokenService {
        export const baseUrl = 'Rukuntangga/TbAutentikasiToken';

        export declare function Create(request: Serenity.SaveRequest<TbAutentikasiTokenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbAutentikasiTokenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbAutentikasiTokenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbAutentikasiTokenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbAutentikasiToken/Create",
            Update = "Rukuntangga/TbAutentikasiToken/Update",
            Delete = "Rukuntangga/TbAutentikasiToken/Delete",
            Retrieve = "Rukuntangga/TbAutentikasiToken/Retrieve",
            List = "Rukuntangga/TbAutentikasiToken/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbAutentikasiTokenService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

