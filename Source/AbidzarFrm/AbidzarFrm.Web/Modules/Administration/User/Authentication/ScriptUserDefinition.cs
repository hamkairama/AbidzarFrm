namespace AbidzarFrm
{
    using AbidzarFrm.Rukuntangga.Entities;
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;

    /// <summary>
    /// This data will be available from script code using a dynamic script.
    /// Add properties you need from script code and set them in UserEndpoint.GetUserData.
    /// </summary>
    [ScriptInclude]
    public class ScriptUserDefinition
    {
        public string Id { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string UserImage { get; set; }
        public short IsActive { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public string Source { get; set; }
        public DateTime? UpdateDate { get; set; }
        public DateTime? LastDirectoryUpdate { get; set; }
        public string UserRoles { get; set; }
        public TbKtpRow Ktp { get; set; }
        public List<TbSlideShowRow> SlideShow { get; set; }
        public Dictionary<string, bool> Permissions { get; set; }
        public Boolean IsAdmin { get; set; }
    }
}