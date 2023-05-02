import React, { Component } from "react";
import css from './modal.module.css'

class Modal extends Component {
    render() {
        return (
            <div className={css.overlay}>
                <div className={css.modal}>
                    <img src="" alt="" />
                </div>
            </div>
        )
    }
    
};

export default Modal;