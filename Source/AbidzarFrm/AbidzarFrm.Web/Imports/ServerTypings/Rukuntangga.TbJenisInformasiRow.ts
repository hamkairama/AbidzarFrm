namespace AbidzarFrm.Rukuntangga {
    export interface TbJenisInformasiRow {
        Id?: number;
        JenisInformasi?: string;
        DibuatOleh?: string;
        DibuatTanggal?: string;
        DieditOleh?: string;
        DieditTanggal?: string;
        SystemStatus?: boolean;
        KodeRt?: string;
        tbDetailJenisInformasiRow?: TbDetailJenisInformasiRow[];
    }

    export namespace TbJenisInformasiRow {
        export const idProperty = 'Id';
        export const nameProperty = 'JenisInformasi';
        export const localTextPrefix = 'Rukuntangga.TbJenisInformasi';
        export const deletePermission = 'Informasi:Delete';
        export const insertPermission = 'Informasi:Insert';
        export const readPermission = 'Informasi:View';
        export const updatePermission = 'Informasi:Modify';

        export declare const enum Fields {
            Id = "Id",
            JenisInformasi = "JenisInformasi",
            DibuatOleh = "DibuatOleh",
            DibuatTanggal = "DibuatTanggal",
            DieditOleh = "DieditOleh",
            DieditTanggal = "DieditTanggal",
            SystemStatus = "SystemStatus",
            KodeRt = "KodeRt",
            tbDetailJenisInformasiRow = "tbDetailJenisInformasiRow"
        }
    }
}

