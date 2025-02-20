import { useState } from 'react';
import './SoloInputBlock.scss';
import ButtonOut from '../ButtonOut/ButtonOut';
export default ({ placeholder, btnText = "", className }) => {
    const [input, setinput] = useState('');
    const [isFocus, setisFocus] = useState(false);


    return (
        <div className={`SoloInputBlock ${className} ${isFocus && 'SoloInputBlock_blurred'}`} >
            <input
                type="text"
                value={input}
                onFocus={() => { setisFocus(true) }}
                onBlur={() => { setisFocus(false) }}
                onChange={(e) => { setinput(e.target.value) }}
                placeholder={placeholder}
            />
            {
                btnText && <ButtonOut text={btnText} />
            }
        </div>
    )
}