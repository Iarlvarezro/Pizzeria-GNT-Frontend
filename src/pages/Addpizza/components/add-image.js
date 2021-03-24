import React from 'react';
import {apiCall} from '../../../api/api-call';
import {ImagesService} from '../../../services/images-service';
import css from './add-image.module.css';

export function AddImage(props) {
    const [isFocused, setIsFocused] = React.useState(false);
    const [preview, setPreview] = React.useState();
    const labelClassName = !isFocused ? css.label: `${css.label} ${css.labelFocused}`;
    async function uploadImage(file){
        const data = await apiCall(ImagesService.upload, file);
        props.register.value = data.id;
    }
    function onChange(ev){
        const file = ev.target.files[0];
        setPreview(URL.createObjectURL(file));
        uploadImage(file);
    }
    React.useEffect(() => {
        return () => { URL.revokeObjectURL(preview) }
    }, [preview]);
    return (
        <section className={css.section}>
            <label htmlFor="file-upload" className={labelClassName}>
                <input id="file-upload" onChange={onChange} onFocus={() => setIsFocused(true)} onBlur={()=>setIsFocused(false)} type="file" className="visually-hidden"/>
                <span>Subir imagen</span>
            </label>
            {preview && <img className={css.img} src={preview}/>}
        </section>
    )
}