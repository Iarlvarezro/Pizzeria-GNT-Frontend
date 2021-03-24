import {urlImages, api, resolveUrl} from '../api/api'

export class ImagesService {
     static async upload(file){
        const fd = new FormData();
        fd.append('image', file);
        const url = resolveUrl('upload', urlImages);
        const data = await api(url).formData(fd);
        return data;
    }
}