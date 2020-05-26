namespace AbidzarFrm
{
    using AbidzarFrm.Rukuntangga.Entities;
    using Serenity;
    using System;
    using System.Collections.Generic;

    [Serializable]
    public class UserDefinition : IUserDefinition
    {
        public string Id { get { return UserId.ToInvariant(); } }
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