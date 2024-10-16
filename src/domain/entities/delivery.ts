import { randomUUID } from "crypto";

export class Delivery {
    public id: string;
    public userId: string;
    public address: string;
    public status: string;
    public fragile: boolean;
    public description: string;
    public deliveryManId: string;

    constructor(
        userId: string,
        address: string,
        status: string,
        fragile: boolean,
        description: string,
        deliveryManId: string,
        id?: string,
    ) {
        this.id = id ?? randomUUID();
        this.userId = userId;
        this.address = address;
        this.status = status;
        this.fragile = fragile;
        this.description = description;
        this.deliveryManId = deliveryManId;
    }
}