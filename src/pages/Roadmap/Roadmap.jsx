import { useGSAP } from '@gsap/react';
import './Roadmap.scss';
import gsap from 'gsap';
import { useRef } from 'react';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import TXTSubheader from '../../components/TXTSubheader/TXTSubheader';
export default () => {


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
                    // markers: true,
                    start: "top top", // Фиксируем при достижении верха
                    end: "bottom bottom", // Разрешаем выход при конце секции
                }
            })
        },
        { scope: app }
    )
    return (
        <div className='Roadmap' ref={app}>
            <div className='Introduction_block_large'>
                <div className='Introduction_block Introduction_block_2'>
                    <TXTHeader>
                        Roadmap
                    </TXTHeader>
                    <TXTPlain tac mac style={{
                        maxWidth: '700px'
                    }}>
                        The Logos Vault provides institutional-grade cold storage for tokens, NFTs, and partnered assets while enabling staking directly from cold storage. Users can turn any SD card into a hardware wallet with Decentralized HSM encryption, while Liquid ID and Secure Enclave Vaults protect transactions and private keys.
                    </TXTPlain>
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
                                        <TXTSubheader wide>
                                            0{index + 1}
                                        </TXTSubheader>
                                    </div>
                                    <div className='Introduction_roadmap_element_arrow'>
                                        <img src="/arrowInRound.svg" alt="" />
                                    </div>
                                    <div className='Introduction_roadmap_element_info'>
                                        <TXTPlain tac>
                                            {rel.date}
                                        </TXTPlain>

                                        <TXTSubheader w100>
                                            {rel.type}
                                        </TXTSubheader>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}