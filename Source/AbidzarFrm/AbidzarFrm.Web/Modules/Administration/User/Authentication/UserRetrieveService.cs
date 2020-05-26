namespace AbidzarFrm.Administration
{
    using AbidzarFrm.Administration.Entities;
    using AbidzarFrm.Administration.Repositories;
    using AbidzarFrm.Rukuntangga.Entities;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.UserRow;

    public class UserRetrieveService : IUserRetrieveService
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        private static string[] permissionsUsedFromScript;

        private UserDefinition GetFirst(IDbConnection connection, BaseCriteria criteria)
        {
            var user = connection.TrySingle<Entities.UserRow>(criteria);
            if (user != null)
            {
                TbKtpRow dataKtp = GetDataKtp(user.Username);
                List<TbSlideShowRow> dataSlideshow = new List<TbSlideShowRow>();
                if (dataKtp.KodeRt != null && dataKtp.KodeRt != "")
                {
                    dataSlideshow = GetSlideshow(dataKtp.KodeRt);
                }

                string userRoles = GetUserRoles(user.UserId.Value);

                //var permission = TwoLevelCache.GetLocalStoreOnly("ScriptUserPermissions:" + user.UserId.Value, TimeSpan.Zero,
                //UserPermissionRow.Fields.GenerationKey, () =>
                //{
                //    var permissions = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase);

                //    if (permissionsUsedFromScript == null)
                //    {
                //        permissionsUsedFromScript = new UserPermissionRepository().ListPermissionKeys().Entities
                //            .Where(permissionKey =>
                //            {
                //                // this sends permission information for all permission keys to client side.
                //                // if you don't need all of them to be available from script, filter them here.
                //                // this is recommended for security / performance reasons...
                //                return true;
                //            }).ToArray();
                //    }

                //    foreach (var permissionKey in permissionsUsedFromScript)
                //    {
                //        if (Authorization.HasPermission(permissionKey))
                //            permissions[permissionKey] = true;
                //    }

                //    return permissions;
                //});

                return new UserDefinition
                {
                    UserId = user.UserId.Value,
                    Username = user.Username,
                    Email = user.Email,
                    UserImage = user.UserImage,
                    DisplayName = user.DisplayName,
                    IsActive = user.IsActive.Value,
                    Source = user.Source,
                    PasswordHash = user.PasswordHash,
                    PasswordSalt = user.PasswordSalt,
                    UpdateDate = user.UpdateDate,
                    LastDirectoryUpdate = user.LastDirectoryUpdate,
                    Ktp = dataKtp,
                    SlideShow = dataSlideshow,
                    UserRoles = userRoles
                };
            }


            return null;
        }

        public IUserDefinition ById(string id)
        {
            return TwoLevelCache.Get<UserDefinition>("UserByID_" + id, TimeSpan.Zero, TimeSpan.FromDays(1), fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Rukuntangga"))
                    return GetFirst(connection, new Criteria(fld.UserId) == Int32.Parse(id));
            });
        }

        public IUserDefinition ByUsername(string username)
        {
            if (username.IsEmptyOrNull())
                return null;

            return TwoLevelCache.Get<UserDefinition>("UserByName_" + username.ToLowerInvariant(),
                TimeSpan.Zero, TimeSpan.FromDays(1), fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Rukuntangga"))
                    return GetFirst(connection, new Criteria(fld.Username) == username);
            });
        }

        public static void RemoveCachedUser(int? userId, string username)
        {
            if (userId != null)
                TwoLevelCache.Remove("UserByID_" + userId);

            if (username != null)
                TwoLevelCache.Remove("UserByName_" + username.ToLowerInvariant());
        }



        private TbKtpRow GetDataKtp(string userName)
        {
            TbKtpRow result = new TbKtpRow();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                var data = connection.Query<TbKtpRow>("SpGetKtpFromUsername", param: new { UserName = userName }, commandType: System.Data.CommandType.StoredProcedure);
                if (data != null)
                {
                    result = data.FirstOrDefault();
                }
            }

            return result;
        }

        private List<TbSlideShowRow> GetSlideshow(string kodeRt)
        {
            List<TbSlideShowRow> result = new List<TbSlideShowRow>();
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                List<TbSlideShowRow> data = connection.List<TbSlideShowRow>(x => x.SelectTableFields().Where(string.Format("KodeRt = '{0}'", kodeRt)));
                if (data.Count > 0)
                {
                    result = data;
                }
            }

            return result;
        }

        private String GetUserRoles(int userId)
        {
            String result = "";
            using (var connection = SqlConnections.NewByKey("Rukuntangga"))
            {
                UserRoleListRequest request = new UserRoleListRequest();
                request.UserID = userId;
                List<int> userRoleList = new UserRoleRepository().List(connection, request).Entities;
                List<string> arrRole = new List<string>();
                foreach (var roleId in userRoleList)
                {
                    RetrieveRequest roleRequest = new RetrieveRequest();
                    roleRequest.EntityId = roleId;
                    var roleName = new RoleRepository().GetRoleName(connection, roleId);
                    arrRole.Add(roleName);
                }
                result = string.Join(",", arrRole.ToArray());
            }

            return result;
        }
    }
}