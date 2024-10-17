import { randomUUID } from "crypto";
import { Entity } from "../../core/entity";

interface IDeliveryProps {
    userId: string;
    address: string;
    status: string;
    fragile: boolean;
    description: string;
    deliveryManId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Delivery extends Entity<IDeliveryProps>{
    get userId() {
        return this.props.userId
    }



    constructor(props: IDeliveryProps, id?: string) {
        super(props, id);
    }
}