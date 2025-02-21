import { useState } from 'react';
import Description from './Description/Description';
import './Protocols.scss';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import ButtonOut from '../../components/ButtonOut/ButtonOut';
import TXTSubheader from '../../components/TXTSubheader/TXTSubheader';
import { useNavigate } from 'react-router-dom';

export default () => {

    const [activeLine, setActiveLine] = useState(0);
    const al = useRef(null)

    const app = useRef(null)

    useGSAP(
        () => {
            al.current = 0;
            for (let i = 0; i < 3; i++) {
                gsap.fromTo(`.Description_${i}`, {
                    x: -200,
                    opacity: 0,
                }, {
                    x: 0,
                    opacity: 1,
                    delay: .3 * (i + 1),
                    duration: .6
                })
            }



            gsap.to(`.Protocols_inner`, {
                top: 0, // Убираем любое движение вниз
                scrollTrigger: {
                    trigger: '.Protocols',
                    // markers: true,
                    start: "top 100px", // Фиксируем при достижении верха
                    end: "bottom 100px", // Разрешаем выход при конце секции
                    pin: true, // Закрепляем
                    pinSpacing: false, // Отключаем добавление пустого пространства
                    onUpdate: (self) => {
                        const scrollPercent = Math.round(self.progress * 100);
                        if (scrollPercent > 0 && scrollPercent <= 25) {
                            if (al.current !== 0) {
                                al.current = 0
                                setActiveLine(0)
                                gsap.to('.Description', {
                                    opacity: 0,
                                    duration: .2
                                })
                                setTimeout(() => {
                                    gsap.to('.Description', {
                                        opacity: 1,
                                        duration: .2
                                    })
                                }, 400);
                                setTimeout(() => {
                                    gsap.to('.Description__title_1', {
                                        text: `Zero Gas Fees`, duration: 0.1
                                    })
                                    gsap.to('.Description__description_1', {
                                        text: `Forget about gas fees eating into your profits. Liquid Layer removes transaction fees, allowing traders to move assets without paying network costs. This means more frequent trades, better arbitrage opportunities, and a level playing field for all users.`, duration: 0.1
                                    })
                                    gsap.to('.Description__title_2', {
                                        text: `Universal Chain Connectivity`, duration: 0.1
                                    })
                                    gsap.to('.Description__description_2', {
                                        text: `Liquid Layer makes multi-chain trading seamless, enabling effortless transfers across Ethereum, Bitcoin, Solana, and more—no network switching, wrapping, or complex swaps needed.`, duration: 0.1
                                    })
                                    gsap.to('.Description__title_3', {
                                        text: `Advanced Security`, duration: 0.1
                                    })
                                    gsap.to('.Description__description_3', {
                                        text: `Security isn't an afterthought—it's built into the foundation of Liquid Layer. Using advanced encryption, real-time monitoring, and the COMET BFT consensus mechanism, transactions are secured at every level, ensuring stability and protection against threats.`, duration: 0.1
                                    })
                                }, 200);
                            }
                        } else if (scrollPercent > 25 && scrollPercent <= 50) {
                            if (al.current !== 1) {
                                al.current = 1
                                setActiveLine(1)
                                gsap.to('.Description', {
                                    opacity: 0,
                                    duration: .2
                                })
                                setTimeout(() => {
                                    gsap.to('.Description', {
                                        opacity: 1,
                                        duration: .2
                                    })
                                }, 300);
                                setTimeout(() => {
                                    gsap.to('.Description__title_1', {
                                        text: `Seamless Integration, Limitless Trading`, duration: 0.1
                                    })
                                    gsap.to('.Description__description_1', {
                                        text: `Liquid Layer connects with top-tier exchanges, allowing users to execute trades instantly with deep liquidity. Whether you're a casual trader or a high-volume investor, you get seamless access to multiple markets from a single platform.`, duration: 0.1
                                    })
                                    gsap.to('.Description__title_2', {
                                        text: `One Unified Liquidity Pool`, duration: 0.1
                                    })
                                    gsap.to('.Description__description_2', {
                                        text: `Liquid Layer connects liquidity across blockchains, ensuring optimal pricing, no slippage, and instant access to assets. No more fragmentation or trapped funds—everything is seamlessly available.`, duration: 0.1
                                    })
                                    gsap.to('.Description__title_3', {
                                        text: `Seamless User Experience`, duration: 0.1
                                    })
                                    gsap.to('.Description__description_3', {
                                        text: `Liquid Wallet streamlines crypto with multi-chain management, gasless transactions, and unified liquidity. AI-powered memecoin pets, built with top projects, automate tasks, optimize trades, and make Web3 fun and accessible.`, duration: 0.1
                                    })
                                }, 200);
                            }

                        } else if (scrollPercent > 50 && scrollPercent <= 75) {
                            if (al.current !== 2) {
                                al.current = 2
                                setActiveLine(2)
                                gsap.to('.Description', {
                                    opacity: 0,
                                    duration: .2
                                })
                                setTimeout(() => {
                                    gsap.to('.Description', {
                                        opacity: 1,
                                        duration: .2
                                    })
                                }, 300);
                                setTimeout(() => {
                                    gsap.to('.Description__title_1', {
                                        text: `Visa Cards`, duration: 0.1
                                    })
                                    gsap.to('.Description__description_1', {
                                        text: `The top 100,000 airdrop participants can pre-order a premium Liquid Visa Card, designed for seamless crypto spending. Combining blockchain innovation with traditional financial flexibility, it can be used anywhere Visa is accepted.`, duration: 0.1
                                    })
                                    gsap.to('.Description__title_2', {
                                        text: `Exclusive Partnerships & Ecosystem Growth`, duration: 0.1
                                    })
                                    gsap.to('.Description__description_2', {
                                        text: `Liquid Layer is a movement, expanding Web3 through luxury collaborations like 1:1 memecoin jewelry with GFAL and the UAE, and tech integrations with Ledger and Tamagotchi, driving mainstream adoption and cultural growth.`, duration: 0.1
                                    })
                                    gsap.to('.Description__title_3', {
                                        text: `Reducing Crypto's Environmental Footprint`, duration: 0.1
                                    })
                                    gsap.to('.Description__description_3', {
                                        text: `Sustainability is central to Liquid Layer. Our energy-efficient architecture minimizes the environmental impact of blockchain transactions while ensuring high performance, reflecting our commitment to responsible innovation for both the industry and the planet.`, duration: 0.1
                                    })
                                }, 200);
                            }
                        }


                    }
                }
            })

        },
        { scope: app }
    )

    return (
        <div className='Protocols_wrapper' ref={app}>
            <div className='Protocols' >
                <div className='Protocols_inner'>
                    <div className='Protocols__description'>
                        <div className={`Description`} key={`element_desc_vorovskoy`}>
                            <img src='/img/descriptionLogo.svg' alt="" />
                            <div className='Description__container'>
                                <TXTSubheader className={'Description__title_1'}>
                                    Zero Gas Fees
                                </TXTSubheader>
                                <TXTPlain small className={'Description__description_1'}>
                                    Forget about gas fees eating into your profits. Liquid Layer removes transaction fees, allowing traders to move assets without paying network costs. This means more frequent trades, better arbitrage opportunities, and a level playing field for all users.
                                </TXTPlain>
                            </div>
                        </div>
                        <div className={`Description`} key={`element_desc_vorovskoy`}>
                            <img src='/img/descriptionLogo.svg' alt="" />
                            <div className='Description__container'>
                                <TXTSubheader className={'Description__title_2'}>
                                    Universal Chain Connectivity
                                </TXTSubheader>
                                <TXTPlain small className={'Description__description_2'}>
                                    Liquid Layer makes multi-chain trading seamless, enabling effortless transfers across Ethereum, Bitcoin, Solana, and more—no network switching, wrapping, or complex swaps needed.
                                </TXTPlain>
                            </div>
                        </div>
                        <div className={`Description`} key={`element_desc_vorovskoy`}>
                            <img src='/img/descriptionLogo.svg' alt="" />
                            <div className='Description__container'>
                                <TXTSubheader className={'Description__title_3'}>
                                    Advanced Security
                                </TXTSubheader>
                                <TXTPlain small className={'Description__description_3'}>
                                    Security isn`t an afterthought—it`s built into the foundation of Liquid Layer. Using advanced encryption, real-time monitoring, and the COMET BFT consensus mechanism, transactions are secured at every level, ensuring stability and protection against threats.
                                </TXTPlain>
                            </div>
                        </div>



                    </div>
                    <div className='Protocols__line'>
                        {[0, 1, 2].map((index) => (
                            <span
                                key={index}
                                className={`Protocols__line-dot ${activeLine === index ? 'activeDot' : ''}`}
                            ></span>
                        ))}
                    </div>
                    <div className='Protocols__feauteres'>
                        <TXTHeader left>
                            Seamless Protocol Features
                        </TXTHeader>
                        {/* <h3 className='Protocols__feauteres-title'>
                            </h3> */}
                        <TXTPlain>
                            Liquid Layer enables seamless multi-chain trading with zero gas fees, unified liquidity, and top-tier security. Integrated with major exchanges and AI-powered tools, it offers a smooth, efficient, and eco-friendly Web3 experience.
                        </TXTPlain>
                        {/* <p className='Protocols__feauteres-description'>
                            </p> */}
                        {/* https://whitepaper.logoslayer.com/ */}
                        <ButtonOut text={'Whitepaper'} />
                        {/* <button className='Protocols__feauteres-btn'>Whitepaper <img src="./img/buttonWhitepapper.svg" alt="" /></button> */}
                    </div>
                </div>

            </div>
        </div>

    )
}