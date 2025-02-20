import { useRef } from 'react';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import Advanced from '../Advanced/Advanced';
import IntroductionText from '../IntroductionText/IntroductionText';
import './WhyExchange.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default () => {

    const app = useRef(null)

    useGSAP(
        () => {
            for (let i = 0; i < 5; i++) {
                gsap.fromTo(`.WhyExchange__decor_${i + 1}`, {
                    opacity: 0,
                }, {
                    opacity: 1,
                    delay: .2 * (i + 2),
                    duration: .5
                })
            }
        },
        { scope: app }
    )

    return (
        <>
            <div className='WhyExchange' ref={app}>
                <div className='WhyExchange__content'>
                    <TXTHeader left>
                        Why Exchanges Love LOGOS
                    </TXTHeader>
                    <TXTPlain>
                        Exchanges trust us for our enhanced liquidity and trading efficiency, connecting buyers and sellers seamlessly to boost market depth and reduce spreads. Our robust security solutions, including SAFU vaults and compliance tools, protect user funds and ensure regulatory adherence, building investor trust. We offer user-friendly, customizable integrations and cost-effective solutions that help exchanges scale globally while minimizing costs. With innovative features like Visa payments and memecoin support, we help exchanges thrive in fast-evolving markets.
                    </TXTPlain>
                </div>
                <div className='WhyExchange__decor'>
                    <div className='WhyExchange__decor-circleup free_img'>
                        <img src="./img/circleUp.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-circledown free_img'>
                        <img src="./img/circleUp.svg" alt="" />
                        {/* <img src="./img/circleDown.svg" alt="" /> */}
                    </div>
                    <div className='WhyExchange__decor-logo WhyExchange__decor_1 free_img'>
                        <img src="./logoLarge.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-eth  WhyExchange__decor_2 free_img'>
                        <img src="./img/eth.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-avax  WhyExchange__decor_3 free_img'>
                        <img src="./img/avax.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-sol  WhyExchange__decor_4 free_img'>
                        <img src="./img/sol.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-bera  WhyExchange__decor_5 free_img'>
                        <img src="./img/bera.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='width'></div>
            <Advanced />
            <div className='width'></div>
        </>
    )
}