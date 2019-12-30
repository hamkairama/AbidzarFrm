using AbidzarFrm.Administration.Entities;
using Serenity;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbidzarFrm.Modules.Common.Helpers
{
    public class UserAdditionalInfo
    {
        public static List<string> GetUserRoles(string username)
        {
            var fld = UserRoleRow.Fields;

            //return TwoLevelCache.GetLocalStoreOnly("UserRoleNames:" + username, TimeSpan.Zero, fld.GenerationKey, () =>
            // {
            using (var connection = SqlConnections.NewFor<UserRoleRow>())
            {
                var result = new List<string>();

                connection.List<UserRoleRow>(q => q
                        .Select(fld.RoleName)
                        .Where(new Criteria(fld.Username) == username))
                    .ForEach(x => result.Add(x.RoleName));

                return result;
            }
            //  });
        }



        public static Boolean HasRole(string roleName)
        {
            var user = (Authorization.UserDefinition as UserDefinition);
            int userId = user.UserId;
            var fld = UserRoleRow.Fields;

            using (var connection = SqlConnections.NewFor<UserRoleRow>())
            {
                var result = new List<string>();

                return connection.List<UserRoleRow>(q => q
                         .Select(fld.RoleName)
                         .Where(new Criteria(fld.RoleName) == roleName & new Criteria(fld.UserId) == userId)).Any();


            }


        }
    }
}