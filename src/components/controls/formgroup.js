export class FormGroup {

    constructor(controls) {
        Object.entries(controls).forEach(ctrl => {
            this[ctrl[0]] = ctrl[1]
        })

    }
    get isValid() {
        return true;
    }
    get isDirty() {
        return true;
    }
    get data() {
        let _data = {};
        for (let [name, ctrl] of Object.entries(this)) {
            let { value, data } = ctrl;
            _data[name] = data ? data : value;
        }
        return _data;
    }
}