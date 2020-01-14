
namespace AbidzarFrm.Rukuntangga.Repositories
{
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Rukuntangga.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.TbPemiluRow;

    public class TbPemiluRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            UserDefinition ud = (UserDefinition)Authorization.UserDefinition;
            request.Entity.DibuatOleh = ud.Ktp.Nik;
            request.Entity.KodeRt = ud.Ktp.KodeRt;
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            UserDefinition ud = (UserDefinition)Authorization.UserDefinition;
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

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            string setFolder, source, destination;

            protected override void BeforeSave()
            {
                #region header
                setFolder = this.Row.KodeRt + "/" + "Questioner/" + this.Row.Judul + "/";
                FileChanger.CreateFolder(setFolder);
                if (this.Row.FileName != null)
                {
                    source = Row.FileName;
                    var splt = source.Split('/');
                    destination = setFolder + splt[splt.Length - 1];

                    FileChanger.Move(source, destination);

                    this.Row.FileName = destination;
                }
                #endregion
            }

            protected override void AfterSave()
            {
                #region detail
                setFolder = this.Row.KodeRt + "/" + "Questioner/" + this.Row.Judul + "/";
                if (this.Row.tbDetailPemiluRow.Count > 0)
                {
                    string idIn = "";
                    int i = 0;

                    foreach (TbDetailPemiluRow detailRow in this.Row.tbDetailPemiluRow)
                    {
                        detailRow.IdPemilu = this.Row.Id;
                        detailRow.DibuatOleh = this.Row.DibuatOleh;
                        source = detailRow.FileName;

                        if (source != null)
                        {
                            var splt = source.Split('/');
                            destination = setFolder + splt[splt.Length - 1];
                            FileChanger.Move(source, destination);

                            detailRow.FileName = destination;
                        }

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
                        if (i < this.Row.tbDetailPemiluRow.Count)
                        {
                            idIn += ",";
                        }
                    }

                    this.Connection.Execute(string.Format("DELETE dbo.TbDetailPemilu WHERE Id Not In ({0}) and IdPemilu = {1}", idIn, this.Row.Id));
                }
                else
                {
                    this.Connection.Execute(string.Format("DELETE dbo.TbDetailPemilu WHERE IdPemilu = {0} ", this.Row.Id));
                }
                #endregion

            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void OnBeforeDelete()
            {
                List<TbDetailPemiluRow> detail = Connection.List<TbDetailPemiluRow>(x => x.SelectTableFields().Where(string.Format("IdPemilu = {0}", Row.Id)));
                if (detail.Count > 0)
                {
                    foreach (var item in detail)
                    {
                        this.Connection.Execute(string.Format("DELETE dbo.TbPollingPemilu WHERE IdDetailPemilu = {0} ", item.Id));
                        if (item.FileName != null)
                            FileChanger.Delete(item.FileName);
                    }
                    this.Connection.Execute(string.Format("DELETE dbo.TbDetailPemilu WHERE IdPemilu = {0} ", this.Row.Id));
                }

                if (Row.FileName != null)
                    FileChanger.Delete(Row.FileName);
            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}