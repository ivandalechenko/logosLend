import './More.scss';
import MoreBlock from './MoreBlock/MoreBlock';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import ButtonOut from '../../components/ButtonOut/ButtonOut';
import { useGSAP } from '@gsap/react';

const moreData = [
    { imgsrc: './swords.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' },
    { imgsrc: './swords.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' },
    { imgsrc: './chain.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' },
    { imgsrc: './chain.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' },
    { imgsrc: './cat.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' },
    { imgsrc: './cat.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' }
];

export default () => {

    const app = useRef(null)
    const imgRef = useRef(null);
    const imgRef2 = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(
                imgRef.current,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1
                }
            );
            gsap.fromTo(
                imgRef2.current,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 2
                }
            );
        },
        { scope: app }
    )



    return (
        <div className='More' ref={app}>
            <div className='More_pepe free_img'>
                <img src="/pepe.png" ref={imgRef2} alt="" />
            </div>
            <div className='More__wrapper'>
                <TXTHeader>
                    Memechain
                </TXTHeader>
                {/* <h2 className='More__title'>
                </h2>  */}
                <TXTPlain>
                    Expanding Web3 culture and memecoin IP through socialfi
                </TXTPlain>
                {/* <p className='More__description'>
                    </p> */}
                <div className='More__block'>
                    {moreData.map((item, index) => (
                        <MoreBlock
                            key={index}
                            imgsrc={item.imgsrc}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
                <ButtonOut text={'Access BETA Test'} />
                {/* <div className='More__btn'>
                    <button className='More__btn-btn'>Access BETA Test <img src="./img/buttonWhitepapper.svg" alt="" /></button>
                </div> */}
                <div className='More__decor free_img'>
                    <img src="./phone/cat.png" alt="" ref={imgRef} />
                </div>
            </div>
        </div>
    )
}