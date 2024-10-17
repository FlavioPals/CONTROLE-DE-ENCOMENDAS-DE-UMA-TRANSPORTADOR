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

    get address() {
        return this.props.address
    }

    get status() {
        return this.props.status
    }

    get fragile() {
        return this.props.fragile        
    }

    get description() {
        return this.props.description
    }

    get deliveryManId() {
        return this.props.deliveryManId
    }

    get createdAt() {
        return this.props.createdAt
    }

    get updatedAt() {
        return this.props.updatedAt
    }

    set userId(userId: string) {
        this.props.userId = userId
    }

    set adress(address: string) {
        this.props.address = address
    }

    set status(status: string) {
        this.props.status = status
    }   

    set fragile(fragile: boolean) {
        this.props.fragile = fragile
    }

    set description(description: string) {
        this.props.description = description
    }

    set deliveryManId(deliveryManId: string) {
        this.props.deliveryManId = deliveryManId
    }
    



    constructor(props: IDeliveryProps, id?: string) {
        super(props, id);
    }
}