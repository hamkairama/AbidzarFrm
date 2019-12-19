namespace AbidzarFrm.Rukuntangga {
    export namespace TbJenisKegiatanService {
        export const baseUrl = 'Rukuntangga/TbJenisKegiatan';

        export declare function Create(request: Serenity.SaveRequest<TbJenisKegiatanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbJenisKegiatanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbJenisKegiatanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbJenisKegiatanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbJenisKegiatan/Create",
            Update = "Rukuntangga/TbJenisKegiatan/Update",
            Delete = "Rukuntangga/TbJenisKegiatan/Delete",
            Retrieve = "Rukuntangga/TbJenisKegiatan/Retrieve",
            List = "Rukuntangga/TbJenisKegiatan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbJenisKegiatanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

