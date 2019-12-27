
namespace AbidzarFrm.Rukuntangga.Repositories
{
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Rukuntangga.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TbRwRow;

    public class TbRwRepository
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
                //#region Biodata
                //if (this.Row.tbBiodataRow.Count > 0)
                //{
                //    string idIn = "";
                //    int i = 0;
                //    foreach (TbBiodataRow biodata in this.Row.tbBiodataRow)
                //    {
                //        biodata.Nik = this.Row.Nik;
                //        biodata.DibuatOleh = this.Row.DibuatOleh;
                //        if (biodata.Id != null)
                //        {
                //            this.Connection.UpdateById(biodata);
                //        }
                //        else
                //        {
                //            int insertId = (int)this.Connection.InsertAndGetID(biodata);
                //            //set accountRow.Id
                //            biodata.Id = (int)insertId;
                //        }

                //        i++;
                //        idIn += biodata.Id.ToString();
                //        if (i < this.Row.tbBiodataRow.Count)
                //        {
                //            idIn += ",";
                //        }
                //    }

                //    this.Connection.Execute(string.Format("DELETE dbo.TbBiodata WHERE Id Not In ({0})", idIn));
                //}
                //else
                //{
                //    this.Connection.Execute(string.Format("DELETE dbo.TbBiodata WHERE Nik = '{0}'", this.Row.Nik));
                //}
                //#endregion
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}