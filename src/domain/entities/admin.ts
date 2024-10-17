import { Entity } from "../../core/entity"

interface IAdminProps {
    name: string
    email: string
    password: string
    createdAt?: Date
}

export class Admin extends Entity<IAdminProps> {
    get name() {
        return this.props.name
    }
    get email() {
        return this.props.email
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

    set email(email: string) {
        if (!email) {
            throw new Error('Email is required')
        }
        if (!email.includes('@')) {
            throw new Error('Invalid email')
        }
        this.props.email = email
    }

    set password(password: string) {
        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long')
        }
        this.props.password = password
    }

   

    set createdAt(createdAt: Date) {
        this.props.createdAt = createdAt
    }

    constructor(props: IAdminProps, id?: string) {
        super(props, id);
        this.name = props.name
        this.createdAt = props.createdAt ?? new Date()
        this.password = props.password
        this.email = props.email
    }
}
