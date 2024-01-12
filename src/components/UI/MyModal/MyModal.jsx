import React from 'react'
import cl from './MyModal.module.css'

export default function MyModal({ children, visible, setVisible }) {

    const rootClass = [cl.myModal];

    if(visible) {
        rootClass.push(cl.active);
    }

    return (
        <div className={rootClass.join(' ')}>
            <div className={cl.myModalContent}>
                {children}
            </div>
        </div>
    )
}
