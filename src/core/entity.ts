import { randomUUID } from "crypto";

export class Entity<Props> {
    protected props: Props;
    
    constructor(props:any,){
        this.props = props
    }

}