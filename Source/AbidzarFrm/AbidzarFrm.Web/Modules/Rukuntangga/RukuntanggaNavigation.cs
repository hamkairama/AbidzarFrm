using Serenity.Navigation;
using MyPages = AbidzarFrm.Rukuntangga.Pages;

[assembly: NavigationMenu(int.MaxValue, "Warga", icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Warga/Cari", "~/Rukuntangga/Warga/Index", permission: "", icon: "fa-search")]

[assembly: NavigationLink(int.MaxValue, "Berita", "~/Rukuntangga/Berita/Index", permission: "", icon: "fa-book")]

[assembly: NavigationLink(int.MaxValue, "Tanya RT", "~/Rukuntangga/RtMenjawab/Index", permission: "", icon: "fa-comments")]

[assembly: NavigationLink(int.MaxValue, "KTP Ku", "~/Rukuntangga/Profile/Index", permission: "", icon: "fa-user")]

[assembly: NavigationLink(int.MaxValue, "Galery", "~/Rukuntangga/Profile/Index", permission: "", icon: "fa-user")]

[assembly: NavigationLink(int.MaxValue, "Aktifitas", "~/Rukuntangga/Profile/Index", permission: "", icon: "fa-user")]

[assembly: NavigationMenu(int.MaxValue, "Informasi", icon: "fa-info-circle")]
[assembly: NavigationLink(int.MaxValue, "Informasi/Jenis Informasi", typeof(MyPages.TbJenisInformasiController), icon: "fa-info-circle")]

[assembly: NavigationMenu(int.MaxValue, "Kegiatan", icon: "fa-tasks")]
[assembly: NavigationLink(int.MaxValue, "Kegiatan/Jenis Kegiatan", typeof(MyPages.TbJenisKegiatanController), icon: "fa-tasks")]

[assembly: NavigationMenu(int.MaxValue, "Master", icon: "fa-calendar-minus-o")]
[assembly: NavigationLink(int.MaxValue, "Master/Appointment Diary", typeof(MyPages.AppointmentDiaryController), icon: "fa-calendar-minus-o")]
[assembly: NavigationLink(int.MaxValue, "Master/Biodata", typeof(MyPages.TbBiodataController), icon: "fa-street-view")]
[assembly: NavigationLink(int.MaxValue, "Master/Dokumentasi Kegiatan", typeof(MyPages.TbDokumentasiDetailJenisKegiatanController), icon: "fa-camera")]
[assembly: NavigationLink(int.MaxValue, "Master/Jabatan", typeof(MyPages.TbJabatanController), icon: "fa-database")]
[assembly: NavigationLink(int.MaxValue, "Master/Jadwal Siskamlim", typeof(MyPages.TbJadwalSiskamlimController), icon: "fa-shield")]
[assembly: NavigationLink(int.MaxValue, "Master/Provinsi", typeof(MyPages.TbProvinsiController), icon: "fa-bank")]
[assembly: NavigationLink(int.MaxValue, "Master/Kota", typeof(MyPages.TbKotaController), icon: "fa-bank")]
[assembly: NavigationLink(int.MaxValue, "Master/Kecamatan", typeof(MyPages.TbKecamatanController), icon: "fa-bank")]
[assembly: NavigationLink(int.MaxValue, "Master/Kelurahan", typeof(MyPages.TbKelurahanController), icon: "fa-bank")]
[assembly: NavigationLink(int.MaxValue, "Master/Ktp", typeof(MyPages.TbKtpController), icon: " fa-credit-card")]
[assembly: NavigationLink(int.MaxValue, "Master/Laporan Kas", typeof(MyPages.TbLaporanKasController), icon: "fa-file-text-o")]
[assembly: NavigationLink(int.MaxValue, "Master/Rt", typeof(MyPages.TbRtController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Master/Rw", typeof(MyPages.TbRwController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Master/Slide Show", typeof(MyPages.TbSlideShowController), icon: "fa-tags")]
[assembly: NavigationLink(int.MaxValue, "Master/Struktur", typeof(MyPages.TbStrukturController), icon: "fa-cubes")]
[assembly: NavigationLink(int.MaxValue, "Master/Tanya Rt", typeof(MyPages.TbTanyaRtController), icon: "fa-envelope-o")]
[assembly: NavigationLink(int.MaxValue, "Master/Tanya Rt Detail", typeof(MyPages.TbTanyaRtDetailController), icon: " fa-comments")]
[assembly: NavigationLink(int.MaxValue, "Master/Testimoni", typeof(MyPages.TbTestimoniController), icon: "fa-pencil-square-o")]

[assembly: NavigationMenu(int.MaxValue, "Questioner", icon: "fa-caret-square-o-right")]
[assembly: NavigationLink(int.MaxValue, "Questioner/Pemilu", typeof(MyPages.TbPemiluController), icon: "fa-caret-square-o-right")]
[assembly: NavigationLink(int.MaxValue, "Questioner/Detail Pemilu", typeof(MyPages.TbDetailPemiluController), icon: "fa-chevron-circle-right")]
[assembly: NavigationLink(int.MaxValue, "Questioner/Polling Pemilu", typeof(MyPages.TbPollingPemiluController), icon: "fa-check-square-o")]

[assembly: NavigationMenu(int.MaxValue, "Security", icon: "fa-gears")]
[assembly: NavigationLink(int.MaxValue, "Security/Autentikasi Token", typeof(MyPages.TbAutentikasiTokenController), icon: "fa-key")]
[assembly: NavigationLink(int.MaxValue, "Security/Email Template", typeof(MyPages.TbEmailTemplateController), icon: "fa-y-combinator")]
[assembly: NavigationLink(int.MaxValue, "Security/Historical User Login", typeof(MyPages.TbHistoricalUserLoginController), icon: "fa-bar-chart")]
[assembly: NavigationLink(int.MaxValue, "Security/List Of Value", typeof(MyPages.TbListOfValueController), icon: "fa-list-ul")]
[assembly: NavigationLink(int.MaxValue, "Security/Parameter", typeof(MyPages.TbParameterController), icon: "fa-code-fork")]
[assembly: NavigationLink(int.MaxValue, "Security/User", typeof(MyPages.TbUserController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Security/User Api", typeof(MyPages.TbUserApiController), icon: "fa-user-secret")]
[assembly: NavigationLink(int.MaxValue, "Security/Mail Log", "~/Rukuntangga/MailLog/Index", permission: "Security:MailLog", icon: "fa-envelope")]
[assembly: NavigationLink(int.MaxValue, "Security/Quick Email", "~/Rukuntangga/QuickEmail/Create", permission: "Security:MailLog", icon: "fa-arrow-circle-right")]
[assembly: NavigationLink(int.MaxValue, "Security/User Member", "~/Rukuntangga/UserMember/Index", permission: "", icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Security/Exceptions Log", url: "~/errorlog.axd", permission: AbidzarFrm.Administration.PermissionKeys.Security, icon: "fa-ban", Target = "_blank")]
[assembly: NavigationLink(int.MaxValue, "Security/Languages", typeof(AbidzarFrm.Administration.Pages.LanguageController), icon: "fa-comments")]
[assembly: NavigationLink(int.MaxValue, "Security/Translations", typeof(AbidzarFrm.Administration.Pages.TranslationController), icon: "fa-comment-o")]
[assembly: NavigationLink(int.MaxValue, "Security/Roles", typeof(AbidzarFrm.Administration.Pages.RoleController), icon: "fa-lock")]
[assembly: NavigationLink(int.MaxValue, "Security/User Management", typeof(AbidzarFrm.Administration.Pages.UserController), icon: "fa-users")]

//[assembly: NavigationLink(int.MaxValue, "Master/Photo Ktp", typeof(MyPages.TbPhotoKtpController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Tb Error Logs", typeof(MyPages.TbErrorLogsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Informasi/Jenis Informasi", typeof(MyPages.TbDetailJenisInformasiController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Kegiatan/Detail Jenis Kegiatan", typeof(MyPages.TbDetailJenisKegiatanController), icon: null)]