export class ErrorBase extends Error{
    constructor (code, message){
        super(message)
        this.code=code
    }
}

export class NotFound extends ErrorBase{
    constructor (){
        super(404,'NotFound')
        this.name="NotFound"
        
    }

    
}

export class BadRequest extends ErrorBase{
    constructor (data){
        super(400,'BadRequest')
        this.name="BadRequest"
        this.data=data
        
    }

    
}

export class InternalError extends ErrorBase{
    constructor (data){
        super(500,'InternalError')
        this.name="InternalError"
        this.data=data
        
    }

    
}

export class NotAllowed extends ErrorBase{
    constructor (){
        super(405,'NotAllowed')
        this.name="NotAllowed"
        
    }

    
}

export class NotAutorized extends ErrorBase{
    constructor (){
        super(401,'NotAutorized')
        this.name="NotAutorized"
        
    }

    
}

export class Forbidden extends ErrorBase{
    constructor (){
        super(403,'Forbidden')
        this.name="Forbidden"
        
    }

    
}