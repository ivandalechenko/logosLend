import './More.scss';
import MoreBlock from './MoreBlock/MoreBlock';

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import ButtonOut from '../../components/ButtonOut/ButtonOut';
import { useGSAP } from '@gsap/react';
import TXTSubheader from '../../components/TXTSubheader/TXTSubheader';
import SoloInputBlock from '../../components/SoloInputBlock/SoloInputBlock';
import Advanced from '../Advanced/Advanced';

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
    const [activeSection, setActiveSection] = useState(0);

    // Add sections for tracking
    const sections = [
        'introduction',
        'memechain',
        'advanced'
    ];

    const handleDotClick = (index) => {
        const element = document.getElementById(sections[index]);
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(index);
    };

    // Add scroll event listener to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(section =>
                document.getElementById(section)
            );

            const currentSection = sectionElements.findIndex(element => {
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection !== -1) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <div className='dots-navigation'>
                {sections.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${activeSection === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
            <div className='Introduction_block' id="introduction">
                <TXTHeader>
                    Logos Vault
                </TXTHeader>
                <TXTPlain tac mac style={{
                    maxWidth: '700px'
                }}>
                    The Logos Vault provides institutional-grade cold storage for tokens, NFTs, and partnered assets while enabling staking directly from cold storage. Users can turn any SD card into a hardware wallet with Decentralized HSM encryption, while Liquid ID and Secure Enclave Vaults protect transactions and private keys.
                </TXTPlain>

                <div className='Introduction__join'>
                    <TXTSubheader w100>
                        Join The Waitlist!
                    </TXTSubheader>
                    <SoloInputBlock placeholder='Example@gmail.com' btnText='Sign Up' />
                </div>
                <div className='Introduction__decor'>
                    <img src="./meow.svg" alt="" />
                </div>
            </div>
            <div className='More_pepe free_img'>
                <img src="/pepe.png" ref={imgRef2} alt="" />
            </div>
            <div className='More__wrapper' id="memechain">
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
            <div id="advanced">
                <Advanced />
            </div>
        </div>
    )
}