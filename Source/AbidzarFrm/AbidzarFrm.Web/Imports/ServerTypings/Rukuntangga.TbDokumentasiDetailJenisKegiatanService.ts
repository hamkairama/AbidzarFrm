namespace AbidzarFrm.Rukuntangga {
    export namespace TbDokumentasiDetailJenisKegiatanService {
        export const baseUrl = 'Rukuntangga/TbDokumentasiDetailJenisKegiatan';

        export declare function Create(request: Serenity.SaveRequest<TbDokumentasiDetailJenisKegiatanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbDokumentasiDetailJenisKegiatanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbDokumentasiDetailJenisKegiatanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbDokumentasiDetailJenisKegiatanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbDokumentasiDetailJenisKegiatan/Create",
            Update = "Rukuntangga/TbDokumentasiDetailJenisKegiatan/Update",
            Delete = "Rukuntangga/TbDokumentasiDetailJenisKegiatan/Delete",
            Retrieve = "Rukuntangga/TbDokumentasiDetailJenisKegiatan/Retrieve",
            List = "Rukuntangga/TbDokumentasiDetailJenisKegiatan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbDokumentasiDetailJenisKegiatanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

