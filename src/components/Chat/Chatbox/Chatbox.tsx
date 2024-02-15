import React, { useEffect, useRef, useState } from "react";
import background from "../../../assests/background/2.jpg";
import { MessageInterface } from "../../../Interfaces/Interfaces";
import { useParams } from "react-router-dom";
import { useGetChatIndexDetailsByIdQuery } from "../../../StateManagement/services/chatApi";
import Message from "./Message";
import DeleteMessage from "../DeleteMessage/DeleteMessage";
import Lightbox from 'react-image-lightbox';
interface Messages {
    messages: MessageInterface[];
}

const Chatbox = ({ messages }: Messages) => {
    const { id } = useParams<{ id?: string }>();
    const { data } = useGetChatIndexDetailsByIdQuery({ id });
    let backgroundImg = data?.background ? data?.background : background;
    const [messageToDelete, setMessageToDelete] = useState<MessageInterface | null>(null);
    const [openDeleteModal, setOpenModal] = useState(false);
    const [openEmojiMessageId, setOpenEmojiMessageId] = useState<string | null>(null);
    const endOfTheMsg = useRef<HTMLParagraphElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [photoId, setPhotoId] = useState<string | null | undefined>();

    const toggleEmojiPicker = (messageId: string | null) => {
        // setOpenEmojiMessageId(openEmojiMessageId === messageId ? null : messageId);
        setOpenEmojiMessageId((prevId) => (prevId === messageId ? null : messageId));
    };


    const showDeleteModal = (msg: MessageInterface) => {
        setMessageToDelete(msg)
        setOpenModal(true)
    };

    const closeDeleteModal = () => {
        setMessageToDelete(null)
        setOpenModal(false)
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            const isClickInsideDeleteIcon = event.target.closest(".deleMsgIcon");
            if (!isClickInsideDeleteIcon) {
                closeDeleteModal();
            }
        };

        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // Scroll to the end of the message list when messages update
        if (endOfTheMsg.current) {
            endOfTheMsg.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);


    const openLightbox = (_id: string | null | undefined) => {
        if (_id !== null && _id !== undefined) {
            setPhotoId(_id);
            setIsOpen(true);
        }
    };

    useEffect(() => {
        const endOfTheMsg = document.getElementById('endOfTheMsg');
        if (endOfTheMsg) {
            endOfTheMsg.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }
    }, [messages]);

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${data?.gradient?data?.gradient:0}), rgba(0, 0, 0,${data?.gradient?data?.gradient:0})), url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
            className="flex-grow relative overflow-auto  "
        >
            <div className="px-4 text-soft-black">
                <div className={`flex flex-col items-end justify-end h-full pb-14 `}>
                    {messages?.map((message, index) => (
                        <Message openLightbox={openLightbox} setOpenEmojiMessageId={setOpenEmojiMessageId} toggleEmojiPicker={toggleEmojiPicker} isOpenEmojiPicker={openEmojiMessageId === message._id} showDeleteModal={showDeleteModal} message={message} />
                    ))}
                    {/* <div ref={endOfTheMsg} /> */}
                    {/* <div id="endOfTheMsg"></div> */}
                </div>
                <div id="endOfTheMsg"></div>
                
            </div>
            {openDeleteModal && <DeleteMessage closeDeleteModal={closeDeleteModal} />}
            {isOpen && photoId !== null && photoId !== undefined && (
                <div className="openDetailsPage">
                    <Lightbox
                        mainSrc={(messages?.find((image) => image?._id === photoId)?.img) ?? ''}
                        onCloseRequest={() => setIsOpen(false)}
                    />
                </div>
            )}
        </div>
    );
};

export default Chatbox;
