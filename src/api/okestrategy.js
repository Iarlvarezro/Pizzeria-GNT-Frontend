import {json} from './json.js'
export const OKEstrategy ={
    '204': async (res)=> "",
    '201': async (res)=> await json (res),
    '200': async (res)=> await json (res),
    
}
