
namespace AbidzarFrm.Rukuntangga.Repositories
{
    using AbidzarFrm.Rukuntangga.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TbJenisKegiatanRow;

    public class TbJenisKegiatanRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.DibuatOleh = Authorization.UserId;
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.DieditOleh = Authorization.UserId;
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

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                #region DetailJenisKegiatan
                if (this.Row.tbDetailJenisKegiatanRow.Count > 0)
                {
                    string idIn = "";
                    int i = 0;
                    foreach (TbDetailJenisKegiatanRow detailRow in this.Row.tbDetailJenisKegiatanRow)
                    {
                        detailRow.IdJenisKegiatan = this.Row.Id;
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
                        if (i < this.Row.tbDetailJenisKegiatanRow.Count)
                        {
                            idIn += ",";
                        }
                    }

                    this.Connection.Execute(string.Format("DELETE dbo.TbDetailJenisKegiatan WHERE Id Not In ({0})", idIn));
                }
                else
                {
                    this.Connection.Execute(string.Format("DELETE dbo.TbDetailJenisKegiatan WHERE IdJenisKegiatan = {0}", this.Row.Id));
                }
                #endregion

            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}