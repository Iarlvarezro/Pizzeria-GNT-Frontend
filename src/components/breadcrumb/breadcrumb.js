import React from 'react';
import css from './breadcrumb.module.css'

export function BreadCrumb({items}) {
    return (
        <div>
            <ul className={css.breadcrumb}>
                {items.map(({text, url}) => {
                    if (url) {
                        return (
                            <li key={text}><a href={url}>{text}</a></li>
                        )
                    }
                    return (
                        <li key={text}>{text}</li>
                    )
                })}
            </ul>
        </div>
    )
}