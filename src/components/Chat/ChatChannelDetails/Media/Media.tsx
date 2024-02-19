import React, { useState } from 'react';
import { MessageInterface } from '../../../../Interfaces/Interfaces';
import Lightbox from 'react-image-lightbox';

interface MediaProps {
    messages: MessageInterface[]
}

const Media = ({ messages }: MediaProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index: number) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const handleLightboxClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };
    // console.log("messages", messages);
    let medias = messages.map(message => message.medias.filter(media => media.type === "medias")).flat();
    console.log("medias", medias);
    return (
        <div>
            <p className='font-bold'>Media</p>
            <div style={{ display: "flex", gap: "20px", margin: "20px 0", flexWrap: "wrap" }}>
                {medias?.map((message, i) => (
                    <div
                        style={{ width: "80px", height: "100px", borderRadius: "10%" }}
                        key={i} onClick={() => openLightbox(i)}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "10%",
                                overflow: "hidden",
                            }}
                            src={message?.url}
                            alt=""
                        />
                    </div>
                ))}
            </div>
            {isOpen && (
                <div className="openDetailsPage" onClick={handleLightboxClick}>
                    <Lightbox
                        mainSrc={medias[photoIndex].url}
                        nextSrc={medias[(photoIndex + 1) % medias.length].url}
                        prevSrc={medias[(photoIndex + medias.length - 1) % medias.length].url}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() => setPhotoIndex((photoIndex + medias.length - 1) % medias.length)}
                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % medias.length)}
                    />
                </div>
            )}
        </div>
    );
};

export default Media;