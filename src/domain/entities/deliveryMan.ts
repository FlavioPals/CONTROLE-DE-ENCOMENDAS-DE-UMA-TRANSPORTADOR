import { randomUUID } from "crypto";
import { Delivery } from "./delivery";
import { Entity } from "../../core/entity";

interface IDeliveryManProps {
    name: string;
    email: string;
    password: string;
    deliveryArriving: Delivery[];
    deliveryArrived: Delivery[];
}

export class DeliveryMan extends Entity< IDeliveryManProps>{
    constructor(props: IDeliveryManProps,id?: string) {
        super(props, id);
    }
}