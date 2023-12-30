export interface ChatIndexList {
    id:number;
    name:string;
    img:string;
    last_msg_time:Date;
    last_msg:string;
    unread_msg_counter:number;
    received:boolean,
    read:boolean,
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