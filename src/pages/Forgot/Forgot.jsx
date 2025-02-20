import { useState } from 'react';
import InputBlock from '../../components/InputBlock/InputBlock';
// import inputStore from '../../stores/inputStore';
import resetPasswordStore from '../../stores/resetPasswordStore';
import './Forgot.scss';
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from 'react-router-dom';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import LargeButton from '../../components/LargeButton/LargeButton';


const Forgot = observer(() => {
    const [email, setemail] = useState('');
    const nav = useNavigate();


    return (
        <div className='Forgot'>
            <div className='Forgot_balancer'></div>
            <div className='Forgot_content'>
                <TXTHeader>
                    Reset Password
                </TXTHeader>
                <TXTPlain tac mac>
                    Type your authorised email address to receive reset password link.
                </TXTPlain>
                {/* <p className='Forgot__description'>
                </p> */}
                <form action="#" className='Forgot__form' onSubmit={(e) => {
                    e.stopPropagation()
                }}>
                    <InputBlock
                        placeholder={'Email Address'}
                        type={'email'}
                        value={email}
                        setvalue={setemail}
                    />
                    <LargeButton text='Send Reset Password Link' action={() => { nav('/Verify') }} />
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

export default Forgot;