export interface ChatIndexList {
    id:number;
    name:string;
    img:string;
    last_msg_time:Date;
    last_msg:string;
    unread_msg_counter:number;
    received:boolean,
    read:boolean,
    msg_type:string
};

export interface CallIndexList {
    id:number;
    name:string;
    img:string;
    last_call_time:Date;
    call_type:string;
    missed_call_counter:number;
};


export interface Message{
    id:number;
    content:string;
    type:string;
    timestamp:Date;
    sender:number;
    receiver:number
    received:boolean,
    read:boolean,
}