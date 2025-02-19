import './More.scss';
import MoreBlock from './MoreBlock/MoreBlock';

import { useEffect, useRef } from "react";
import gsap from "gsap";

const moreData = [
    { imgsrc: './swords.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' },
    { imgsrc: './swords.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' },
    { imgsrc: './chain.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' },
    { imgsrc: './chain.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' },
    { imgsrc: './cat.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' },
    { imgsrc: './cat.svg', title: 'Memecoin Plushies', description: 'Plushy machines connect users to Web3, boosting memecoin culture. Partnered with J Corp and Pudgy Penguins. Coming to TikTok & Walmart.' }
];

export default () => {
    
    const imgRef = useRef(null);

    useEffect(() => {
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
    }, []);
    
    return (
    <div className='More'>
        <div className='More__wrapper'>
            <h2 className='More__title'>Memechain</h2> 
            <p className='More__description'>Expanding Web3 culture and memecoin IP through socialfi</p>
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
            <div className='More__btn'>
                <button className='More__btn-btn'>Access BETA Test <img src="./img/buttonWhitepapper.svg" alt="" /></button>
            </div>
            <div className='More__decor free_img'>
                <img src="./phone/cat.png" alt="" ref={imgRef}/>
            </div>
        </div>
    </div>
)}