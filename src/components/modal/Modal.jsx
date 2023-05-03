import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from './modal.module.css'

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        return (
            createPortal(
                <div
                    className={css.overlay}
                    onClick={this.handleBackdropClick}>
                    <div className={css.modal}>
                        {this.props.children}
                    </div>
                </div>,
                modalRoot
            )
        )
    }
    
};

export default Modal;
