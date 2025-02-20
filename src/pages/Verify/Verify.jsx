import { useState, useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import inputStore from "../../stores/inputStore";
import "./Verify.scss";
import resetPasswordStore from "../../stores/resetPasswordStore";
import { Link, useNavigate } from "react-router-dom";
import TXTHeader from "../../components/TXTHeader/TXTHeader";
import TXTPlain from "../../components/TXTPlain/TXTPlain";
import LargeButton from "../../components/LargeButton/LargeButton";
import loadingStore from "../../loadingStore";
import axios from "axios";
import { toast } from "react-toastify";

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

    const selectedEmail = localStorage.getItem('RegEmail')

    const [resendTimer, setresendTimer] = useState(0);
    let resendTimerInt = 0

    useEffect(() => {
        resendTimerInt = setInterval(() => {
            setresendTimer(prev => prev - 1)
        }, 1000);
        return () => {
            clearInterval(resendTimerInt)
        }
    }, [])

    const resendCode = async () => {
        if (resendTimer <= 0) {
            setresendTimer(60)
            loadingStore.setLoading(true)
            try {
                const { data } = await axios.post(
                    "https://api.liqchain.com/auth/initiate-email-verification",
                    {
                        email: selectedEmail,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Partner-Id': '9xhqYfMc3d6CghNPmPKoXkN8c'
                        }
                    });
                console.log(data);
                console.log('resend');
                toast.success('Code resent');
            } catch (error) {
                toast.warn('Something went wrong, please try later');
                console.log(error);
            } finally {
                loadingStore.setLoading(false)
            }
        }
    }


    const sendCode = async () => {
        const code = values.join('')

        loadingStore.setLoading(true)
        try {
            const { data } = await axios.post(
                "https://api.liqchain.com/auth/verify-email",
                {
                    email: selectedEmail,
                    code: code,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Partner-Id': '9xhqYfMc3d6CghNPmPKoXkN8c'
                    }
                });
            console.log(data);
            if (data.emailVerified) {
                toast.success('Email successfully verified!');
                nav('/Welcome')
            } else {
                toast.warning('Invalid code!');
            }
        } catch (error) {
            toast.warn('Something went wrong, please try later');
            console.log(error);
        } finally {
            loadingStore.setLoading(false)
        }
    }

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("Text").slice(0, 6);
        const pasteValues = pasteData.split("");
        const newValues = [...values];

        pasteValues.forEach((char, idx) => {
            if (idx < newValues.length) {
                newValues[idx] = char;
            }
        });

        setValues(newValues);

        // Фокус на последний заполненный инпут
        const nextIndex = pasteValues.length < 6 ? pasteValues.length : 5;
        inputsRef.current[nextIndex].focus();
    };



    return (
        <div className="Verify">
            <div className="Verify_balancer"></div>
            <div className="Verify_content">
                <TXTHeader>
                    Verify Code
                </TXTHeader>
                <TXTPlain tac>
                    Enter the passcode you just received on your email address {selectedEmail}
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
                                onPaste={handlePaste}
                            />
                        ))}
                    </div>
                    <LargeButton text='Confirm Code' action={sendCode} />
                    <LargeButton text={resendTimer <= 0 ? `Resend Code` : `${resendTimer} sec. to resend`} nm action={resendCode} />
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
