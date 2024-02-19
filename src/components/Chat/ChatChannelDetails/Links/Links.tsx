import React from 'react';
import { MessageInterface } from '../../../../Interfaces/Interfaces';
import Linkify from 'react-linkify';
interface LinkProps {
    messages: MessageInterface[]
}

const Links = ({ messages }: LinkProps) => {
    let links = messages.map(message => message.medias.filter(media => media.type === "link")).flat();
    return (
        <div>
            <p className='font-bold'>Links</p>
            <div>
                {
                    links.map((link,i) => <p className='shadow px-2 py-1 my-3 overflow-x-auto' key={i}>
                        <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                            <a className=' text-link-blue' href={decoratedHref} key={key} target="_blank" rel="noopener noreferrer">
                                {decoratedText}
                            </a>
                        )}>
                            {link.url}
                        </Linkify>
                    </p>)
                }
            </div>

        </div>
    );
};

export default Links;