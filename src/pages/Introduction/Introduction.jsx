import IntroductionText from '../IntroductionText/IntroductionText';
import './Introduction.scss';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';

export default () => {

    const [activeLine, setActiveLine] = useState(0);

    const glist = useRef(null)
    const app = useRef(null)

    useGSAP(
        () => {
            gsap.to(`.Introduction_block_2`, {
                top: 0, // Убираем любое движение вниз
                scrollTrigger: {
                    trigger: '.Introduction_block_large',
                    // markers: true,
                    start: "top top", // Фиксируем при достижении верха
                    end: "bottom bottom", // Разрешаем выход при конце секции
                    pin: true, // Закрепляем
                    pinSpacing: false, // Отключаем добавление пустого пространства
                }
            })

            gsap.fromTo(`.Introduction_roadmap_list`, {
                left: 0
            }, {
                left: -glist.current.getBoundingClientRect().width * (window.innerWidth < 700 ? 7 : 1), // Убираем любое движение вниз
                scrollTrigger: {
                    scrub: 1,
                    trigger: '.Introduction_block_large',
                    markers: true,
                    start: "top top", // Фиксируем при достижении верха
                    end: "bottom bottom", // Разрешаем выход при конце секции
                }
            })



        },
        { scope: app }
    )



    return (
        <div className='Introduction' ref={app}>
            <div className='Introduction_block'>
                <h2 className='Introduction__title'>
                    Logos Vault
                </h2>
                <p className='Introduction__description'>
                    The Logos Vault provides institutional-grade cold storage for tokens, NFTs, and partnered assets while enabling staking directly from cold storage. Users can turn any SD card into a hardware wallet with Decentralized HSM encryption, while Liquid ID and Secure Enclave Vaults protect transactions and private keys.
                </p>
                <div className='Introduction__join'>
                    <p className='Introduction__join-title'>Join The Waitlist!</p>
                    {/* <button>Example@gmail.com <img src="/img/buttonWhitepapper.svg" alt="" /></button> */}
                    <div className='Introduction__join-input'>
                        <input type="email" placeholder='Example@gmail.com' />
                        <button>Sign Up <img src="/img/buttonWhitepapper.svg" alt="" /></button>
                    </div>
                </div>
                <div className='Introduction__decor'>
                    <img src="./meow.svg" alt="" />
                </div>
            </div>
            <div className='Introduction_block_large'>

                <div className='Introduction_block Introduction_block_2'>
                    <h2 className='Introduction__title'>
                        Roadmap
                    </h2>
                    <p className='Introduction__description'>
                        The Logos Vault provides institutional-grade cold storage for tokens, NFTs, and partnered assets while enabling staking directly from cold storage. Users can turn any SD card into a hardware wallet with Decentralized HSM encryption, while Liquid ID and Secure Enclave Vaults protect transactions and private keys.
                    </p>
                    <div className='Introduction_roadmap_list' ref={glist}>
                        {
                            [
                                {
                                    date: `Q1 2025`,
                                    type: 'Test Mainnet'
                                },
                                {
                                    date: `Q1 2025`,
                                    type: 'TGE'
                                },
                                {
                                    date: `Q2 2025`,
                                    type: 'Visa Card Distribution'
                                },
                                {
                                    date: `Q2 2025`,
                                    type: 'Memechain/Socialfi Release'
                                },
                                {
                                    date: `Q22025`,
                                    type: 'Ecosystem Release'
                                },
                                {
                                    date: `Q32025`,
                                    type: 'Staking Protocol Release'
                                },
                                {
                                    date: `Q32025`,
                                    type: 'Partnership Expansion'
                                },
                                {
                                    date: `Q42025`,
                                    type: 'Interactive Global Adoption'
                                }
                            ].map((rel, index) => {
                                return <div className='Introduction_roadmap_element'>
                                    <div className='Introduction_roadmap_element_num'>
                                        0{index + 1}
                                    </div>
                                    <div className='Introduction_roadmap_element_arrow'>
                                        <img src="/arrowInRound.svg" alt="" />
                                    </div>
                                    <div className='Introduction_roadmap_element_info'>
                                        <div className='Introduction_roadmap_element_time'>
                                            {rel.date}
                                        </div>
                                        <div className='Introduction_roadmap_element_event'>
                                            {rel.type}
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='Introduction_block'>
                <IntroductionText />
            </div>
        </div>
    )
}