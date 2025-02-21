import { useRef } from 'react';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import './AdvancedItem/AdvancedItem.scss';
import './Advanced.scss';
import AdvancedItem from './AdvancedItem/AdvancedItem';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TXTSubheader from '../../components/TXTSubheader/TXTSubheader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';

const advancedItems = [
    {
        imgsrc: './img/Advanced/Union.svg',
        title: 'Unified Cross-Chain Arbitrage',
        description: `Use $LOGOS's UCCL protocol for cross-chain and intra-exchange arbitrage, exploiting price inefficiencies with gasless, rapid COMET BFT transactions.`
    },
    {
        imgsrc: './img/Advanced/realtime.svg',
        title: 'Real-Time AI Analytics',
        description: 'Gain AI-driven, real-time market insights to spot opportunities instantly across Ethereum, Solana, Avalanche, and more.'
    },
    {
        imgsrc: './img/Advanced/synthetic.svg',
        title: 'Synthetic Asset Trading',
        description: `Access synthetic assets like gold and oil via UCCL's gasless, multi-chain platform, expanding opportunities in $LOGOS's Web3 economy.`
    },
    {
        imgsrc: './img/Advanced/fire.svg',
        title: 'Gasless Flashloans',
        description: 'Access gasless, fast flashloans on $LOGOS Layer 1 for arbitrage and liquidity, cutting costs and boosting efficiency. '
    }
];

export default () => {
    const app = useRef(null)
    const al = useRef(null)

    useGSAP(
        () => {
            al.current = 0;
            gsap.to(`.Advanced`, {
                scrollTrigger: {
                    trigger: '.Advanced_wrapper',
                    // markers: true,
                    start: "top 0px", // Фиксируем при достижении верха
                    end: "bottom 0px", // Разрешаем выход при конце секции
                    pin: true, // Закрепляем
                    pinSpacing: false, // Отключаем добавление пустого пространства
                    onUpdate: (self) => {
                        const scrollPercent = Math.round(self.progress * 100);
                        if (scrollPercent > 0 && scrollPercent <= 30) {
                            if (al.current !== 0) {
                                al.current = 0
                                gsap.to('.AdvancedItem', {
                                    opacity: 0,
                                    duration: .2
                                })
                                setTimeout(() => {
                                    gsap.to('.AdvancedItem', {
                                        opacity: 1,
                                        duration: .2
                                    })
                                }, 400);
                                setTimeout(() => {
                                    document.getElementById("img-0").src = "/img/Advanced/Union.svg";
                                    gsap.to('.AdvancedItem_h_0', {
                                        text: `Unified Cross-Chain Arbitrage`, duration: 0.1
                                    })
                                    gsap.to('.AdvancedItem_t_0', {
                                        text: `Use $LOGOS's UCCL protocol for cross-chain and intra-exchange arbitrage, exploiting price inefficiencies with gasless, rapid COMET BFT transactions.`, duration: 0.1
                                    })

                                    document.getElementById("img-1").src = "/img/Advanced/realtime.svg";
                                    gsap.to('.AdvancedItem_h_1', {
                                        text: `Real-Time AI Analytics`, duration: 0.1
                                    })
                                    gsap.to('.AdvancedItem_t_1', {
                                        text: `Gain AI-driven, real-time market insights to spot opportunities instantly across Ethereum, Solana, Avalanche, and more.`, duration: 0.1
                                    })

                                    document.getElementById("img-2").src = "/img/Advanced/synthetic.svg";
                                    gsap.to('.AdvancedItem_h_2', {
                                        text: `Synthetic Asset Trading`, duration: 0.1
                                    })
                                    gsap.to('.AdvancedItem_t_2', {
                                        text: `Access synthetic assets like gold and oil via UCCL's gasless, multi-chain platform, expanding opportunities in $LOGOS's Web3 economy.`, duration: 0.1
                                    })

                                    document.getElementById("img-3").src = "/img/Advanced/fire.svg";
                                    gsap.to('.AdvancedItem_h_3', {
                                        text: `Gasless Flashloans`, duration: 0.1
                                    })
                                    gsap.to('.AdvancedItem_t_3', {
                                        text: `Access gasless, fast flashloans on $LOGOS Layer 1 for arbitrage and liquidity, cutting costs and boosting efficiency.`, duration: 0.1
                                    })

                                }, 200);
                            }
                        } else if (scrollPercent > 30 && scrollPercent <= 60) {
                            if (al.current !== 1) {
                                al.current = 1
                                gsap.to('.AdvancedItem', {
                                    opacity: 0,
                                    duration: .2
                                })
                                setTimeout(() => {
                                    gsap.to('.AdvancedItem', {
                                        opacity: 1,
                                        duration: .2
                                    })
                                }, 400);
                                setTimeout(() => {
                                    document.getElementById("img-0").src = "/img/Advanced/0.svg";
                                    gsap.to('.AdvancedItem_h_0', {
                                        text: `Enhanced Liquidity Pools`, duration: 0.1
                                    })
                                    gsap.to('.AdvancedItem_t_0', {
                                        text: `Tap $LOGOS's unified liquidity pools via UCCL for deep market depth and competitive pricing across blockchains.`, duration: 0.1
                                    })

                                    document.getElementById("img-1").src = "/img/Advanced/1.svg";
                                    gsap.to('.AdvancedItem_h_1', {
                                        text: `Customizable Trading Dashboards`, duration: 0.1
                                    })
                                    gsap.to('.AdvancedItem_t_1', {
                                        text: `Leverage $LOGOS's API for real-time data, creating personalized dashboards for advanced traders and exchanges.`, duration: 0.1
                                    })

                                    document.getElementById("img-2").src = "/img/Advanced/2.svg";
                                    gsap.to('.AdvancedItem_h_2', {
                                        text: `Spatial Arbitrage Opportunities`, duration: 0.1
                                    })
                                    gsap.to('.AdvancedItem_t_2', {
                                        text: `Analyze global inefficiencies with statistical models to execute spatial arbitrage, maximizing short-term profits on $LOGOS's infrastructure.`, duration: 0.1
                                    })

                                    document.getElementById("img-3").src = "/img/Advanced/3.svg";
                                    gsap.to('.AdvancedItem_h_3', {
                                        text: `Robust Security for Transactions`, duration: 0.1
                                    })
                                    gsap.to('.AdvancedItem_t_3', {
                                        text: `Trade securely with $LOGOS's decentralized security, including SAFU vaults and zero-knowledge proofs, for safe, efficient transactions.`, duration: 0.1
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
        <div className='Advanced_w' ref={app}>
            <div className='Advanced_wrapper'>
                <div className='Advanced'>
                    <TXTHeader className='Advanced__title' left>
                        Logos Advanced Trading
                    </TXTHeader>
                    <div className='Advanced__block'>
                        {advancedItems.map((item, index) => (
                            <div className='AdvancedItem'>
                                <img src={item.imgsrc} id={`img-${index}`} alt="" />
                                <div className='AdvancedItem__description'>
                                    <TXTSubheader className={`AdvancedItem_h_${index}`}>
                                        {item.title}
                                    </TXTSubheader>
                                    <TXTPlain className={`AdvancedItem_t_${index}`}>
                                        {item.description}
                                    </TXTPlain>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}