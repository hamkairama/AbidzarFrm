namespace AbidzarFrm.Administration {
    export interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }

    export namespace RolePermissionRow {
        export const idProperty = 'RolePermissionId';
        export const nameProperty = 'PermissionKey';
        export const localTextPrefix = 'Administration.RolePermission';
        export const deletePermission = 'Security:RolePermission';
        export const insertPermission = 'Security:RolePermission';
        export const readPermission = 'Security:RolePermission';
        export const updatePermission = 'Security:RolePermission';

        export declare const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}

