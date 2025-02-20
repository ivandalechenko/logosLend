import { Link } from 'react-router-dom';
import InputBlock from '../../components/InputBlock/InputBlock';
import './Register.scss';
import { useState } from 'react';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import LargeButton from '../../components/LargeButton/LargeButton';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
export default () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                    <InputBlock placeholder={'Name'} type={'text'} />
                    <InputBlock placeholder={'Email Address'} type={'email'} />
                    <InputBlock placeholder={'Password'} type={'password'} />
                    <InputBlock placeholder={'Confirm Password'} type={'password'} />
                    <LargeButton text='Register' />
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
                    <Link to={'/Register'} >
                        Contact Support
                    </Link>
                </TXTPlain>
            </div>
        </div>
    )
}