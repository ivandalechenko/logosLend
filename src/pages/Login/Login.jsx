import { Link, useNavigate } from 'react-router-dom';
import InputBlock from '../../components/InputBlock/InputBlock';
import './Login.scss';
import { useState } from 'react';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import TXTSubheader from '../../components/TXTSubheader/TXTSubheader';
import LargeButton from '../../components/LargeButton/LargeButton';
import loadingStore from '../../loadingStore';
import axios from 'axios';
import { toast } from 'react-toastify';

export default () => {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setremember] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const nav = useNavigate()


    const auth = async () => {
        loadingStore.setLoading(true)
        try {
            const { data } = await axios.post(
                "https://api.liqchain.com/auth/sign-in",
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Partner-Id': '9xhqYfMc3d6CghNPmPKoXkN8c'
                    }
                });
            console.log(data);
            if (data.Authorization) {
                toast.success('Successfully logged in!');
                nav('/Welcome')
            } else {
                toast.warning('Invalid credentials!');
            }
        } catch (error) {
            toast.warn('Something went wrong, please try later');
            console.log(error);
        } finally {
            loadingStore.setLoading(false)
        }
    }



    return (
        <div className='Login'>
            <div className='Login_balancer'></div>
            <div className='Login_content'>
                <TXTHeader>
                    Welcome Back!
                </TXTHeader>
                {/* <h3 className='Login__title'>
                    </h3> */}
                <TXTPlain>
                    We are excited to have your back. Log in now and access your account.
                </TXTPlain>
                {/* <p className='Login__description'>
                    </p> */}
                <div className='Login__form'>
                    <form action="form" className='Login__form-form'>
                        <InputBlock placeholder={'Email'} type={'email'} value={email} setValue={setemail} />
                        <InputBlock value={password} setValue={setpassword} placeholder={'Password'} type={'password'} />
                        {/* <div className='Login__form-form-inner'>
                            <div className='Login__form-form-inner-check_block' onClick={() => { setremember(!remember) }}>
                                <div className={`Login__form-form-inner-check ${remember && 'Login__form-form-inner-check_checked'}`}>
                                    <img src="/img/check.svg" alt="" />
                                </div>
                                <TXTPlain small white>
                                    Remember Me
                                </TXTPlain>
                            </div>
                            <TXTPlain white small>
                                <Link to={"/Forgot"}>Forgot Your Password?</Link>
                            </TXTPlain>
                        </div> */}
                        <LargeButton text='Log In' action={auth} />

                    </form>
                </div>
            </div>

            <div className='Login__footer'>
                <TXTPlain small>
                    <Link to={'/Register'} >
                        Don't have an account yet? &nbsp;
                        <TXTPlain small white inline>
                            Register
                        </TXTPlain>
                    </Link>
                </TXTPlain>
                <TXTPlain small white>
                    <Link to={'/Register'} >
                        Contact Support
                    </Link>
                </TXTPlain>
            </div>
        </div>
    );
};
