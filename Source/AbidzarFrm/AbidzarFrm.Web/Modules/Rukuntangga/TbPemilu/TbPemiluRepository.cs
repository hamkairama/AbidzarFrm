
namespace AbidzarFrm.Rukuntangga.Repositories
{
    using AbidzarFrm.Modules.Common.Helpers;
    using AbidzarFrm.Rukuntangga.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TbPemiluRow;

    public class TbPemiluRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
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
                #region DetailJenisInformasi
                if (this.Row.tbDetailPemiluRow.Count > 0)
                {
                    string idIn = "";
                    int i = 0;
                    string setFolderDetail = "";
                    setFolderDetail = "Questioner/" + this.Row.KodeRt + "/" + this.Row.Judul + "/";

                    foreach (TbDetailPemiluRow detailRow in this.Row.tbDetailPemiluRow)
                    {
                        detailRow.IdPemilu = this.Row.Id;
                        detailRow.DibuatOleh = this.Row.DibuatOleh;
                        string source = detailRow.FileName;

                        if (source != null)
                        {
                            var fileName = source.Split('/');

                            string destination = setFolderDetail + fileName[fileName.Length - 1];
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
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}