export interface ChatIndexList {
    _id:number;
    name:string;
    channel:string;
    email:string;
    img:string;
    timestamp:Number;
    last_msg?:string;
    counter:number | undefined | null;
    received:boolean;
    read:boolean;
    msg_type:string;
    chat_index_status:string;
    admin?:string
    group_type?:string
    created_at?:Date | null;
    participants?:{
        user_id: string;
        counter: number;
        _id: string;
        name: string;
        email: string;
        img: string;
      }[]
};

export interface CallIndexList {
    _id:number;
    name:string;
    email:string;
    img:string;
    last_call_time?:Date;
    call_type:string;
    missed_call_counter?:number | undefined | null;
    talktime?:number;
};


export interface Message{
    _id:number;
    content:string;
    type:string;
    timestamp:Date;
    sender:number;
    receiver:number
    received:boolean,
    read:boolean,
}


export interface StarredMessageIndex{
    _id:number;
    content:string;
    email:string;
    type:string;
    timestamp:Date;
    starredUser:string;
    chatIndexName:string;
    chat_index_status:string;
}
export interface SettingMenu{
    _id:number;
    name:string;
    icon:React.ElementType;
    func:()=>void
}


export interface UsersOnWhatsApp {
    _id:number;
    name:string;
    email:string;
    img:string;
    status?:string;
};


export interface Registration {
    _id:number
    name: string
    email: string
    img?: string
    status: string
    country: string
    password: string
    confirmedPassword?: string
};

export interface RegistrationResponse {
    _id:number
    status:number;
    success:boolean;
    error?:string;
    data:Registration
}