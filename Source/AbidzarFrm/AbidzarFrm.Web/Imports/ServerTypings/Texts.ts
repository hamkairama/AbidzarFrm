namespace AbidzarFrm.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Northwind {

            namespace Category {
                export const CategoryID: string;
                export const CategoryName: string;
                export const Description: string;
                export const Picture: string;
            }

            namespace CategoryLang {
                export const CategoryId: string;
                export const CategoryName: string;
                export const Description: string;
                export const Id: string;
                export const LanguageId: string;
            }

            namespace Customer {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const CustomerID: string;
                export const Email: string;
                export const Fax: string;
                export const ID: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const NoteList: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const Representatives: string;
                export const SendBulletin: string;
            }

            namespace CustomerCustomerDemo {
                export const CustomerAddress: string;
                export const CustomerCity: string;
                export const CustomerCompanyName: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountry: string;
                export const CustomerFax: string;
                export const CustomerID: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerRegion: string;
                export const CustomerTypeCustomerDesc: string;
                export const CustomerTypeID: string;
                export const ID: string;
            }

            namespace CustomerDemographic {
                export const CustomerDesc: string;
                export const CustomerTypeID: string;
                export const ID: string;
            }

            namespace CustomerDetails {
                export const Email: string;
                export const Id: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const LastContactedByAddress: string;
                export const LastContactedByBirthDate: string;
                export const LastContactedByCity: string;
                export const LastContactedByCountry: string;
                export const LastContactedByExtension: string;
                export const LastContactedByFirstName: string;
                export const LastContactedByHireDate: string;
                export const LastContactedByHomePhone: string;
                export const LastContactedByLastName: string;
                export const LastContactedByNotes: string;
                export const LastContactedByPhoto: string;
                export const LastContactedByPhotoPath: string;
                export const LastContactedByPostalCode: string;
                export const LastContactedByRegion: string;
                export const LastContactedByReportsTo: string;
                export const LastContactedByTitle: string;
                export const LastContactedByTitleOfCourtesy: string;
                export const SendBulletin: string;
            }

            namespace CustomerGrossSales {
                export const ContactName: string;
                export const CustomerId: string;
                export const GrossAmount: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace CustomerRepresentatives {
                export const CustomerId: string;
                export const EmployeeId: string;
                export const RepresentativeId: string;
            }

            namespace DragDropSample {
                export const Id: string;
                export const ParentId: string;
                export const Title: string;
            }

            namespace Employee {
                export const Address: string;
                export const BirthDate: string;
                export const City: string;
                export const Country: string;
                export const EmployeeID: string;
                export const Extension: string;
                export const FirstName: string;
                export const FullName: string;
                export const Gender: string;
                export const HireDate: string;
                export const HomePhone: string;
                export const LastName: string;
                export const Notes: string;
                export const Photo: string;
                export const PhotoPath: string;
                export const PostalCode: string;
                export const Region: string;
                export const ReportsTo: string;
                export const ReportsToAddress: string;
                export const ReportsToBirthDate: string;
                export const ReportsToCity: string;
                export const ReportsToCountry: string;
                export const ReportsToExtension: string;
                export const ReportsToFirstName: string;
                export const ReportsToFullName: string;
                export const ReportsToHireDate: string;
                export const ReportsToHomePhone: string;
                export const ReportsToLastName: string;
                export const ReportsToNotes: string;
                export const ReportsToPhoto: string;
                export const ReportsToPhotoPath: string;
                export const ReportsToPostalCode: string;
                export const ReportsToRegion: string;
                export const ReportsToReportsTo: string;
                export const ReportsToTitle: string;
                export const ReportsToTitleOfCourtesy: string;
                export const Title: string;
                export const TitleOfCourtesy: string;
            }

            namespace EmployeeTerritory {
                export const EmployeeAddress: string;
                export const EmployeeBirthDate: string;
                export const EmployeeCity: string;
                export const EmployeeCountry: string;
                export const EmployeeExtension: string;
                export const EmployeeFirstName: string;
                export const EmployeeHireDate: string;
                export const EmployeeHomePhone: string;
                export const EmployeeID: string;
                export const EmployeeLastName: string;
                export const EmployeeNotes: string;
                export const EmployeePhoto: string;
                export const EmployeePhotoPath: string;
                export const EmployeePostalCode: string;
                export const EmployeeRegion: string;
                export const EmployeeReportsTo: string;
                export const EmployeeTitle: string;
                export const EmployeeTitleOfCourtesy: string;
                export const TerritoryID: string;
                export const TerritoryRegionID: string;
                export const TerritoryTerritoryDescription: string;
            }

            namespace Note {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }

            namespace Order {
                export const CustomerCity: string;
                export const CustomerCompanyName: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountry: string;
                export const CustomerFax: string;
                export const CustomerID: string;
                export const CustomerPhone: string;
                export const CustomerRegion: string;
                export const DetailList: string;
                export const EmployeeFullName: string;
                export const EmployeeGender: string;
                export const EmployeeID: string;
                export const EmployeeReportsToFullName: string;
                export const Freight: string;
                export const OrderDate: string;
                export const OrderID: string;
                export const RequiredDate: string;
                export const ShipAddress: string;
                export const ShipCity: string;
                export const ShipCountry: string;
                export const ShipName: string;
                export const ShipPostalCode: string;
                export const ShipRegion: string;
                export const ShipVia: string;
                export const ShipViaCompanyName: string;
                export const ShipViaPhone: string;
                export const ShippedDate: string;
                export const ShippingState: string;
            }

            namespace OrderDetail {
                export const DetailID: string;
                export const Discount: string;
                export const LineTotal: string;
                export const OrderCustomerID: string;
                export const OrderDate: string;
                export const OrderEmployeeID: string;
                export const OrderID: string;
                export const OrderShipCity: string;
                export const OrderShipCountry: string;
                export const OrderShipVia: string;
                export const OrderShippedDate: string;
                export const ProductDiscontinued: string;
                export const ProductID: string;
                export const ProductName: string;
                export const ProductQuantityPerUnit: string;
                export const ProductSupplierID: string;
                export const ProductUnitPrice: string;
                export const Quantity: string;
                export const UnitPrice: string;
            }

            namespace Product {
                export const CategoryDescription: string;
                export const CategoryID: string;
                export const CategoryName: string;
                export const CategoryPicture: string;
                export const Discontinued: string;
                export const ProductID: string;
                export const ProductImage: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const SupplierAddress: string;
                export const SupplierCity: string;
                export const SupplierCompanyName: string;
                export const SupplierContactName: string;
                export const SupplierContactTitle: string;
                export const SupplierCountry: string;
                export const SupplierFax: string;
                export const SupplierHomePage: string;
                export const SupplierID: string;
                export const SupplierPhone: string;
                export const SupplierPostalCode: string;
                export const SupplierRegion: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
            }

            namespace ProductLang {
                export const Id: string;
                export const LanguageId: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace ProductLog {
                export const CategoryID: string;
                export const ChangingUserId: string;
                export const Discontinued: string;
                export const OperationType: string;
                export const ProductID: string;
                export const ProductImage: string;
                export const ProductLogID: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const SupplierID: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
                export const ValidFrom: string;
                export const ValidUntil: string;
            }

            namespace Region {
                export const RegionDescription: string;
                export const RegionID: string;
            }

            namespace SalesByCategory {
                export const CategoryId: string;
                export const CategoryName: string;
                export const ProductName: string;
                export const ProductSales: string;
            }

            namespace Shipper {
                export const CompanyName: string;
                export const Phone: string;
                export const ShipperID: string;
            }

            namespace Supplier {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const Fax: string;
                export const HomePage: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const SupplierID: string;
            }

            namespace Territory {
                export const ID: string;
                export const RegionDescription: string;
                export const RegionID: string;
                export const TerritoryDescription: string;
                export const TerritoryID: string;
            }
        }

        namespace Rukuntangga {

            namespace AppointmentDiary {
                export const AppointmentLength: string;
                export const DateTimeScheduled: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const KodeRt: string;
                export const SomeImportantKey: string;
                export const StatusEnum: string;
                export const SystemStatus: string;
                export const Title: string;
            }

            namespace TbAutentikasiToken {
                export const Aplikasi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const SystemStatus: string;
                export const Token: string;
            }

            namespace TbBiodata {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Gelar: string;
                export const Id: string;
                export const Nik: string;
                export const SystemStatus: string;
                export const Tahun: string;
            }

            namespace TbDetailJenisInformasi {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IdJenisInformasi: string;
                export const IdJenisInformasiDibuatOleh: string;
                export const IdJenisInformasiDibuatTanggal: string;
                export const IdJenisInformasiDieditOleh: string;
                export const IdJenisInformasiDieditTanggal: string;
                export const IdJenisInformasiJenisInformasi: string;
                export const IdJenisInformasiKodeRt: string;
                export const IdJenisInformasiSystemStatus: string;
                export const IsLandingPage: string;
                export const Judul: string;
                export const LevelArea: string;
                export const NamaFile: string;
                export const SystemStatus: string;
            }

            namespace TbDetailJenisKegiatan {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IdJenisKegiatan: string;
                export const IdJenisKegiatanDeskripsi: string;
                export const IdJenisKegiatanDibuatOleh: string;
                export const IdJenisKegiatanDibuatTanggal: string;
                export const IdJenisKegiatanDieditOleh: string;
                export const IdJenisKegiatanDieditTanggal: string;
                export const IdJenisKegiatanJenisKegiatan: string;
                export const IdJenisKegiatanKodeRt: string;
                export const IdJenisKegiatanSystemStatus: string;
                export const LevelArea: string;
                export const Lokasi: string;
                export const NamaKegiatan: string;
                export const SystemStatus: string;
                export const TanggalKegiatan: string;
                export const WarnaLatar: string;
            }

            namespace TbDetailPemilu {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const FileName: string;
                export const Id: string;
                export const IdPemilu: string;
                export const IdPemiluDibuatOleh: string;
                export const IdPemiluDibuatTanggal: string;
                export const IdPemiluDieditOleh: string;
                export const IdPemiluDieditTanggal: string;
                export const IdPemiluFileName: string;
                export const IdPemiluJudul: string;
                export const IdPemiluKodeRt: string;
                export const IdPemiluSystemStatus: string;
                export const Kandidat: string;
                export const NoUrut: string;
                export const SystemStatus: string;
                export const tbPollingPemiluRow: string;
            }

            namespace TbDokumentasiDetailJenisKegiatan {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IdDetailJenisKegiatan: string;
                export const IdDetailJenisKegiatanDeskripsi: string;
                export const IdDetailJenisKegiatanDibuatOleh: string;
                export const IdDetailJenisKegiatanDibuatTanggal: string;
                export const IdDetailJenisKegiatanDieditOleh: string;
                export const IdDetailJenisKegiatanDieditTanggal: string;
                export const IdDetailJenisKegiatanIdJenisKegiatan: string;
                export const IdDetailJenisKegiatanLevelArea: string;
                export const IdDetailJenisKegiatanLokasi: string;
                export const IdDetailJenisKegiatanNamaKegiatan: string;
                export const IdDetailJenisKegiatanSystemStatus: string;
                export const IdDetailJenisKegiatanTanggalKegiatan: string;
                export const IdDetailJenisKegiatanWarnaLatar: string;
                export const NamaFile: string;
                export const SystemStatus: string;
            }

            namespace TbEmailTemplate {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const KodeTemplate: string;
                export const Subject: string;
                export const SystemStatus: string;
                export const Template: string;
            }

            namespace TbHistoricalUserLogin {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IsMobile: string;
                export const Login: string;
                export const Logout: string;
                export const Nik: string;
                export const SystemStatus: string;
            }

            namespace TbJabatan {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const NamaJabatan: string;
                export const SystemStatus: string;
            }

            namespace TbJadwalSiskamlim {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const Nama: string;
                export const Nik: string;
                export const SystemStatus: string;
                export const Tanggal: string;
            }

            namespace TbJenisInformasi {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const JenisInformasi: string;
                export const KodeRt: string;
                export const SystemStatus: string;
                export const tbDetailJenisInformasiRow: string;
            }

            namespace TbJenisKegiatan {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const JenisKegiatan: string;
                export const KodeRt: string;
                export const SystemStatus: string;
                export const tbDetailJenisKegiatanRow: string;
            }

            namespace TbKecamatan {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IdKota: string;
                export const IdKotaDibuatOleh: string;
                export const IdKotaDibuatTanggal: string;
                export const IdKotaDieditOleh: string;
                export const IdKotaDieditTanggal: string;
                export const IdKotaIdProvinsi: string;
                export const IdKotaKodeKota: string;
                export const IdKotaNamaKota: string;
                export const IdKotaSystemStatus: string;
                export const KodeKecamatan: string;
                export const NamaKecamatan: string;
                export const SystemStatus: string;
            }

            namespace TbKelurahan {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IdKecamatan: string;
                export const IdKecamatanDibuatOleh: string;
                export const IdKecamatanDibuatTanggal: string;
                export const IdKecamatanDieditOleh: string;
                export const IdKecamatanDieditTanggal: string;
                export const IdKecamatanIdKota: string;
                export const IdKecamatanKodeKecamatan: string;
                export const IdKecamatanNamaKecamatan: string;
                export const IdKecamatanSystemStatus: string;
                export const KodeKelurahan: string;
                export const NamaKelurahan: string;
                export const SystemStatus: string;
            }

            namespace TbKota {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IdProvinsi: string;
                export const IdProvinsiDibuatOleh: string;
                export const IdProvinsiDibuatTanggal: string;
                export const IdProvinsiDieditOleh: string;
                export const IdProvinsiDieditTanggal: string;
                export const IdProvinsiKodeProvinsi: string;
                export const IdProvinsiNamaProvinsi: string;
                export const IdProvinsiSystemStatus: string;
                export const KodeKota: string;
                export const NamaKota: string;
                export const SystemStatus: string;
            }

            namespace TbKtp {
                export const Agama: string;
                export const Alamat: string;
                export const AlamatTinggal: string;
                export const Attachment: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const GolonganDarah: string;
                export const Id: string;
                export const IdKecamatan: string;
                export const IdKelurahan: string;
                export const IdKelurahanTinggal: string;
                export const IdKota: string;
                export const IdProvinsi: string;
                export const JenisKelamin: string;
                export const JenisPekerjaan: string;
                export const Kewarganegaraan: string;
                export const Kk: string;
                export const KodePos: string;
                export const KodeRt: string;
                export const Nama: string;
                export const NamaAyah: string;
                export const NamaIbu: string;
                export const Nik: string;
                export const Pendidikan: string;
                export const PhotoKtp: string;
                export const Rt: string;
                export const RtTinggal: string;
                export const Rw: string;
                export const RwTinggal: string;
                export const SignatureKtp: string;
                export const StatusPerkawinan: string;
                export const SystemStatus: string;
                export const TanggalLahir: string;
                export const TanggalPerkawinan: string;
                export const TempatLahir: string;
            }

            namespace TbLaporanKas {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const KodeRt: string;
                export const SystemStatus: string;
                export const Tanggal: string;
                export const Tipe: string;
                export const Total: string;
            }

            namespace TbListOfValue {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Group: string;
                export const Id: string;
                export const Kode: string;
                export const SystemStatus: string;
                export const Value: string;
            }

            namespace TbMailLog {
                export const Body: string;
                export const Cc: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const ErrorMessage: string;
                export const From: string;
                export const Id: string;
                export const Status: string;
                export const Subject: string;
                export const To: string;
            }

            namespace TbParameter {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const Kode: string;
                export const SystemStatus: string;
                export const Value: string;
            }

            namespace TbPemilu {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const FileName: string;
                export const Id: string;
                export const Judul: string;
                export const KodeRt: string;
                export const SystemStatus: string;
                export const tbDetailPemiluRow: string;
            }

            namespace TbPhotoKtp {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const NamaFile: string;
                export const SystemStatus: string;
            }

            namespace TbPollingPemilu {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IdDetailPemilu: string;
                export const IdDetailPemiluDibuatOleh: string;
                export const IdDetailPemiluDibuatTanggal: string;
                export const IdDetailPemiluDieditOleh: string;
                export const IdDetailPemiluDieditTanggal: string;
                export const IdDetailPemiluFileName: string;
                export const IdDetailPemiluIdPemilu: string;
                export const IdDetailPemiluKandidat: string;
                export const IdDetailPemiluNoUrut: string;
                export const IdDetailPemiluSystemStatus: string;
                export const Nik: string;
                export const NikAgama: string;
                export const NikAlamat: string;
                export const NikAlamatTinggal: string;
                export const NikDibuatOleh: string;
                export const NikDibuatTanggal: string;
                export const NikDieditOleh: string;
                export const NikDieditTanggal: string;
                export const NikGolonganDarah: string;
                export const NikId: string;
                export const NikIdKelurahan: string;
                export const NikIdKelurahanTinggal: string;
                export const NikIdPhotoKtp: string;
                export const NikIdSignatureKtp: string;
                export const NikJenisKelamin: string;
                export const NikJenisPekerjaan: string;
                export const NikKewarganegaraan: string;
                export const NikKk: string;
                export const NikKodePos: string;
                export const NikKodeRt: string;
                export const NikNama: string;
                export const NikNamaAyah: string;
                export const NikNamaIbu: string;
                export const NikPendidikan: string;
                export const NikRt: string;
                export const NikRtTinggal: string;
                export const NikRw: string;
                export const NikRwTinggal: string;
                export const NikStatusPerkawinan: string;
                export const NikSystemStatus: string;
                export const NikTanggalLahir: string;
                export const NikTanggalPerkawinan: string;
                export const NikTempatLahir: string;
                export const SystemStatus: string;
            }

            namespace TbProvinsi {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const KodeProvinsi: string;
                export const NamaProvinsi: string;
                export const SystemStatus: string;
            }

            namespace TbRt {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Facebook: string;
                export const Id: string;
                export const IdRw: string;
                export const IdRwKodeRw: string;
                export const IdRwNamaRw: string;
                export const Instagram: string;
                export const KodeLogin: string;
                export const KodeRt: string;
                export const Misi: string;
                export const NamaRt: string;
                export const Nik: string;
                export const NoRt: string;
                export const Photo: string;
                export const Quotes: string;
                export const SystemStatus: string;
                export const Twitter: string;
                export const Visi: string;
                export const Whatsapp: string;
            }

            namespace TbRw {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Facebook: string;
                export const Footer: string;
                export const Header: string;
                export const Id: string;
                export const IdKecamatan: string;
                export const IdKelurahan: string;
                export const IdKota: string;
                export const IdProvinsi: string;
                export const Instagram: string;
                export const KodeRw: string;
                export const Misi: string;
                export const NamaRw: string;
                export const Nik: string;
                export const NoRw: string;
                export const Photo: string;
                export const Quotes: string;
                export const SystemStatus: string;
                export const Twitter: string;
                export const Visi: string;
                export const Whatsapp: string;
            }

            namespace TbSlideShow {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const FileName: string;
                export const Id: string;
                export const Judul: string;
                export const KodeRt: string;
                export const PathUrl: string;
                export const Posisi: string;
                export const SystemStatus: string;
                export const Tipe: string;
            }

            namespace TbStruktur {
                export const AkhirPeriode: string;
                export const AwalPeriode: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IdJabatan: string;
                export const IdJabatanDibuatOleh: string;
                export const IdJabatanDibuatTanggal: string;
                export const IdJabatanDieditOleh: string;
                export const IdJabatanDieditTanggal: string;
                export const IdJabatanNamaJabatan: string;
                export const IdJabatanSystemStatus: string;
                export const IdKtp: string;
                export const SystemStatus: string;
            }

            namespace TbTanyaRt {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const Judul: string;
                export const SystemStatus: string;
            }

            namespace TbTanyaRtDetail {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IdTanyaRt: string;
                export const IdTanyaRtDibuatOleh: string;
                export const IdTanyaRtDibuatTanggal: string;
                export const IdTanyaRtDieditOleh: string;
                export const IdTanyaRtDieditTanggal: string;
                export const IdTanyaRtJudul: string;
                export const IdTanyaRtSystemStatus: string;
                export const SystemStatus: string;
            }

            namespace TbTestimoni {
                export const Deskripsi: string;
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const Nik: string;
                export const SystemStatus: string;
            }

            namespace TbUser {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Email: string;
                export const Id: string;
                export const IdRole: string;
                export const IsMobile: string;
                export const KodeVerifikasi: string;
                export const Nik: string;
                export const Sandi: string;
                export const Status: string;
                export const SystemStatus: string;
            }

            namespace TbUserApi {
                export const DibuatOleh: string;
                export const DibuatTanggal: string;
                export const DieditOleh: string;
                export const DieditTanggal: string;
                export const Id: string;
                export const IdUser: string;
                export const NamaApi: string;
                export const Sandi: string;
                export const Status: string;
                export const SystemStatus: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const NorthwindPhone: string;
        export const NorthwindPhoneMultiple: string;
        export const SavePrimaryKeyError: string;
    }

    AbidzarFrm['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Northwind:{Category:{CategoryID:1,CategoryName:1,Description:1,Picture:1},CategoryLang:{CategoryId:1,CategoryName:1,Description:1,Id:1,LanguageId:1},Customer:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,CustomerID:1,Email:1,Fax:1,ID:1,LastContactDate:1,LastContactedBy:1,NoteList:1,Phone:1,PostalCode:1,Region:1,Representatives:1,SendBulletin:1},CustomerCustomerDemo:{CustomerAddress:1,CustomerCity:1,CustomerCompanyName:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountry:1,CustomerFax:1,CustomerID:1,CustomerPhone:1,CustomerPostalCode:1,CustomerRegion:1,CustomerTypeCustomerDesc:1,CustomerTypeID:1,ID:1},CustomerDemographic:{CustomerDesc:1,CustomerTypeID:1,ID:1},CustomerDetails:{Email:1,Id:1,LastContactDate:1,LastContactedBy:1,LastContactedByAddress:1,LastContactedByBirthDate:1,LastContactedByCity:1,LastContactedByCountry:1,LastContactedByExtension:1,LastContactedByFirstName:1,LastContactedByHireDate:1,LastContactedByHomePhone:1,LastContactedByLastName:1,LastContactedByNotes:1,LastContactedByPhoto:1,LastContactedByPhotoPath:1,LastContactedByPostalCode:1,LastContactedByRegion:1,LastContactedByReportsTo:1,LastContactedByTitle:1,LastContactedByTitleOfCourtesy:1,SendBulletin:1},CustomerGrossSales:{ContactName:1,CustomerId:1,GrossAmount:1,ProductId:1,ProductName:1},CustomerRepresentatives:{CustomerId:1,EmployeeId:1,RepresentativeId:1},DragDropSample:{Id:1,ParentId:1,Title:1},Employee:{Address:1,BirthDate:1,City:1,Country:1,EmployeeID:1,Extension:1,FirstName:1,FullName:1,Gender:1,HireDate:1,HomePhone:1,LastName:1,Notes:1,Photo:1,PhotoPath:1,PostalCode:1,Region:1,ReportsTo:1,ReportsToAddress:1,ReportsToBirthDate:1,ReportsToCity:1,ReportsToCountry:1,ReportsToExtension:1,ReportsToFirstName:1,ReportsToFullName:1,ReportsToHireDate:1,ReportsToHomePhone:1,ReportsToLastName:1,ReportsToNotes:1,ReportsToPhoto:1,ReportsToPhotoPath:1,ReportsToPostalCode:1,ReportsToRegion:1,ReportsToReportsTo:1,ReportsToTitle:1,ReportsToTitleOfCourtesy:1,Title:1,TitleOfCourtesy:1},EmployeeTerritory:{EmployeeAddress:1,EmployeeBirthDate:1,EmployeeCity:1,EmployeeCountry:1,EmployeeExtension:1,EmployeeFirstName:1,EmployeeHireDate:1,EmployeeHomePhone:1,EmployeeID:1,EmployeeLastName:1,EmployeeNotes:1,EmployeePhoto:1,EmployeePhotoPath:1,EmployeePostalCode:1,EmployeeRegion:1,EmployeeReportsTo:1,EmployeeTitle:1,EmployeeTitleOfCourtesy:1,TerritoryID:1,TerritoryRegionID:1,TerritoryTerritoryDescription:1},Note:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1},Order:{CustomerCity:1,CustomerCompanyName:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountry:1,CustomerFax:1,CustomerID:1,CustomerPhone:1,CustomerRegion:1,DetailList:1,EmployeeFullName:1,EmployeeGender:1,EmployeeID:1,EmployeeReportsToFullName:1,Freight:1,OrderDate:1,OrderID:1,RequiredDate:1,ShipAddress:1,ShipCity:1,ShipCountry:1,ShipName:1,ShipPostalCode:1,ShipRegion:1,ShipVia:1,ShipViaCompanyName:1,ShipViaPhone:1,ShippedDate:1,ShippingState:1},OrderDetail:{DetailID:1,Discount:1,LineTotal:1,OrderCustomerID:1,OrderDate:1,OrderEmployeeID:1,OrderID:1,OrderShipCity:1,OrderShipCountry:1,OrderShipVia:1,OrderShippedDate:1,ProductDiscontinued:1,ProductID:1,ProductName:1,ProductQuantityPerUnit:1,ProductSupplierID:1,ProductUnitPrice:1,Quantity:1,UnitPrice:1},Product:{CategoryDescription:1,CategoryID:1,CategoryName:1,CategoryPicture:1,Discontinued:1,ProductID:1,ProductImage:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,SupplierAddress:1,SupplierCity:1,SupplierCompanyName:1,SupplierContactName:1,SupplierContactTitle:1,SupplierCountry:1,SupplierFax:1,SupplierHomePage:1,SupplierID:1,SupplierPhone:1,SupplierPostalCode:1,SupplierRegion:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1},ProductLang:{Id:1,LanguageId:1,ProductId:1,ProductName:1},ProductLog:{CategoryID:1,ChangingUserId:1,Discontinued:1,OperationType:1,ProductID:1,ProductImage:1,ProductLogID:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,SupplierID:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,ValidFrom:1,ValidUntil:1},Region:{RegionDescription:1,RegionID:1},SalesByCategory:{CategoryId:1,CategoryName:1,ProductName:1,ProductSales:1},Shipper:{CompanyName:1,Phone:1,ShipperID:1},Supplier:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,Fax:1,HomePage:1,Phone:1,PostalCode:1,Region:1,SupplierID:1},Territory:{ID:1,RegionDescription:1,RegionID:1,TerritoryDescription:1,TerritoryID:1}},Rukuntangga:{AppointmentDiary:{AppointmentLength:1,DateTimeScheduled:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,KodeRt:1,SomeImportantKey:1,StatusEnum:1,SystemStatus:1,Title:1},TbAutentikasiToken:{Aplikasi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,SystemStatus:1,Token:1},TbBiodata:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Gelar:1,Id:1,Nik:1,SystemStatus:1,Tahun:1},TbDetailJenisInformasi:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IdJenisInformasi:1,IdJenisInformasiDibuatOleh:1,IdJenisInformasiDibuatTanggal:1,IdJenisInformasiDieditOleh:1,IdJenisInformasiDieditTanggal:1,IdJenisInformasiJenisInformasi:1,IdJenisInformasiKodeRt:1,IdJenisInformasiSystemStatus:1,IsLandingPage:1,Judul:1,LevelArea:1,NamaFile:1,SystemStatus:1},TbDetailJenisKegiatan:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IdJenisKegiatan:1,IdJenisKegiatanDeskripsi:1,IdJenisKegiatanDibuatOleh:1,IdJenisKegiatanDibuatTanggal:1,IdJenisKegiatanDieditOleh:1,IdJenisKegiatanDieditTanggal:1,IdJenisKegiatanJenisKegiatan:1,IdJenisKegiatanKodeRt:1,IdJenisKegiatanSystemStatus:1,LevelArea:1,Lokasi:1,NamaKegiatan:1,SystemStatus:1,TanggalKegiatan:1,WarnaLatar:1},TbDetailPemilu:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,FileName:1,Id:1,IdPemilu:1,IdPemiluDibuatOleh:1,IdPemiluDibuatTanggal:1,IdPemiluDieditOleh:1,IdPemiluDieditTanggal:1,IdPemiluFileName:1,IdPemiluJudul:1,IdPemiluKodeRt:1,IdPemiluSystemStatus:1,Kandidat:1,NoUrut:1,SystemStatus:1,tbPollingPemiluRow:1},TbDokumentasiDetailJenisKegiatan:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IdDetailJenisKegiatan:1,IdDetailJenisKegiatanDeskripsi:1,IdDetailJenisKegiatanDibuatOleh:1,IdDetailJenisKegiatanDibuatTanggal:1,IdDetailJenisKegiatanDieditOleh:1,IdDetailJenisKegiatanDieditTanggal:1,IdDetailJenisKegiatanIdJenisKegiatan:1,IdDetailJenisKegiatanLevelArea:1,IdDetailJenisKegiatanLokasi:1,IdDetailJenisKegiatanNamaKegiatan:1,IdDetailJenisKegiatanSystemStatus:1,IdDetailJenisKegiatanTanggalKegiatan:1,IdDetailJenisKegiatanWarnaLatar:1,NamaFile:1,SystemStatus:1},TbEmailTemplate:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,KodeTemplate:1,Subject:1,SystemStatus:1,Template:1},TbHistoricalUserLogin:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IsMobile:1,Login:1,Logout:1,Nik:1,SystemStatus:1},TbJabatan:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,NamaJabatan:1,SystemStatus:1},TbJadwalSiskamlim:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,Nama:1,Nik:1,SystemStatus:1,Tanggal:1},TbJenisInformasi:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,JenisInformasi:1,KodeRt:1,SystemStatus:1,tbDetailJenisInformasiRow:1},TbJenisKegiatan:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,JenisKegiatan:1,KodeRt:1,SystemStatus:1,tbDetailJenisKegiatanRow:1},TbKecamatan:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IdKota:1,IdKotaDibuatOleh:1,IdKotaDibuatTanggal:1,IdKotaDieditOleh:1,IdKotaDieditTanggal:1,IdKotaIdProvinsi:1,IdKotaKodeKota:1,IdKotaNamaKota:1,IdKotaSystemStatus:1,KodeKecamatan:1,NamaKecamatan:1,SystemStatus:1},TbKelurahan:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IdKecamatan:1,IdKecamatanDibuatOleh:1,IdKecamatanDibuatTanggal:1,IdKecamatanDieditOleh:1,IdKecamatanDieditTanggal:1,IdKecamatanIdKota:1,IdKecamatanKodeKecamatan:1,IdKecamatanNamaKecamatan:1,IdKecamatanSystemStatus:1,KodeKelurahan:1,NamaKelurahan:1,SystemStatus:1},TbKota:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IdProvinsi:1,IdProvinsiDibuatOleh:1,IdProvinsiDibuatTanggal:1,IdProvinsiDieditOleh:1,IdProvinsiDieditTanggal:1,IdProvinsiKodeProvinsi:1,IdProvinsiNamaProvinsi:1,IdProvinsiSystemStatus:1,KodeKota:1,NamaKota:1,SystemStatus:1},TbKtp:{Agama:1,Alamat:1,AlamatTinggal:1,Attachment:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,GolonganDarah:1,Id:1,IdKecamatan:1,IdKelurahan:1,IdKelurahanTinggal:1,IdKota:1,IdProvinsi:1,JenisKelamin:1,JenisPekerjaan:1,Kewarganegaraan:1,Kk:1,KodePos:1,KodeRt:1,Nama:1,NamaAyah:1,NamaIbu:1,Nik:1,Pendidikan:1,PhotoKtp:1,Rt:1,RtTinggal:1,Rw:1,RwTinggal:1,SignatureKtp:1,StatusPerkawinan:1,SystemStatus:1,TanggalLahir:1,TanggalPerkawinan:1,TempatLahir:1},TbLaporanKas:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,KodeRt:1,SystemStatus:1,Tanggal:1,Tipe:1,Total:1},TbListOfValue:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Group:1,Id:1,Kode:1,SystemStatus:1,Value:1},TbMailLog:{Body:1,Cc:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,ErrorMessage:1,From:1,Id:1,Status:1,Subject:1,To:1},TbParameter:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,Kode:1,SystemStatus:1,Value:1},TbPemilu:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,FileName:1,Id:1,Judul:1,KodeRt:1,SystemStatus:1,tbDetailPemiluRow:1},TbPhotoKtp:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,NamaFile:1,SystemStatus:1},TbPollingPemilu:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IdDetailPemilu:1,IdDetailPemiluDibuatOleh:1,IdDetailPemiluDibuatTanggal:1,IdDetailPemiluDieditOleh:1,IdDetailPemiluDieditTanggal:1,IdDetailPemiluFileName:1,IdDetailPemiluIdPemilu:1,IdDetailPemiluKandidat:1,IdDetailPemiluNoUrut:1,IdDetailPemiluSystemStatus:1,Nik:1,NikAgama:1,NikAlamat:1,NikAlamatTinggal:1,NikDibuatOleh:1,NikDibuatTanggal:1,NikDieditOleh:1,NikDieditTanggal:1,NikGolonganDarah:1,NikId:1,NikIdKelurahan:1,NikIdKelurahanTinggal:1,NikIdPhotoKtp:1,NikIdSignatureKtp:1,NikJenisKelamin:1,NikJenisPekerjaan:1,NikKewarganegaraan:1,NikKk:1,NikKodePos:1,NikKodeRt:1,NikNama:1,NikNamaAyah:1,NikNamaIbu:1,NikPendidikan:1,NikRt:1,NikRtTinggal:1,NikRw:1,NikRwTinggal:1,NikStatusPerkawinan:1,NikSystemStatus:1,NikTanggalLahir:1,NikTanggalPerkawinan:1,NikTempatLahir:1,SystemStatus:1},TbProvinsi:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,KodeProvinsi:1,NamaProvinsi:1,SystemStatus:1},TbRt:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Facebook:1,Id:1,IdRw:1,IdRwKodeRw:1,IdRwNamaRw:1,Instagram:1,KodeLogin:1,KodeRt:1,Misi:1,NamaRt:1,Nik:1,NoRt:1,Photo:1,Quotes:1,SystemStatus:1,Twitter:1,Visi:1,Whatsapp:1},TbRw:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Facebook:1,Footer:1,Header:1,Id:1,IdKecamatan:1,IdKelurahan:1,IdKota:1,IdProvinsi:1,Instagram:1,KodeRw:1,Misi:1,NamaRw:1,Nik:1,NoRw:1,Photo:1,Quotes:1,SystemStatus:1,Twitter:1,Visi:1,Whatsapp:1},TbSlideShow:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,FileName:1,Id:1,Judul:1,KodeRt:1,PathUrl:1,Posisi:1,SystemStatus:1,Tipe:1},TbStruktur:{AkhirPeriode:1,AwalPeriode:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IdJabatan:1,IdJabatanDibuatOleh:1,IdJabatanDibuatTanggal:1,IdJabatanDieditOleh:1,IdJabatanDieditTanggal:1,IdJabatanNamaJabatan:1,IdJabatanSystemStatus:1,IdKtp:1,SystemStatus:1},TbTanyaRt:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,Judul:1,SystemStatus:1},TbTanyaRtDetail:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IdTanyaRt:1,IdTanyaRtDibuatOleh:1,IdTanyaRtDibuatTanggal:1,IdTanyaRtDieditOleh:1,IdTanyaRtDieditTanggal:1,IdTanyaRtJudul:1,IdTanyaRtSystemStatus:1,SystemStatus:1},TbTestimoni:{Deskripsi:1,DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,Nik:1,SystemStatus:1},TbUser:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Email:1,Id:1,IdRole:1,IsMobile:1,KodeVerifikasi:1,Nik:1,Sandi:1,Status:1,SystemStatus:1},TbUserApi:{DibuatOleh:1,DibuatTanggal:1,DieditOleh:1,DieditTanggal:1,Id:1,IdUser:1,NamaApi:1,Sandi:1,Status:1,SystemStatus:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,NorthwindPhone:1,NorthwindPhoneMultiple:1,SavePrimaryKeyError:1}});
}

