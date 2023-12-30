export interface MessageList {
    id:number;
    name:string;
    img:string;
    last_msg_time:Date;
    last_msg:string;
    unread_msg_counter:number;
    received:boolean,
    read:boolean,
};