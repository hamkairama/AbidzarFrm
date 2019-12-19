namespace AbidzarFrm.Rukuntangga {
    export namespace TbHistoricalUserLoginService {
        export const baseUrl = 'Rukuntangga/TbHistoricalUserLogin';

        export declare function Create(request: Serenity.SaveRequest<TbHistoricalUserLoginRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbHistoricalUserLoginRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbHistoricalUserLoginRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbHistoricalUserLoginRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbHistoricalUserLogin/Create",
            Update = "Rukuntangga/TbHistoricalUserLogin/Update",
            Delete = "Rukuntangga/TbHistoricalUserLogin/Delete",
            Retrieve = "Rukuntangga/TbHistoricalUserLogin/Retrieve",
            List = "Rukuntangga/TbHistoricalUserLogin/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbHistoricalUserLoginService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

