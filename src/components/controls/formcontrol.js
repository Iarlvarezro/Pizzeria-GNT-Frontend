export class FormControl{
   
    constructor(options={}){
        this._type = options.type || String;
        this._rules =options.rules
        this._value = options.value;
        this._errors = [];
    }
    get isValid(){
        this._errors.length>0;
    }
    get isDirty(){
        return true;
    }
    set value(value){
        this._errors=[];
        if (this._rules){
           for(const [_rule] of this._rules){
                   const {msg,options,rule} = _rule;
                   if(!rule(value,options)){
                       this._errors.push(msg)
                       value=undefined
                   }
           }
        }
        this._value = value;
    }
    get value(){
        return this._value
    }
    
}