namespace AbidzarFrm.Rukuntangga {
    export namespace TbLaporanKasService {
        export const baseUrl = 'Rukuntangga/TbLaporanKas';

        export declare function Create(request: Serenity.SaveRequest<TbLaporanKasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbLaporanKasRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbLaporanKasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbLaporanKasRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbLaporanKas/Create",
            Update = "Rukuntangga/TbLaporanKas/Update",
            Delete = "Rukuntangga/TbLaporanKas/Delete",
            Retrieve = "Rukuntangga/TbLaporanKas/Retrieve",
            List = "Rukuntangga/TbLaporanKas/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbLaporanKasService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

