import {
    BadRequest,
    NotAllowed,
    Forbidden,
    InternalError,
    NotAutorized,
    NotFound
} from './customerrors.js'
import {json} from './json.js'
export const ErrorsEstrategy = {
    '404': async (res) => { throw new NotFound() },
    '401': async (res) => { throw new NotAutorized()},
    '403': async (res) => { throw new Forbidden() },
    '400': async (res) => { 
        const data=await json(res)
        throw new BadRequest(data)
    },
    '405': async (res) => { throw new NotAllowed()},
    '500': async (res) => { 
        const data=await json(res)
        throw new InternalError(data)
    },
}

