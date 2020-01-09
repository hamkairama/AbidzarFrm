
namespace AbidzarFrm.Rukuntangga.Repositories
{
    using AbidzarFrm.Rukuntangga.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.TbTransactionFlowRow;

    public class TbTransactionFlowRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow> {

            protected override void BeforeSave()
            {
                base.BeforeSave();
                List<TbTransactionFlowDetailRow> newListTransactionFlowDetailRow = new List<TbTransactionFlowDetailRow>();

                if (this.Row.tbTransactionFlowDetailRow != null)
                {
                    foreach (var item in this.Row.tbTransactionFlowDetailRow)
                    {
                        if (item.IsSendEmail == 0)
                        {
                            item.SendEmailType = "";
                            item.SendEmailTo = "";
                            item.CcCreator = 0;
                            item.CcRequestor = 0;
                        }
                        newListTransactionFlowDetailRow.Add(item);
                    }
                }

                this.Row.tbTransactionFlowDetailRow = newListTransactionFlowDetailRow;
            }

            protected override void AfterSave()
            {
                //base.AfterSave();
                if (this.Row.tbTransactionFlowDetailRow != null)
                {
                    foreach (TbTransactionFlowDetailRow flowDetailRow in this.Row.tbTransactionFlowDetailRow)
                    {
                        flowDetailRow.TransactionFlowId = this.Row.Id;
                        flowDetailRow.DibuatOleh = this.Row.DibuatOleh;
                        if (flowDetailRow.Id != null)
                        {
                            this.Connection.UpdateById(flowDetailRow);
                        }
                        else
                        {
                            this.Connection.Insert(flowDetailRow);
                        }
                    }
                }
                else
                {
                    this.Connection.Execute(string.Format("DELETE dbo.TbTransactionFlowDetail WHERE TransactionFlowId = {0}", this.Row.Id));
                }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}