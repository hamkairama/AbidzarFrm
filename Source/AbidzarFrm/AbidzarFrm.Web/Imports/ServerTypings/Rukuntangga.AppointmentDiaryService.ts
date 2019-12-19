namespace AbidzarFrm.Rukuntangga {
    export namespace AppointmentDiaryService {
        export const baseUrl = 'Rukuntangga/AppointmentDiary';

        export declare function Create(request: Serenity.SaveRequest<AppointmentDiaryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AppointmentDiaryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AppointmentDiaryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AppointmentDiaryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Rukuntangga/AppointmentDiary/Create",
            Update = "Rukuntangga/AppointmentDiary/Update",
            Delete = "Rukuntangga/AppointmentDiary/Delete",
            Retrieve = "Rukuntangga/AppointmentDiary/Retrieve",
            List = "Rukuntangga/AppointmentDiary/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AppointmentDiaryService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

