import React from 'react'
export function useForm(frm) {
  
    const controls = new Map();
    const [form, setForm] = React.useState(null);
    const handlerSubmit = (cb) => {
        return (ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            cb(frm.data)
        }
    }
    const handlerInput = (ev) => {
        ev.stopPropagation();
        ev.preventDefault()
        if (controls.has(ev.target)) {
            const { value,checked } = ev.target;
            const formControl = controls.get(ev.target)
            if (formControl) {
                formControl.value = checked ? checked: value;
            }
        }

    }

    React.useEffect(() => {
        if (form) {
            form.addEventListener('input', handlerInput)
        }
        return () => {
            form && form.removeEventListener('input', handlerInput)
            controls.clear();
        }
    },[form])

    const register = (formControl) => {
        return (control) => {
            if (control && control.form) {
                controls.set(control, formControl)
                const { value,checked } = control;
                formControl.value = checked ? checked: value;
                if (!form) {
                    setForm(control.form)
                }
            }
        }
    }

    return {
        register: React.useCallback(register,[form]),
        handlerSubmit: React.useCallback(handlerSubmit,[frm.data])
    }
}