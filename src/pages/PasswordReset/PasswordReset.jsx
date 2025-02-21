import { Link } from 'react-router-dom';
import InputBlock from '../../components/InputBlock/InputBlock';
import './PasswordReset.scss';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import LargeButton from '../../components/LargeButton/LargeButton';

export default () => {
    return (
        <div className='PasswordReset'>
            <div className='PasswordReset_balancer'></div>
            <div className='PasswordReset_content'>
                <TXTHeader>
                    Create Password
                </TXTHeader>
                <TXTPlain tac>
                    Type your new strong password.
                    <br />
                    Your password must include:
                    <br />
                    <br />
                    One capital letter & one small letter at least
                    <br />
                    One special character
                    <br />
                    Minimum 8 digits long.
                </TXTPlain>
                <p className='PasswordReset__description'>
                </p>
                <form action="#" className='PasswordReset__form' onSubmit={(e) => {
                    e.stopPropagation()
                }}>
                    <InputBlock placeholder={'Password'} type={'password'} />
                    <InputBlock placeholder={'Confirm Password'} type={'password'} />
                    <LargeButton text='Confirm Changes' action={() => { }} />
                </form>
            </div>
            <div className='Login__footer'>
                <TXTPlain small white>
                    <Link to="https://discord.gg/H2sEVjNR" target='_blank' >
                        Contact Support
                    </Link>
                </TXTPlain>
            </div>
        </div>
    )
}