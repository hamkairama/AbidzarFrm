
namespace AbidzarFrm.Rukuntangga.Repositories
{
    using AbidzarFrm.Modules.Common.Helpers;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TbKtpRow;

    public class TbKtpRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var ud = (UserDefinition)Authorization.UserDefinition;
            request.Entity.DibuatOleh = ud.Ktp.Nik;
            request.Entity.KodeRt = ud.Ktp.KodeRt;
            if (request.Entity.TinggalSesuaiKtp == 1)
            {
                request.Entity.IdProvinsiTinggal = request.Entity.IdProvinsi;
                request.Entity.IdKotaTinggal = request.Entity.IdKota;
                request.Entity.IdKecamatanTinggal = request.Entity.IdKecamatan;
                request.Entity.IdKelurahanTinggal = request.Entity.IdKelurahan;
                request.Entity.AlamatTinggal = request.Entity.Alamat;
                request.Entity.RtTinggal = request.Entity.Rt;
                request.Entity.RwTinggal = request.Entity.Rw;
            }
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var ud = (UserDefinition)Authorization.UserDefinition;
            request.Entity.DieditOleh = ud.Ktp.Nik;
            request.Entity.DieditTanggal = DateTime.Now;
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}