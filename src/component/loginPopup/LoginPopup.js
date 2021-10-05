import styles from "./LoginPopup.module.css"
import {useState} from "react";
import login from "../../lib/login";

function LoginPopup({closePopup}) {
    const [email, setEmail] = useState('')

    const onChange = (e) => {
        // 바뀔때마다 불러지는데 debounce로 해결해야 하는 걸까?
        setEmail(e.target.value)
    }

    function getEmail() {
        if (login.checkEmailForm(email)) {
            const userInfo = login.checkSignUpLogin(email);
            if (Object.keys(userInfo).length === 0) {
                console.log(`sign up ${email}`);
            } else {
                console.log(`log in ${email}`);
            }
        } else {
            console.log(`${email} 이메일 형식이 아닙니다.`);
        }
    }

    function enterKey() {
        if (window.event.keyCode === 13) {
            getEmail()
        }
    }

    return (
        <>
            <div className={styles[`popup-background`]}/>
            <div className={styles[`popup-board`]}>
                <section className={styles[`popup-header`]}>
                    <button type={"button"}
                            className={styles[`login-popup-exit`]}
                            onClick={() => closePopup(false)}>
                        x
                    </button>
                </section>
                <section className={styles['popup-body']}>
                    <div className={styles[`email-input-wrap`]}>
                        <input className={styles[`email-input`]}
                               onChange={onChange}
                               onKeyUp={enterKey}
                        />
                        <button type={"button"}
                                className={styles[`login-button`]}
                                onClick={getEmail}>
                            로그인
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}

export default LoginPopup;