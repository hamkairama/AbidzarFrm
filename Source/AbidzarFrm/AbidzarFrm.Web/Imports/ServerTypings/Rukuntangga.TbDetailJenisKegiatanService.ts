namespace AbidzarFrm.Rukuntangga {
    export namespace TbDetailJenisKegiatanService {
        export const baseUrl = 'Rukuntangga/TbDetailJenisKegiatan';

        export declare function Create(request: Serenity.SaveRequest<TbDetailJenisKegiatanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbDetailJenisKegiatanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbDetailJenisKegiatanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbDetailJenisKegiatanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbDetailJenisKegiatan/Create",
            Update = "Rukuntangga/TbDetailJenisKegiatan/Update",
            Delete = "Rukuntangga/TbDetailJenisKegiatan/Delete",
            Retrieve = "Rukuntangga/TbDetailJenisKegiatan/Retrieve",
            List = "Rukuntangga/TbDetailJenisKegiatan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbDetailJenisKegiatanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

