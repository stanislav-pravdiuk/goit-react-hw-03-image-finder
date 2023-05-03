import css from './button.module.css'

const Button = ({ children, onClick, ...allyProps }) => (
    <button
        type="button"
        className={css.button}
        onClick={onClick} {...allyProps}
    >
        {children}
    </button>
)

export default Button;