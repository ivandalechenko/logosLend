import { Link, useNavigate } from 'react-router-dom';
import InputBlock from '../../components/InputBlock/InputBlock';
import './Register.scss';
import { useEffect, useRef, useState } from 'react';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import LargeButton from '../../components/LargeButton/LargeButton';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import { toast } from 'react-toastify';
import axios from 'axios';
import loadingStore from '../../loadingStore';
export default () => {

    const [liqId, setliqId] = useState('');
    const [idAvaliable, setidAvaliable] = useState(false);
    const [idChecking, setidChecking] = useState(false);
    const idCheckTO = useRef();

    const nav = useNavigate()

    useEffect(() => {
        clearTimeout(idCheckTO.current)
        if (liqId.length > 0) {
            setidChecking(true)
            idCheckTO.current = setTimeout(async () => {
                setidAvaliable(false)
                if (liqId.length < 4 || liqId.length > 16) {
                    setidChecking(false)
                    return
                }
                try {
                    const { data } = await axios.post(
                        "https://api.liqchain.com/auth/check-id-available",
                        { id: liqId },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'X-Partner-Id': '9xhqYfMc3d6CghNPmPKoXkN8c'
                            }
                        });
                    if (data.available === true) {
                        setidAvaliable(true)
                    }
                } catch (error) {
                    console.error(error);
                } finally {
                    setidChecking(false)
                }
            }, 1000);
        }
    }, [liqId])



    const [password, setpassword] = useState('');
    const [passwordAvaliable, setpasswordAvaliable] = useState(false);
    const [passwordChecking, setpasswordChecking] = useState(false);
    const passwordCheckTO = useRef();
    useEffect(() => {
        clearTimeout(passwordCheckTO.current)
        if (password.length > 0) {
            setpasswordChecking(true)
            passwordCheckTO.current = setTimeout(async () => {
                setpasswordAvaliable(false)
                if (password.length < 8 || password.length > 32) {
                    setpasswordAvaliable(false)
                } else {
                    setpasswordAvaliable(true)
                }
                setpasswordChecking(false)
            }, 1000);
        }
    }, [password])


    const [rpassword, setrpassword] = useState('');
    const [rpasswordAvaliable, setrpasswordAvaliable] = useState(false);
    const [rpasswordChecking, setrpasswordChecking] = useState(false);
    const rpasswordCheckTO = useRef();
    useEffect(() => {
        clearTimeout(rpasswordCheckTO.current)
        if (rpassword.length > 0) {
            setrpasswordChecking(true)
            rpasswordCheckTO.current = setTimeout(async () => {
                setrpasswordAvaliable(false)
                if (password !== rpassword) {
                    setrpasswordAvaliable(false)
                } else {
                    setrpasswordAvaliable(true)
                }
                setrpasswordChecking(false)
            }, 1000);
        }
    }, [rpassword])




    const [email, setemail] = useState('');
    const [emailAvaliable, setemailAvaliable] = useState(false);
    const [emailChecking, setemailChecking] = useState(false);
    const emailCheckTO = useRef();
    useEffect(() => {
        if (email.length > 0) {
            clearTimeout(emailCheckTO.current)
            setemailChecking(true)
            emailCheckTO.current = setTimeout(async () => {
                setemailAvaliable(false)
                try {
                    const { data } = await axios.post(
                        "https://api.liqchain.com/auth/check-email-available",
                        { email },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'X-Partner-Id': '9xhqYfMc3d6CghNPmPKoXkN8c'
                            }
                        });
                    if (data.available) {
                        setemailAvaliable(true)
                    }
                } catch (error) {
                    console.error(error);
                } finally {
                    setemailChecking(false)
                }
            }, 1000);
        }
    }, [email])



    const register = async () => {
        if (!idAvaliable) {
            toast.warn('Please enter valid liq ID');
            return
        } if (!emailAvaliable) {
            toast.warn('Please enter valid email');
            return
        } if (!passwordAvaliable) {
            toast.warn('Please enter valid password');
            return
        }

        loadingStore.setLoading(true)
        try {
            const { data } = await axios.post(
                "https://api.liqchain.com/auth/sign-up",
                {
                    id: liqId,
                    email: email,
                    password: password,
                    sendVerificationEmail: true,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Partner-Id': '9xhqYfMc3d6CghNPmPKoXkN8c'
                    }
                });
            console.log(data);
            localStorage.setItem('RegEmail', email)

            nav('/Welcome')
            // setregStage(1)
            // localStorage.setItem('liqRegStage', '1')
            // setselectedEmail(email)
            // localStorage.setItem('liqRegEmail', email)

        } catch (error) {
            toast.warn('Something went wrong, please try later');
            console.log(error);
        } finally {
            loadingStore.setLoading(false)
        }
        toast.success('Successful registration!')
    }

    return (
        <div className='Register'>
            <div className='Register_balancer'></div>
            <div className='Register_content'>
                <TXTHeader>
                    Register
                </TXTHeader>
                <TXTPlain tac mac>
                    Ready to become part of the exclusive club? Fill in the details below, and let the journey begin!
                </TXTPlain>
                <form action="#" onSubmit={(e) => {
                    e.stopPropagation()
                }} className='Register__form'>
                    <div className='Register__form_block'>
                        {
                            liqId.length !== 0 && !idChecking && !idAvaliable && <TXTPlain className='Register__form_err'>
                                {liqId.length > 16 && "Too long id"}
                                {liqId.length < 4 && "Too short id"}
                                {liqId.length >= 4 && liqId.length <= 16 && "Already in use"}
                            </TXTPlain>
                        }
                        <InputBlock placeholder={'Username'} type={'text'} value={liqId} setValue={setliqId} />
                    </div>
                    <div className='Register__form_block'>
                        {
                            email.length !== 0 && !emailChecking && !emailAvaliable && <TXTPlain className='Register__form_err'>
                                Invalid format or already in use
                            </TXTPlain>
                        }
                        <InputBlock placeholder={'Email'} type={'email'} value={email} setValue={setemail} />
                    </div>
                    <div className='Register__form_block'>
                        {
                            password.length !== 0 && !passwordChecking && !passwordAvaliable && <TXTPlain className='Register__form_err'>
                                Invalid format, please make password lenght between 8 and 32
                            </TXTPlain>
                        }
                        <InputBlock placeholder={'Password'} type={'password'} value={password} setValue={setpassword} />
                    </div>
                    <div className='Register__form_block'>
                        {
                            rpassword.length !== 0 && !rpasswordChecking && !rpasswordAvaliable && <TXTPlain className='Register__form_err'>
                                Passwords didn't match
                            </TXTPlain>
                        }
                        <InputBlock placeholder={'Confirm Password'} type={'password'} value={rpassword} setValue={setrpassword} />
                    </div>
                    <LargeButton text='Register' action={register} />
                </form>
            </div>
            <div className='Login__footer'>
                <TXTPlain small>
                    <Link to={'/Login'} >
                        Already have an account? &nbsp;
                        <TXTPlain small white inline>
                            Log In
                        </TXTPlain>
                    </Link>
                </TXTPlain>
                <TXTPlain small white>
                    <Link to="https://discord.gg/H2sEVjNR" target='_blank' >
                        Contact Support
                    </Link>
                </TXTPlain>
            </div>
        </div>
    )
}