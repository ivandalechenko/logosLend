import './Roadmap.scss';
import { useRef, useState, useEffect } from 'react';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import TXTSubheader from '../../components/TXTSubheader/TXTSubheader';

export default () => {
    const glist = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (glist.current) {
                // Get the total scrollable width of the roadmap list
                const totalWidth = glist.current.scrollWidth - glist.current.clientWidth;

                // Calculate how far we've scrolled down as a percentage
                const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));

                // Move the list based on scroll position
                const moveAmount = -(totalWidth * scrollPercent);
                setScrollPosition(moveAmount);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='Roadmap'>
            <div className='Introduction_block'>
                <TXTHeader>
                    Roadmap
                </TXTHeader>
                <TXTPlain tac mac style={{
                    maxWidth: '700px',
                    '@media (max-width: 500px)': {
                        maxWidth: '300px'
                    }
                }}>
                    The Logos Vault provides institutional-grade cold storage for tokens, NFTs, and partnered assets while enabling staking directly from cold storage. Users can turn any SD card into a hardware wallet with Decentralized HSM encryption, while Liquid ID and Secure Enclave Vaults protect transactions and private keys.
                </TXTPlain>
                <div className='Introduction_roadmap_list'
                    ref={glist}
                    style={{
                        transform: `translateX(${scrollPosition}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}>
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
    );
};