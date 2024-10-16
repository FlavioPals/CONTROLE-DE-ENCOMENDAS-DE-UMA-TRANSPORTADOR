import { randomUUID } from "crypto"
import { Delivery } from "./delivery"

export class User {
    public id: string
    public name: string
    public cpf: string
    public password: string
    public deliveryArriving: Delivery[]
    public deliveryArrived: Delivery[]

    constructor(
        name: string,
        cpf: string,
        password: string,
        deliveryArriving?: Delivery[],
        deliveryArrived?: Delivery[],
        id?: string,
    ) {
        this.id = id ?? randomUUID()
        this.name = name
        this.cpf = cpf
        this.deliveryArriving = deliveryArriving ?? []
        this.deliveryArrived = deliveryArrived ?? []
        this.password = password
    }
}