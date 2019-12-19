namespace AbidzarFrm.Rukuntangga {
    export namespace TbDetailJenisInformasiService {
        export const baseUrl = 'Rukuntangga/TbDetailJenisInformasi';

        export declare function Create(request: Serenity.SaveRequest<TbDetailJenisInformasiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbDetailJenisInformasiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbDetailJenisInformasiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbDetailJenisInformasiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbDetailJenisInformasi/Create",
            Update = "Rukuntangga/TbDetailJenisInformasi/Update",
            Delete = "Rukuntangga/TbDetailJenisInformasi/Delete",
            Retrieve = "Rukuntangga/TbDetailJenisInformasi/Retrieve",
            List = "Rukuntangga/TbDetailJenisInformasi/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbDetailJenisInformasiService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

