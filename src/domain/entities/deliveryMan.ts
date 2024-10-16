import { randomUUID } from "crypto";
import { Delivery } from "./delivery";

export class DeliveryMan {
    public id: string;
    public name: string;
    public email: string;
    public password: string;
    public deliveryArriving: Delivery[];
    public deliveryArrived: Delivery[];
    
    constructor(
        name: string,
        email: string,
        password: string,
        deliveryArriving: Delivery[],
        deliveryArrived: Delivery[],
        id?: string,
    ) {
        this.id = id ?? randomUUID();
        this.name = name;
        this.email = email;
        this.password = password;
        this.deliveryArriving = deliveryArriving;
        this.deliveryArrived = deliveryArrived;
    }
}