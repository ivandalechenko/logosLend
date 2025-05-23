import { useEffect, useState } from 'react';
import './Cards.scss';
import CardItem from './Cards/CardItem';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import TXTSubheader from '../../components/TXTSubheader/TXTSubheader';
import SoloInputBlock from '../../components/SoloInputBlock/SoloInputBlock';
import { useLocation } from 'react-router-dom';

const chels = ['TRUMP', 'PNUT', 'PEPE', 'MUMU', 'POPCAT']
const chelsX3 = [...chels, ...chels, ...chels]

export default () => {
    const [activeCard, setActiveCard] = useState(0); // 0 for Crypto Debit, 1 for Logos Visa
    const [isScrolling, setIsScrolling] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.fromScroll) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';

            // Re-enable scrolling after 2 seconds
            const timer = setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 2000);

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = 'auto';
            };
        }
    }, []);

    useEffect(() => {
        if (activeCard === 0) {
            const delayModifier = .2
            const baseDelay = .5

            const elements = [1, 2, 3, 4, 5]; // Убедимся, что массив определён
            if (!Array.isArray(elements) || elements.length === 0) return; // Проверяем, что это массив

            elements.forEach((element, index) => {
                gsap.fromTo(`.Cards__decor_colored_${element}`, {
                    y: 1000,
                }, {
                    y: 0,
                    delay: baseDelay + delayModifier * index,
                    duration: .5
                })
            });
        } else {
            gsap.fromTo(`.Cards__decor_black`, {
                y: 1000,
            }, {
                y: 0,
            });
            gsap.to(`.Cards__join_span`, {
                text: `Participate in the airdrop today:`,
                delay: 3,
                duration: 1
            });
            gsap.to('.Cards__title', {
                text: 'Logos Visa Cards',
                delay: 2,
                duration: 2
            });
            gsap.to('.Cards__description', {
                text: 'Crypto can be spent like cash with Visa integration: direct crypto-to-fiat at any merchant easy fiat-to-crypto conversion for newcomers, instant transactions Visually enhanced in collaboration with your favorite memecoins',
                delay: 2,
                duration: 2
            });
        }
    }, [activeCard])

    // Add scroll handler
    useEffect(() => {
        const handleWheel = (e) => {
            if (isScrolling) return;

            setIsScrolling(true);

            // Scroll down moves from Crypto Debit to Logos Visa
            if (e.deltaY > 0) {
                setActiveCard(prev => prev === 1 ? 1 : prev + 1);
            } else {
                setActiveCard(prev => prev === 0 ? 0 : prev - 1);
            }

            // Prevent rapid scrolling by adding a small delay
            setTimeout(() => {
                setIsScrolling(false);
            }, 500);
        };

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isScrolling]);

    const app = useRef(null)

    useGSAP(
        () => {
            gsap.fromTo(`.Cards__decor`, {
                y: 200,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                delay: .4,
                duration: .6
            })
        },
        { scope: app }
    )
    return (
        <div className="cards-container">
            <div className='Cards' ref={app}>
                <div className='Cards_balancer'></div>
                <div className='Cards_content'>
                    <div className="Cards__dots">
                        <div
                            className={`Cards__dot ${activeCard === 0 ? 'active' : ''}`}
                            onClick={() => setActiveCard(0)}
                        />
                        <div
                            className={`Cards__dot ${activeCard === 1 ? 'active' : ''}`}
                            onClick={() => setActiveCard(1)}
                        />
                    </div>

                    <TXTHeader className={'Cards__title'}>
                        {activeCard === 0 ? 'Logos Visa Cards' : 'Logos Visa Cards'}
                    </TXTHeader>

                    <TXTPlain tac className={'Cards__description'}>
                        {activeCard === 0
                            ? 'We provide a secure, feature-rich platform that simplifies the investment process and opens doors to new possibilities in the crypto market'
                            : 'Crypto can be spent like cash with Visa integration: direct crypto-to-fiat at any merchant easy fiat-to-crypto conversion for newcomers, instant transactions Visually enhanced in collaboration with your favorite memecoins'
                        }
                    </TXTPlain>

                    {/* <TXTSubheader className={'Cards__join'} small> */}
                    {/* <span className='Cards__join_span'>
                            <img src="/img/buttonWhitepapper.svg" alt="" href="https://t.me/LogosLayer_bot" target='blank' />
                        </span> */}
                    <a className='Cards__join_a' href="https://t.me/LogosLayer_bot" target='blank'>
                        <img src="/img/buttonWhitepapper.svg" alt="" />
                    </a>
                    {/* </TXTSubheader> */}

                    {activeCard === 0 && (
                        // <SoloInputBlock
                        //     className={'Cards__inp'}
                        //     placeholder={'Example@gmail.com'}
                        //     btnText='Sign Up'
                        // />
                        <TXTPlain className='Cards__airdrop'>AIRDROP PORTAL</TXTPlain>
                    )}
                </div>
                <div className='Cards__decor'>
                    <div className='Cards__decor_black' style={{
                        opacity: activeCard === 0 ? 1 : 0,
                        pointerEvents: activeCard === 0 ? 'all' : 'none'
                    }}>
                        <div className='Cards__decor_card free_img'>
                            <img src="/card.svg" alt="" />
                        </div>
                        <div className='Cards__decor_mouse free_img'>
                            <img src="/img/Welcome/mouse.svg" alt="" />
                        </div>
                        <div className='Cards__item-choise free_img'>
                            <div className='Cards__item-choise_inner'>
                                {
                                    chelsX3.map((chel, index) => {
                                        return <div className='Cards__item-choise_element' style={{
                                            letterSpacing: chel.length > 4 ? -1.7 : 0
                                        }}>{chel}</div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='Cards__decor_colored' style={{
                        opacity: activeCard === 1 ? 1 : 0
                    }}>
                        {Array(5)
                            .fill(0)
                            .map((_, index) => {
                                return <div className={`Cards__decor_colored_item Cards__decor_colored_${index + 1} free_img`} style={{
                                    zIndex: (index + 1) * 5
                                }}>
                                    <div className='Cards__decor_colored_item_inner'>
                                        <img src={`/cards/${index + 1}.webp`} alt="" />
                                    </div>
                                </div>
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}