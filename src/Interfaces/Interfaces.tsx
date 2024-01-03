export interface ChatIndexList {
    id:number;
    name:string;
    img:string;
    last_msg_time?:Date;
    last_msg?:string;
    unread_msg_counter?:number | undefined | null;
    received:boolean;
    read:boolean;
    msg_type:string;
    msg_status:string;
};

export interface CallIndexList {
    id:number;
    name:string;
    img:string;
    last_call_time?:Date;
    call_type:string;
    missed_call_counter?:number | undefined | null;
    talktime?:number;
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


export interface StarredMessageIndex{
    id:number;
    content:string;
    type:string;
    timestamp:Date;
    starredUser:string;
    chatIndexName:string;
    msg_status:string;
}
export interface SettingMenu{
    id:number;
    name:string;
    icon:React.ElementType;
    func:()=>void
}


export interface UsersOnWhatsApp {
    id:number;
    name:string;
    img:string;
    status?:string;
};