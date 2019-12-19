namespace AbidzarFrm.Rukuntangga {
    export namespace TbListOfValueService {
        export const baseUrl = 'Rukuntangga/TbListOfValue';

        export declare function Create(request: Serenity.SaveRequest<TbListOfValueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbListOfValueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbListOfValueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbListOfValueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbListOfValue/Create",
            Update = "Rukuntangga/TbListOfValue/Update",
            Delete = "Rukuntangga/TbListOfValue/Delete",
            Retrieve = "Rukuntangga/TbListOfValue/Retrieve",
            List = "Rukuntangga/TbListOfValue/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbListOfValueService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

