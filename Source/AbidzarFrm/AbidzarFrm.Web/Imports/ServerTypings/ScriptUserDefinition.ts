namespace AbidzarFrm {
    export interface ScriptUserDefinition {
        Id?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        IsActive?: number;
        UserId?: number;
        Username?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        Source?: string;
        UpdateDate?: string;
        LastDirectoryUpdate?: string;
        UserRoles?: string;
        Ktp?: AbidzarFrm.Rukuntangga.TbKtpRow;
        SlideShow?: AbidzarFrm.Rukuntangga.TbSlideShowRow[];
        Permissions?: { [key: string]: boolean };
        IsAdmin?: boolean;
    }
}

