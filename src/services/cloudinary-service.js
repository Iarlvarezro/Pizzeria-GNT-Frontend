import cloudinary from 'cloudinary-core/cloudinary-core-shrinkwrap.js';
const cl = new cloudinary.Cloudinary({cloud_name: process.env.CLOUD_NAME});

export class CloudinaryService {
    static url(publicId, ext, width, crop = 'scale') {
       return cl.url(`${publicId}.${ext}`, {width, crop, secure: false});
    }
}
