import React from 'react';


export function Image(props) {
    const {image, ...restProps} = props;
    const {url} = image;
    const urlwebp = url.replace(/\.[a-z0-9]+$/i,'.webp');
    return (
        <picture>
            <source type="image/webp" srcSet={urlwebp} />
            <source type="image/jpeg" srcSet={url} />
            <img src={url} {...restProps} />
        </picture>
    )
}