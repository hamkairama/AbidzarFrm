namespace AbidzarFrm.Rukuntangga {
    export namespace TbEmailTemplateService {
        export const baseUrl = 'Rukuntangga/TbEmailTemplate';

        export declare function Create(request: Serenity.SaveRequest<TbEmailTemplateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TbEmailTemplateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbEmailTemplateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbEmailTemplateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/TbEmailTemplate/Create",
            Update = "Rukuntangga/TbEmailTemplate/Update",
            Delete = "Rukuntangga/TbEmailTemplate/Delete",
            Retrieve = "Rukuntangga/TbEmailTemplate/Retrieve",
            List = "Rukuntangga/TbEmailTemplate/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TbEmailTemplateService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

