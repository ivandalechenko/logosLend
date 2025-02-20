import { Link } from 'react-router-dom';
import InputBlock from '../../components/InputBlock/InputBlock';
import './Login.scss';
import { useState } from 'react';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import TXTSubheader from '../../components/TXTSubheader/TXTSubheader';
import LargeButton from '../../components/LargeButton/LargeButton';

export default () => {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setremember] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                        <InputBlock placeholder={'ExampleUserName@gmail.com'} type={'email'} />
                        <InputBlock placeholder={'Password'} type={'password'} />
                        <div className='Login__form-form-inner'>
                            <div className='Login__form-form-inner-check_block' onClick={() => { setremember(!remember) }}>
                                <div className={`Login__form-form-inner-check ${remember && 'Login__form-form-inner-check_checked'}`}>
                                    <img src="/img/check.svg" alt="" />
                                </div>
                                <TXTPlain small white>
                                    Remember Me
                                </TXTPlain>
                                {/* <div className='Login__form-form-inner-check-rem'>Remember Me</div> */}
                            </div>
                            <TXTPlain white small>
                                <Link to={"/Forgot"}>Forgot Your Password?</Link>
                            </TXTPlain>
                        </div>
                        <LargeButton text='Log In' />

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
