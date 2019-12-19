namespace AbidzarFrm.Rukuntangga {
    export interface TbEmailTemplateRow {
        Id?: number;
        KodeTemplate?: string;
        Subject?: string;
        Template?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
    }

    export namespace TbEmailTemplateRow {
        export const idProperty = 'Id';
        export const nameProperty = 'KodeTemplate';
        export const localTextPrefix = 'Rukuntangga.TbEmailTemplate';
        export const deletePermission = 'Security:EmailTemplate';
        export const insertPermission = 'Security:EmailTemplate';
        export const readPermission = 'Security:EmailTemplate';
        export const updatePermission = 'Security:EmailTemplate';

        export declare const enum Fields {
            Id = "Id",
            KodeTemplate = "KodeTemplate",
            Subject = "Subject",
            Template = "Template",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus"
        }
    }
}

