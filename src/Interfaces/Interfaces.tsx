export interface ChatIndexList {
    _id: string;
    msg_id: string;
    msg_delete_status: number;
    name: string;
    channel: string;
    img: string;
    background: string;
    gradient: number;
    personalized_background: string;
    personalized_gradient: number;
    timestamp: string;
    last_msg?: string;
    received: boolean;
    read: boolean;
    msg_type: string;
    chat_index_status: string;
    admin?: string
    group_type?: string;
    group_permissions:{
        approve_new_member:boolean,
        add_other_member:boolean,
        send_message:boolean,
        edit_group_setting:boolean
    };
    // created_at?: string | null;
    participant_name:string[],
    participants?: {
        user_id: string;
        counter: number;
        _id: string;
        name: string;
        email: string;
        img: string;
        admin:boolean;
        joined_at:string
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
    // timestamp: number;
    msg_delete_status: number;
    // msg_id?: string;
    last_msg?: string;
    received: boolean;
    read: boolean;
    msg_type: string;
    chat_index_status: string;
    admin?: string;
    group_type: string;
    group_permissions:{
        approve_new_member:boolean,
        add_other_member:boolean,
        send_message:boolean,
        edit_group_setting:boolean
    };
    // created_at?: number | null;
    participant_name:string[],
    participants: {
        user_id: string;
        counter: number;
        admin:boolean;
        // joined_at:string
    }[]
};

export interface CallIndexList {
    _id: string;
    name: string;
    email: string;
    img: string;
    last_call_time?: string;
    call_type: string;
    missed_call_counter?: number | undefined | null;
    talktime?: number;
};

interface MessageMedia {
    type: string
    file_name:string
    url:string
}
interface MessageReceivers {
    _id: string
    email: string
    read_at:string
    delivered_at:string
    reaction:string
}

interface MsgSenderInfo {
    _id:string
    email:string;
    name:string;
    country:string;
    img:string
}


export interface MessageInterface {
    _id: string;
    channel: string;
    message: string;
    msg_type: string;
    updatedAt: string;
    createdAt: string;
    sender: {_id:string,email:string};
    senderInfo?: MsgSenderInfo;
    is_message_deleted:number;
    medias:MessageMedia[];
    receivers:MessageReceivers[];
}


export interface StarredMessageIndex {
    _id: string;
    content: string;
    email: string;
    type: string;
    timestamp: string;
    starredUser: string;
    chatIndexName: string;
    chat_index_status: string;
}
export interface SettingMenu {
    _id: string;
    name: string;
    show: boolean;
    icon: React.ElementType;
    func: () => void
}


export interface UsersOnCommunicator {
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

