namespace AbidzarFrm.Rukuntangga {
    export namespace TbJadwalSiskamlimService {
        export const baseUrl = 'Rukuntangga/TbJadwalSiskamlim';

        export declare function Create(request: Serenity.SaveRequest<TbJadwalSiskamlimRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbJadwalSiskamlimRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbJadwalSiskamlimRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbJadwalSiskamlimRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbJadwalSiskamlim/Create",
            Update = "Rukuntangga/TbJadwalSiskamlim/Update",
            Delete = "Rukuntangga/TbJadwalSiskamlim/Delete",
            Retrieve = "Rukuntangga/TbJadwalSiskamlim/Retrieve",
            List = "Rukuntangga/TbJadwalSiskamlim/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbJadwalSiskamlimService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

