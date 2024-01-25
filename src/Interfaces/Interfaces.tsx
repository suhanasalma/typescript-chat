export interface ChatIndexList {
    _id: string;
    name: string;
    channel: string;
    img: string;
    background: Number;
    timestamp: Number;
    last_msg?: string;
    received: boolean;
    read: boolean;
    msg_type: string;
    chat_index_status: string;
    admin?: string
    group_type?: string
    created_at?: Date | null;
    participants?: {
        user_id: string;
        counter: number;
        _id: string;
        name: string;
        email: string;
        img: string;
    }[]
};

export interface ChatChannelResponse {
    success:boolean;
    status:number;
    message?:unknown;
    data:ChatIndexList
}
export interface ChatChannelBody {
    name?: string;
    channel: string;
    img?: string;
    timestamp: Number;
    last_msg?: string;
    received: boolean;
    read: boolean;
    msg_type: string;
    chat_index_status: string;
    admin?: string;
    group_type: string
    created_at?: Date | null;
    participants: {
        user_id: string;
        counter: number;
    }[]
};

export interface CallIndexList {
    _id: string;
    name: string;
    email: string;
    img: string;
    last_call_time?: Date;
    call_type: string;
    missed_call_counter?: number | undefined | null;
    talktime?: number;
};


export interface Message {
    _id: string;
    content: string;
    type: string;
    timestamp: Date;
    sender: string;
    receiver: number
    received: boolean,
    read: boolean,
    img?:string
}


export interface StarredMessageIndex {
    _id: string;
    content: string;
    email: string;
    type: string;
    timestamp: Date;
    starredUser: string;
    chatIndexName: string;
    chat_index_status: string;
}
export interface SettingMenu {
    _id: string;
    name: string;
    icon: React.ElementType;
    func: () => void
}


export interface UsersOnWhatsApp {
    _id: string;
    name: string;
    email: string;
    img: string;
    status?: string;
};


export interface Registration {
    _id: string
    name: string
    email: string
    img?: string
    status: string
    country: string
    password: string
    confirmedPassword?: string
};

export interface RegistrationResponse {
    _id: string
    status: number;
    success: boolean;
    error?: string;
    data: {user:Registration}
}
export interface GroupMemberInterface {
    email: string
    img: string
    name: string
    status: string
    user_id : string
    _id: string
}

