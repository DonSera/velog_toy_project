import styles from "./LoginPopup.module.css"

function LoginPopup({closePopup}) {
    return (
        <>
            <div className={styles[`popup-background`]}/>
            <div className={styles[`popup-board`]}>
                <button type={"button"}
                        className={styles[`login-button`]}
                        onClick={() => closePopup(false)}>
                    나가기
                </button>
            </div>
        </>
    );
}

export default LoginPopup;