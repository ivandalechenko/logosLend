import { useState, useRef } from "react";
import { observer } from "mobx-react-lite";
import inputStore from "../../stores/inputStore";
import "./Verify.scss";
import resetPasswordStore from "../../stores/resetPasswordStore";
import { Link, useNavigate } from "react-router-dom";
import TXTHeader from "../../components/TXTHeader/TXTHeader";
import TXTPlain from "../../components/TXTPlain/TXTPlain";
import LargeButton from "../../components/LargeButton/LargeButton";

const DisplayInput = observer(() => {
    const length = 6;
    const [values, setValues] = useState(Array(length).fill(""));
    const inputsRef = useRef([]);
    const nav = useNavigate();


    const handleChange = (index, e) => {
        const newValues = [...values];
        newValues[index] = e.target.value;
        setValues(newValues);

        // Переключение на следующий input, если введён символ
        if (e.target.value && index < length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        // Удаление символа и переход на предыдущий input по Backspace
        if (e.key === "Backspace" && !values[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    // const maskEmail = (email) => {
    //     const atIndex = email.indexOf("@");
    //     if (atIndex <= 2) return email;
    //     const visiblePart = email.slice(atIndex - 2);
    //     return "*".repeat(atIndex - 2) + visiblePart;
    // };

    return (
        <div className="Verify">
            <div className="Verify_balancer"></div>
            <div className="Verify_content">
                <TXTHeader>
                    Verify Code
                </TXTHeader>
                {/* <h3 className="Verify__title"> */}
                {/* </h3> */}
                <TXTPlain>
                    Enter the passcode you just received on your email address {resetPasswordStore.email}
                </TXTPlain>
                <form action="#" className="Verify__form" onSubmit={(e) => {
                    e.stopPropagation()
                }}>
                    <div className="Verify__form-inputs">
                        {values.map((val, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputsRef.current[index] = el)}
                                type="text"
                                maxLength="1"
                                value={val}
                                onChange={(e) => handleChange(index, e)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="Verify__input"
                            />
                        ))}
                    </div>
                    <LargeButton text='Confirm Changes' action={() => { nav('/PasswordReset') }} />
                </form>
            </div>
            <div className='Login__footer'>
                <TXTPlain small white>
                    <Link to={'/Register'} >
                        Contact Support
                    </Link>
                </TXTPlain>
            </div>
        </div>
    );
});

export default DisplayInput;
