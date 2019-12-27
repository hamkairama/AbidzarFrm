
using Serenity.Extensibility;
using System.ComponentModel;

namespace AbidzarFrm.Rukuntangga
{
    [NestedPermissionKeys]
    [DisplayName("Security")]
    public class PermissionKeys
    {
        [Description("Security:MailLog")]
        public const string MailLog = "Security:MailLog";
        [Description("Security:Language")]
        public const string Language = "Security:Language";
        [Description("Security:Role")]
        public const string Role = "Security:Role";
        [Description("Security:RolePermission")]
        public const string RolePermission = "Security:RolePermission";
        [Description("Security:UserMember")]
        public const string UserMember = "Security:UserMember";
        [Description("Security:UserPermission")]
        public const string UserPermission = "Security:UserPermission";
        [Description("Security:UserRoles")]
        public const string UserRoles = "Security:UserRoles";
        [Description("Security:Translation")]
        public const string Translation = "Security:Translation";
        [Description("Security:ExceptionsLog")]
        public const string ExceptionsLog = "Security:ExceptionsLog";
    }
}
