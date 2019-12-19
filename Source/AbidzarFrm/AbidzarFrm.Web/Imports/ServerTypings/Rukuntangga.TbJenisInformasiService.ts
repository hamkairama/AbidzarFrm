namespace AbidzarFrm.Rukuntangga {
    export namespace TbJenisInformasiService {
        export const baseUrl = 'Rukuntangga/TbJenisInformasi';

        export declare function Create(request: Serenity.SaveRequest<TbJenisInformasiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbJenisInformasiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbJenisInformasiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbJenisInformasiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbJenisInformasi/Create",
            Update = "Rukuntangga/TbJenisInformasi/Update",
            Delete = "Rukuntangga/TbJenisInformasi/Delete",
            Retrieve = "Rukuntangga/TbJenisInformasi/Retrieve",
            List = "Rukuntangga/TbJenisInformasi/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbJenisInformasiService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

