
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
    using MyRow = Entities.TbJenisKegiatanRow;

    public class TbJenisKegiatanRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var ud = (UserDefinition)Authorization.UserDefinition;
            request.Entity.DibuatOleh = ud.Ktp.Nik;
            request.Entity.KodeRt = ud.Ktp.KodeRt;
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
            request.IncludeField(MyRow.Fields.tbDetailJenisKegiatanRow);
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {

            string setFolder, source, destination;

            protected override void BeforeSave()
            {
                #region header
                //setFolder = this.Row.KodeRt + "/" + "Kegiatan/" + this.Row.JenisKegiatan;
                //FileChanger.CreateFolder(setFolder);
                #endregion
            }

            protected override void AfterSave()
            {
                #region detail
                if (this.Row.tbDetailJenisKegiatanRow.Count > 0)
                {
                    string idIn = "";
                    int i = 0;

                    foreach (TbDetailJenisKegiatanRow detailRow in this.Row.tbDetailJenisKegiatanRow)
                    {
                        setFolder = this.Row.KodeRt + "/" + "Kegiatan/" + this.Row.JenisKegiatan + "/" + detailRow.NamaKegiatan + "/";
                        FileChanger.CreateFolder(setFolder);
                        detailRow.IdJenisKegiatan = this.Row.Id;
                        detailRow.DibuatOleh = this.Row.DibuatOleh;
                        source = detailRow.NamaFile;

                        if (source != null)
                        {
                            var splt = source.Split('/');
                            destination = setFolder + splt[splt.Length - 1];
                            FileChanger.Move(source, destination);

                            detailRow.NamaFile = destination;
                        }

                        if (detailRow.Dokumentasi != null && detailRow.Dokumentasi != "[]")
                        {
                            string currentPath = "";
                            var resultFile = Newtonsoft.Json.JsonConvert.DeserializeObject<List<FileNameResult>>(detailRow.Dokumentasi);
                            foreach (var item in resultFile)
                            {
                                source = item.Filename;
                                var splt = source.Split('/');
                                destination = setFolder + splt[splt.Length - 1];
                                FileChanger.Move(source, destination);

                                currentPath = splt[splt.Length - 2] + "/";
                                if (splt.Length > 2)
                                {
                                    currentPath = splt[splt.Length - 5] + "/" + splt[splt.Length - 4] + "/" + splt[splt.Length - 3] + "/" + splt[splt.Length - 2] + "/";
                                }
                            }

                            detailRow.Dokumentasi = detailRow.Dokumentasi.Replace(currentPath, setFolder);
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
                        if (i < this.Row.tbDetailJenisKegiatanRow.Count)
                        {
                            idIn += ",";
                        }
                    }

                    this.Connection.Execute(string.Format("DELETE dbo.TbDetailJenisKegiatan WHERE Id Not In ({0}) and IdJenisKegiatan = {1}", idIn, this.Row.Id));
                }
                else
                {
                    this.Connection.Execute(string.Format("DELETE dbo.TbDetailJenisKegiatan WHERE IdJenisKegiatan = {0}", this.Row.Id));
                }
                #endregion
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {

            protected override void OnBeforeDelete()
            {
                List<TbDetailJenisKegiatanRow> detail = Connection.List<TbDetailJenisKegiatanRow>(x => x.SelectTableFields().Where(string.Format("IdJenisKegiatan = {0}", Row.Id)));

                if (detail.Count > 0)
                {
                    foreach (var item in detail)
                    {
                        if (item.NamaFile != null)
                            FileChanger.Delete(item.NamaFile);

                        if (item.Dokumentasi != null)
                        {
                            var resultFile = Newtonsoft.Json.JsonConvert.DeserializeObject<List<FileNameResult>>(item.Dokumentasi);
                            foreach (var doc in resultFile)
                            {
                                FileChanger.Delete(doc.Filename);
                            }
                        }
                    }
                    this.Connection.Execute(string.Format("DELETE dbo.TbDetailJenisKegiatan WHERE IdJenisKegiatan = {0} ", this.Row.Id));
                }
            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}