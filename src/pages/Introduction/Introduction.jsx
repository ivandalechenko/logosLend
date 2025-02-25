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
                <TXTHeader left>
                    Introduction
                </TXTHeader>
                <div className='Introduction_text'>
                    Breaking Barriers, Unifying Worlds, Leading the Future.<br />
                    Logos Layer (LL) is redefining the blockchain landscape with groundbreaking cross-chain infrastructure, shattering the barriers of stuck liquidity, chain wars, and complexity. By seamlessly connecting ecosystems, optimizing transaction flows, and supercharging scalability, LL eliminates the inefficiencies of outdated bridging solutions, paving the way for a unified, frictionless blockchain future.
                    <br />
                    Designed for mass adoption, LL simplifies user interactions, hides network complexities, and unifies liquidity across major blockchains like Ethereum, Solana, and TON. With deep integrations and cutting-edge multi-chain technology, LL delivers a seamless experience for users, developers, and institutions alike—whether they're buying crypto, trading memecoins, or building the next Web3 innovation.
                    <br />
                    Backed by trusted investors and fortified with strategic partnerships with leading centralized exchanges, VISA, MASTERCARD, streaming entertainment platforms, automotive dealerships, real estate lenders, luxury jewelry brands, and more, LL is not just a platform—it's a movement. We're expanding Web3 culture and intellectual property (IP) on a global scale, turning memecoins into a cultural phenomenon and a new asset class,  making crypto accessible to everyone.
                    <br />
                    As the ultimate hub for builders and users, LL leverages its position to remove fragmented liquidity, foster true interoperability, and create a scalable, user-friendly Web3 experience. We plan to unite the Blockchain and the World—together with web3, we're building the future, one seamless connection at a time.
                </div>
            </div>
        </div>
    )
}