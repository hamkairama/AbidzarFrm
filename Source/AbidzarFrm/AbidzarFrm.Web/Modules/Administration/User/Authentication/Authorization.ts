namespace AbidzarFrm.Authorization {
    export declare let userDefinition: ScriptUserDefinition;

    Object.defineProperty(Authorization, 'userDefinition', {
        get: function () {
            return Q.getRemoteData('UserData');
        }
    });

    export function hasPermission(permissionKey: string) {
        let ud = userDefinition;
        return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
    }

    export function hasRoles(roleName: string) {
        let ud = userDefinition;
        return ud.Username === 'admin' || ud.Roles.indexOf(roleName) > -1;
    }
}