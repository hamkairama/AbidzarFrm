namespace AbidzarFrm.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'AbidzarFrm.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

