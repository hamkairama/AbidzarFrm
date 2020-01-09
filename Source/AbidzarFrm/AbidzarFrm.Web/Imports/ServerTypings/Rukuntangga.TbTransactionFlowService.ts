namespace AbidzarFrm.Rukuntangga {
    export namespace TbTransactionFlowService {
        export const baseUrl = 'Rukuntangga/TbTransactionFlow';

        export declare function Create(request: Serenity.SaveRequest<TbTransactionFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbTransactionFlowRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbTransactionFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbTransactionFlowRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbTransactionFlow/Create",
            Update = "Rukuntangga/TbTransactionFlow/Update",
            Delete = "Rukuntangga/TbTransactionFlow/Delete",
            Retrieve = "Rukuntangga/TbTransactionFlow/Retrieve",
            List = "Rukuntangga/TbTransactionFlow/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbTransactionFlowService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

