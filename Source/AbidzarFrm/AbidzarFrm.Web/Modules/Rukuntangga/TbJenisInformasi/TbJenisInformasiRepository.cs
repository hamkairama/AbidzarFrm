
namespace AbidzarFrm.Rukuntangga.Repositories
{
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Rukuntangga.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TbJenisInformasiRow;

    public class TbJenisInformasiRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.DibuatOleh = CurrentSession.Ktp().Nik;
            request.Entity.KodeRt = CurrentSession.Ktp().KodeRt;
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
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            request.IncludeField(MyRow.Fields.tbDetailJenisInformasiRow);
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                #region DetailJenisInformasi
                if (this.Row.tbDetailJenisInformasiRow.Count > 0)
                {
                    string idIn = "";
                    int i = 0;
                    foreach (TbDetailJenisInformasiRow detailRow in this.Row.tbDetailJenisInformasiRow)
                    {
                        detailRow.IdJenisInformasi = this.Row.Id;
                        detailRow.DibuatOleh = this.Row.DibuatOleh;
                        if (detailRow.Id != null)
                        {
                            this.Connection.UpdateById(detailRow);
                        }
                        else
                        {
                            int insertId = (int)this.Connection.InsertAndGetID(detailRow);
                            //set accountRow.Id
                            detailRow.Id = (int)insertId;
                        }

                        i++;
                        idIn += detailRow.Id.ToString();
                        if (i < this.Row.tbDetailJenisInformasiRow.Count)
                        {
                            idIn += ",";
                        }
                    }

                    this.Connection.Execute(string.Format("DELETE dbo.TbDetailJenisInformasi WHERE Id Not In ({0}) and IdJenisInformasi = {1}", idIn, this.Row.Id));
                }
                else
                {
                    this.Connection.Execute(string.Format("DELETE dbo.TbDetailJenisInformasi WHERE IdJenisInformasi = {0} ", this.Row.Id));
                }
                #endregion

            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}