namespace AbidzarFrm.Rukuntangga {
    export namespace TbTransactionDocumentCodeService {
        export const baseUrl = 'Rukuntangga/TbTransactionDocumentCode';

        export declare function Create(request: Serenity.SaveRequest<TbTransactionDocumentCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbTransactionDocumentCodeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbTransactionDocumentCodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbTransactionDocumentCodeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbTransactionDocumentCode/Create",
            Update = "Rukuntangga/TbTransactionDocumentCode/Update",
            Delete = "Rukuntangga/TbTransactionDocumentCode/Delete",
            Retrieve = "Rukuntangga/TbTransactionDocumentCode/Retrieve",
            List = "Rukuntangga/TbTransactionDocumentCode/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbTransactionDocumentCodeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

