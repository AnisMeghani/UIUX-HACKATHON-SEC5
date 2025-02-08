// import { Layout } from "lucide-react";
// import { title } from "process";
import { defineType } from "sanity";

export const Order = defineType( {
    name : "order",
    type : "document",
    title : "Order",
    fields : [
        {
            name : "firstName",
            type : "string",
            title : "First Name"
        },
        {
            name : "lastName",
            type : "string",
            title : "Last Name"
        },
        {
            name : "email",
            type : "string",
            title : "Email"
        },
        {
            name : "phone",
            type : "string",
            title : "Phone"
        },
        {
            name : "city",
            type : "string",
            title : "City"
        },
        {
            name : "zipCode",
            type : "string",
            title : "Zip Code"
        },
        {
            name : "address",
            type : "string",
            title : "Address"
        },
        {
            name : "cartItems",
            type : "array",
            title : "Cart Items",
            of : [
                {
                    type : "reference",
                    to : {
                        type : "products"
                    }
                }
            ]
        },
        {
            name : "total",
            type : "number",
            title : "Total"
        },
        {
            name : "status",
            type : "string",
            title : "Order Status",
            options : {
                list : [
                {
                    value : "pending",
                    title : "Pending"
                },
                {
                    value : "processing",
                    title : "Processing"
                },
                {
                    value : "shipped",
                    title : "Shipped"
                },
                {
                    value : "delivered",
                    title : "Delivered"
                },
                {
                    value : "cancelled",
                    title : "Cancelled"
                },
            ],
                    layout : "radio"
        },
                    initialValue : "pending"  //default value
        }
    ]
}
)