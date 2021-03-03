import React, { useState, useEffect } from 'react';
import css from './dropdown.module.css';
import { isEsc, isClick } from '../utils/util';

export function Dropdown(props) {
    if (!props.options) {
        throw new Error('Necesito opciones');
    }
    const [open, setOpen] = useState(false);
    const [model, setModel] = useState(new Set(getInitialModel()));
    const [firstRender, setFirstRender] = useState(true);

    function getInitialModel() {
        return props.options.filter((option) => {
            return option.checked
        }).map((option) => {
            return String(option.value)
        })
    };

    useEffect(() => {
        if (open) {
            onOpen();
            return onClose
        }
    }, [open]);

    useEffect(() => {
        if (props.onChange && !firstRender)  {
            props.onChange([...model])
        }
    }, [model]);

    useEffect(() => {
        setFirstRender(false);
    }, []);

    function onOverlayClick() {
        setOpen(false);
    };

    function onInputClick() {
        setOpen(true);
    };

    function onOpen() {
        document.body.classList.add(css.noScroll);
        document.body.addEventListener('keydown', onBodyKeyDown);
    };

    function onClose() {
        document.body.classList.remove(css.noScroll);
        document.body.removeEventListener('keydown', onBodyKeyDown);
        document.body.removeEventListener('keydown', onSpaceOrEnter);
    };

    function onBodyKeyDown(ev) {
        if (isEsc(ev)) {
            setOpen(false);
        }
    };

    function onSpaceOrEnter(ev) {
        if (isClick(ev)) {
            setOpen(true);
        }
    };

    function onChange(ev) {
        const target = ev.target;
        if (!target.matches("input")) {
            return;
        }
        if (target.checked) {
            model.add(target.value);
        }
        else {
            model.delete(target.value);
        }
        setModel(new Set(model));
    };

    function getValue() {
        return props.options.filter((option) => {
            return model.has(String(option.value));
        }).map((option) => {
            return option.label;
        }).join(', ')
    };

    return (
        <> {/* React fragment para poder renderizar varios elementos*/}
            <div>
                {/*TODO: Navegación por teclado */}
                <input onKeyDown={onSpaceOrEnter} onClick={onInputClick} className={css.input} value={getValue()} readOnly tabIndex="1"/>
                {open && <div className={css.dropdown}>
                    <ul onChange={onChange}>
                        {props.options.map((option) => {
                            return (
                                <li  key={option.value}>
                                    <label> <input type="checkbox" defaultChecked={model.has(String(option.value))} value={option.value} /> {option.label}</label>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>}
            </div>
            {open && <div className={css.overlay} onClick={onOverlayClick}></div>}
        </>
    )
}

