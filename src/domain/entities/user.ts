import { Delivery } from "./delivery"
import { Entity } from "../../core/entity"
import { isValidCPF } from "../../core/isValidCPF"

interface IUserProps {
    name: string
    cpf: string
    password: string
    deliveryArriving?: Delivery[]
    deliveryArrived?: Delivery[]
    createdAt?: Date
}

export class User extends Entity<IUserProps> {
    get name() {
        return this.props.name
    }

    get cpf() {
        return this.props.cpf
    }

    get deliveryArriving(): Delivery[] | undefined {
        return this.props.deliveryArriving
    }

    get deliveryArrived(): Delivery[] | undefined {
        return this.props.deliveryArrived
    }

    get password() {
        return this.props.password
    }
    get createdAt(): Date | undefined {
        return this.props.createdAt
    }

    set name(name: string) {
        if (name.length < 3) {
            throw new Error('Name must be at least 3 characters long')
        }
        this.props.name = name
    }

    set cpf(cpf: string) {
        if (isValidCPF(cpf)) {
            this.props.cpf = cpf
        }else {
            throw new Error('Invalid CPF')
        }
    }

    set password(password: string) {
        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long')
        }
        this.props.password = password
    }

    set deliveryArriving(deliveryArriving: Delivery[]) {
        this.props.deliveryArriving = deliveryArriving
    }
    set deliveryArrived(deliveryArrived: Delivery[]) {
        this.props.deliveryArrived = deliveryArrived
    }

    set createdAt(createdAt: Date) {
        this.props.createdAt = createdAt
    }

    constructor(props: IUserProps, id?: string) {
        super(props, id);
        this.name = props.name
        this.deliveryArriving = props.deliveryArrived ?? []
        this.deliveryArrived = props.deliveryArrived ?? []
        this.createdAt = props.createdAt ?? new Date()
        this.cpf = props.cpf
        this.password = props.password
        this.deliveryArrived
    }
}
