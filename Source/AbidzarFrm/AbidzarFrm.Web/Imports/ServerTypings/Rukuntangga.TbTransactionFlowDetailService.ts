namespace AbidzarFrm.Rukuntangga {
    export namespace TbTransactionFlowDetailService {
        export const baseUrl = 'Rukuntangga/TbTransactionFlowDetail';

        export declare function Create(request: Serenity.SaveRequest<TbTransactionFlowDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbTransactionFlowDetailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbTransactionFlowDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbTransactionFlowDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbTransactionFlowDetail/Create",
            Update = "Rukuntangga/TbTransactionFlowDetail/Update",
            Delete = "Rukuntangga/TbTransactionFlowDetail/Delete",
            Retrieve = "Rukuntangga/TbTransactionFlowDetail/Retrieve",
            List = "Rukuntangga/TbTransactionFlowDetail/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbTransactionFlowDetailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

