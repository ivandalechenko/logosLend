import TXTHeader from '../../components/TXTHeader/TXTHeader';
import './Advanced.scss';
import AdvancedItem from './AdvancedItem/AdvancedItem';

const advancedItems = [
    {
        imgsrc: './img/Advanced/Union.svg',
        title: 'Unified Cross-Chain Arbitrage',
        description: 'Use $LOGOS’s UCCL protocol for cross-chain and intra-exchange arbitrage, exploiting price inefficiencies with gasless, rapid COMET BFT transactions.'
    },
    {
        imgsrc: './img/Advanced/realtime.svg',
        title: 'Real-Time AI Analytics',
        description: 'Gain AI-driven, real-time market insights to spot opportunities instantly across Ethereum, Solana, Avalanche, and more.'
    },
    {
        imgsrc: './img/Advanced/synthetic.svg',
        title: 'Synthetic Asset Trading',
        description: 'Access synthetic assets like gold and oil via UCCL’s gasless, multi-chain platform, expanding opportunities in $LOGOS’s Web3 economy.'
    },
    {
        imgsrc: './img/Advanced/Union.svg',
        title: 'Gasless Flashloans',
        description: 'Access gasless, fast flashloans on $LOGOS Layer 1 for arbitrage and liquidity, cutting costs and boosting efficiency.  '
    }
];

export default () => {
    return (
        <div className='Advanced'>

            <TXTHeader className='Advanced__title' left>
                Logos Advanced Trading
            </TXTHeader>
            <div className='Advanced__block'>
                {advancedItems.map((item, index) => (
                    <AdvancedItem
                        key={index}
                        imgsrc={item.imgsrc}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}