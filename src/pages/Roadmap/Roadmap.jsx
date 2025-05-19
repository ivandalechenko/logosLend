import './Roadmap.scss';
import { useRef, useState, useEffect } from 'react';
import TXTHeader from '../../components/TXTHeader/TXTHeader';
import TXTPlain from '../../components/TXTPlain/TXTPlain';
import TXTSubheader from '../../components/TXTSubheader/TXTSubheader';

export default () => {
    const glist = useRef(null);
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(() => {
        return window.innerWidth <= 768 ? 0 : 0;
    });
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);

    useEffect(() => {
        const container = containerRef.current;

        const handleWheel = (e) => {
            e.preventDefault();
            if (glist.current) {
                const totalWidth = glist.current.scrollWidth - glist.current.clientWidth;
                const newPosition = Math.max(
                    -(totalWidth + 20),
                    Math.min(0, scrollPosition - e.deltaY)
                );
                setScrollPosition(newPosition);
            }
        };

        const handleTouchStart = (e) => {
            setIsDragging(true);
            setStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e) => {
            if (!isDragging || !glist.current) return;

            const currentY = e.touches[0].clientY;
            const deltaY = (startY - currentY) * 2;
            setStartY(currentY);

            const totalWidth = glist.current.scrollWidth - glist.current.clientWidth;
            const newPosition = Math.max(
                -(totalWidth + 20),
                Math.min(0, scrollPosition - deltaY)
            );

            setScrollPosition(newPosition);
            e.preventDefault();
        };

        const handleTouchEnd = () => {
            setIsDragging(false);
        };

        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
            container.addEventListener('touchstart', handleTouchStart, { passive: true });
            container.addEventListener('touchmove', handleTouchMove, { passive: false });
            container.addEventListener('touchend', handleTouchEnd);
            container.addEventListener('touchcancel', handleTouchEnd);
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchmove', handleTouchMove);
                container.removeEventListener('touchend', handleTouchEnd);
                container.removeEventListener('touchcancel', handleTouchEnd);
            }
        };
    }, [scrollPosition, isDragging, startY]);

    return (
        <div className='Roadmap' ref={containerRef}>
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
                                date: `2025`,
                                type: 'TGE'
                            },
                            {
                                date: `Q1`,
                                type: 'Cross-chain Builders Portal & Hackathon Events'
                            },
                            {
                                date: `Q1`,
                                type: 'Cross-Chain Wallet'
                            },
                            {
                                date: `Q2 2025`,
                                type: 'Visa Card Distribution'
                            },
                            {
                                date: `Q2 2025`,
                                type: 'Meme chain / Social fi Release'
                            },
                            {
                                date: `Q2`,
                                type: 'wide-scale integration for web3 Ecosystems and Exchanges'
                            },
                            {
                                date: `Q2`,
                                type: 'the next gen security / digital asset storage'
                            },
                            {
                                date: `Q2`,
                                type: 'Staking protocol release'
                            },
                            {
                                date: `Q4`,
                                type: 'wide-scale integration with web2 Merchants & Consumers'
                            },
                            {
                                date: `Q4`,
                                type: 'synthetic assets release'
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