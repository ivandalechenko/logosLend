import IntroductionText from '../IntroductionText/IntroductionText';
import './Introduction.scss';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import TXTSubheader from '../../components/TXTSubheader/TXTSubheader';
import ButtonOut from '../../components/ButtonOut/ButtonOut';
import SoloInputBlock from '../../components/SoloInputBlock/SoloInputBlock';

export default () => {

    const app = useRef(null)

    return (
        <div className='Introduction' ref={app}>
            <div className='Introduction_block'>
                <IntroductionText />
            </div>
        </div>
    )
}