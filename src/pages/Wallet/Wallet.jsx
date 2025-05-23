import './Wallet.scss';


import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import ButtonOut from '../../components/ButtonOut/ButtonOut';

export default () => {
    // want to swap шоб не свапалось сразуобратно когдатекст будет прыгать
    const wts = useRef(null)
    const isSoon = useRef(null)
    const app = useRef(null)
    const [activeDot, setActiveDot] = useState(0);

    useEffect(() => {
        isSoon.current = false
    }, [])

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(`.Wallet__chat`, {
                y: 200,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                delay: 0.4,
                duration: 0.5
            });

            let timeouts = [];
            let interval = null;

            const chatAnim = () => {
                for (let i = 0; i < 5; i++) {
                    const timeout = setTimeout(() => {
                        gsap.fromTo(`.Wallet__chat_msg${i + 1}`, {
                            y: 10,
                            opacity: 0,
                        }, {
                            y: 0,
                            opacity: 1,
                        });

                        gsap.fromTo(`.Wallet__chat_messages`, {
                            y: 430 - (5 + i) * 44,
                        }, {
                            y: 430 - (6 + i) * 44,
                        });

                    }, 1000 * ((i) * 2) + 500);
                    timeouts.push(timeout);
                }

                const fadeOutTimeout = setTimeout(() => {
                    for (let i = 0; i < 5; i++) {
                        gsap.to(`.Wallet__chat_msg${i + 1}`, {
                            opacity: 0,
                        });
                    }
                }, 20000);
                timeouts.push(fadeOutTimeout);
            };

            // Запускаем анимацию сразу и ставим интервал
            chatAnim();
            interval = setInterval(() => {
                chatAnim();
            }, 25000);

            // Очистка при размонтировании компонента
            return () => {
                // Очищаем все таймеры
                timeouts.forEach(clearTimeout);
                clearTimeout(interval); // Используем clearTimeout, так как interval может быть null
                // gsap.killTweensOf(".Wallet__chat, .Wallet__chat_msg1, .Wallet__chat_msg2, .Wallet__chat_msg3, .Wallet__chat_msg4, .Wallet__chat_msg5, .Wallet__chat_messages");
                // ctx.revert(); // Очищает GSAP-контекст без зацикливания
            };
        });

    }, { scope: app });

    const hideNShow = () => {
        gsap.to(`.Wallet__description`, {
            opacity: 0,
            duration: 0.5
        })
        setTimeout(() => {
            gsap.to(`.Wallet__description`, {
                opacity: 1,
                duration: 0.5
            })
        }, 600);
    }

    const showSoon = () => {
        hideNShow()
        setActiveDot(1)
        setTimeout(() => {
            gsap.to(`.hdr`, {
                text: `MemeChain - The Hub for Memecoin Traders`,
                duration: 0.1
            })
            gsap.to(`.desc`, {
                text: `MemeChain is the central hub for community engagement, SocialFi rewards, and competitive trading. Users can:
                    Stake memecoins to earn passive rewards and unlock exclusive perks.
                    Compete in memecoin trading tournaments for a chance to win Logos tokens and top-tier NFTs.
                    Complete SocialFi quests to earn memecoins and Logos tokens.
                    Receive passive airdrop rewards through ecosystem participation.
                    MemeChain is designed to fuel Web3 culture, rewarding engagement and active participation in the crypto space.`,
                duration: 0.1
            })
        }, 500);
    }

    const showMemeChain = () => {
        hideNShow()
        setActiveDot(0)
        setTimeout(() => {
            gsap.to(`.hdr`, {
                text: `Swap, Trade & Move Liquidity Instantly`,
                duration: 0.1
            })
            gsap.to(`.desc`, {
                text: `No gas fees. No delays. No limits. Just instant cross-chain swaps, AI-powered trading, and full memecoin support—without the headache of native tokens for gas. Whether you're aping or making serious plays, Logos Wallet functions the way a wallet should. Simple.`,
                duration: 0.1
            })
        }, 500);

    }

    const showCattext = () => {
        hideNShow()
        setActiveDot(2)
        setTimeout(() => {
            gsap.to(`.hdr`, {
                text: `AI Trading Companions`,
                duration: 0.1
            })
            gsap.to(`.desc`, {
                text: `
                Logos Wallet integrates AI-powered assistants that help users navigate markets with:
                Wallet tracking and due diligence on key traders.
                Market sentiment updates and trend analysis.
                Automated trade execution for faster, more informed decisions.
                Simplified, secure web3 user experience for mass adoption and onboarding.
                `,
                duration: 0.1
            })
        }, 500);

    }
    const textInt = useRef(null);
    const curText = useRef(null)

    useEffect(() => {
        curText.current = 0
        setActiveDot(0)
        textInt.current = setInterval(() => {
            curText.current = curText.current + 1
            if (curText.current > 2) curText.current = 0
            if (curText.current === 0) showMemeChain()
            if (curText.current === 1) showSoon()
            if (curText.current === 2) showCattext()
        }, 10000);
        return () => {
            clearInterval(textInt.current)
        }
    }, [])

    // Add click handlers for the dots
    const handleDotClick = (index) => {
        clearInterval(textInt.current)
        curText.current = index
        if (index === 0) showMemeChain()
        if (index === 1) showSoon()
        if (index === 2) showCattext()
        textInt.current = setInterval(() => {
            curText.current = curText.current + 1
            if (curText.current > 2) curText.current = 0
            if (curText.current === 0) showMemeChain()
            if (curText.current === 1) showSoon()
            if (curText.current === 2) showCattext()
        }, 10000);
    }

    return (
        <div className='Wallet' ref={app}>
            <div className='Wallet__chat'>
                <div className='Wallet__chat_el free_img'>
                    <img src="/phone/phone.webp" alt="" />
                </div>
                <div className='Wallet__chat_el Wallet__chat_cat free_img'>
                    <img src="/phone/cat.png" alt="" />
                </div>
                <div className='Wallet__chat_el Wallet__chat_messages '>
                    {Array(5)
                        .fill(0)
                        .map((_, index) => {
                            return <div className={`Wallet__chat_el Wallet__chat_msg Wallet__chat_msg${index + 1} free_img`} style={{ opacity: 0 }}>
                                <img src={`/phone/message${index + 1}.svg`} alt="" />
                            </div>
                        })}
                </div>


            </div>
            <div className='Wallet__description'>
                <TXTHeader className='hdr'>
                    Swap, Trade & Move Liquidity Instantly
                </TXTHeader>

                <TXTPlain className={'desc'}>
                    No gas fees. No delays. No limits. Just instant cross-chain swaps, AI-powered trading, and full memecoin support—without the headache of native tokens for gas. Whether you're aping or making serious plays, Logos Wallet functions the way a wallet should. Simple.
                </TXTPlain>
                <ButtonOut text={'MemeChain'} className="btn" />
                <div className='Wallet__dots'>
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className={`Wallet__dot ${activeDot === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}