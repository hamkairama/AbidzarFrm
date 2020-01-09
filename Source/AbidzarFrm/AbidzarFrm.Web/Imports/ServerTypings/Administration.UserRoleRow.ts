namespace AbidzarFrm.Administration {
    export interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
        RoleName?: string;
    }

    export namespace UserRoleRow {
        export const idProperty = 'UserRoleId';
        export const localTextPrefix = 'Administration.UserRole';
        export const deletePermission = 'Security:UserRoles';
        export const insertPermission = 'Security:UserRoles';
        export const readPermission = 'Security:UserRoles';
        export const updatePermission = 'Security:UserRoles';

        export declare const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User",
            RoleName = "RoleName"
        }
    }
}

