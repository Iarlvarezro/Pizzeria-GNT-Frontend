import React from 'react';
import {CloudinaryService} from '../../services/cloudinary-service'
import css from './image.module.css'

export function Image({public_id, small, big, width, height, className, ...rest}){
    const ar = (height / width) * 100;
    const images = {
        webpSmall: CloudinaryService.url(public_id, 'webp', small),
        webpMedium: CloudinaryService.url(public_id, 'webp', big),
        jpegSmall: CloudinaryService.url(public_id, 'jpg', small),
        jpegMedium: CloudinaryService.url(public_id, 'jpg', big),
    };
    const imageClass = className && `${css.image} ${className}` || css.image
    return (
	<div className={css.container} style={{'paddingTop':`${ar}%`}}>
        <picture>
            <source media="(max-width: 960px)" type="image/webp" srcSet={images.webpSmall}></source>
            <source type="image/webp" srcSet={images.webpMedium}></source>
            <source media="(max-width: 960px)" type="image/jpeg" srcSet={images.jpegSmall}></source>
            <source type="image/jpeg" srcSet={images.jpegMedium}></source>
            <img src={images.jpegMedium} width={width} height={height} className={imageClass} {...rest}></img>
        </picture>
	</div>
    )
}