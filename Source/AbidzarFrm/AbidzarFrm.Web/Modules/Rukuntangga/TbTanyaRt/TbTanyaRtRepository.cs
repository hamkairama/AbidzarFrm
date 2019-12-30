
namespace AbidzarFrm.Rukuntangga.Repositories
{
    using AbidzarFrm.Modules.Common.Helpers;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TbTanyaRtRow;

    public class TbTanyaRtRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.DibuatOleh = CurrentSession.Ktp().Nik;
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.DieditOleh = CurrentSession.Ktp().Nik;
            request.Entity.DieditTanggal = DateTime.Now;
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            request.IncludeField(MyRow.Fields.tbTanyaRtDetailRow);
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            request.IncludeField(MyRow.Fields.tbTanyaRtDetailRow);
            request.IncludeField(MyRow.Fields.KtpIdKtp);
            request.IncludeField(MyRow.Fields.KtpPhotoKtp);
            request.IncludeField(MyRow.Fields.KtpNama);
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}