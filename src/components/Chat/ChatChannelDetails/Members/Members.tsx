import React, { useState } from 'react';
import { ChatIndexList } from '../../../../Interfaces/Interfaces';
import userImage from '../../../../assests/user/not-available-user.png'
import ChatSearch from '../../ChatSearch/ChatSearch';
import Lightbox from 'react-image-lightbox';

interface MembersProps {
    channel: ChatIndexList
}

const Members = ({ channel }: MembersProps) => {
    // console.log("channel?.participants", channel?.participants);
    const [isOpen, setIsOpen] = useState(false);
    const [photoId, setPhotoId] = useState<string | null | undefined>();

    const openLightbox = (_id: string | null | undefined) => {
        if (_id !== null && _id !== undefined) {
            setPhotoId(_id);
            setIsOpen(true);
        }
    };

    const handleLightboxClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
    };
    return (
        <div>
            <p className='font-bold'>Members ({channel?.participants?.length})</p>
            <ChatSearch placeholder='search' />
            <div className='mt-5 space-y-3'>
                {
                    channel?.participants?.map(user => <div className='flex justify-between items-end text-sm text-end shadow px-2 py-1 rounded-md'>
                        <div className='flex items-start gap-5'>
                            <div className='min-w-max'>
                                <img onClick={() => openLightbox(user._id)} className='w-10 h-10 rounded-full object-cover' src={user?.img ? user?.img : userImage} alt='' />
                            </div>
                            <p>{user?.name}</p>
                        </div>
                        {!user?.admin && <p>{user?.email}</p>}
                        {user?.admin && <div>
                            <p>{user?.admin ? "Admin" : ""}</p>
                            <p>{user?.email}</p>
                        </div>
                        }
                    </div>)
                }
            </div>
            {isOpen && photoId !== null && photoId !== undefined && (
                <div className="ChatChannelDetails" onClick={handleLightboxClick}>
                    <Lightbox
                        mainSrc={(channel?.participants?.find((image) => image?._id === photoId)?.img) ?? userImage}
                        onCloseRequest={() => setIsOpen(false)}
                    />
                </div>
            )}
        </div>
    );
};

export default Members;