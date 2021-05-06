import isLength from 'validator/lib/isLength'
export const VALIDATORS ={
    REQUIRED:[
        {msg:'el campo es requerido',rule:isLength,options:{min:1}}
    ],
    PASSWORD:[
        {msg:'el campo es requerido',rule:isLength,options:{min:1}},
        {msg:'la constraseña tiene que tener como minimo 6 caracteres',rule:isLength,options:{min:6}}
    ],
}