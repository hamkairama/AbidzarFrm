using Serenity.Services;

namespace AbidzarFrm.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}