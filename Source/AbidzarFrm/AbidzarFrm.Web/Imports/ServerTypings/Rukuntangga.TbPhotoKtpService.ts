namespace AbidzarFrm.Rukuntangga {
    export namespace TbPhotoKtpService {
        export const baseUrl = 'Rukuntangga/TbPhotoKtp';

        export declare function Create(request: Serenity.SaveRequest<TbPhotoKtpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbPhotoKtpRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbPhotoKtpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbPhotoKtpRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbPhotoKtp/Create",
            Update = "Rukuntangga/TbPhotoKtp/Update",
            Delete = "Rukuntangga/TbPhotoKtp/Delete",
            Retrieve = "Rukuntangga/TbPhotoKtp/Retrieve",
            List = "Rukuntangga/TbPhotoKtp/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbPhotoKtpService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

