import styles from './LoginButton.module.css'

function LoginButton({openPopup}) {
    return (
        <button type={"button"}
                className={styles[`login-popup-button`]}
                onClick={() => openPopup(true)}>
            로그인
        </button>
    );
}


export default LoginButton;