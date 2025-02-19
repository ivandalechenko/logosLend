import Advanced from '../Advanced/Advanced';
import './WhyExchange.scss';
export default () => {
    return (
        <>
            <div className='WhyExchange'>
                <div className='WhyExchange__content'>
                    <h2 className='WhyExchange__content-title'>Why Exchanges Love LOGOS</h2>
                    <p className='WhyExchange__content-description'>Exchanges trust us for our enhanced liquidity and trading efficiency, connecting buyers and sellers seamlessly to boost market depth and reduce spreads. Our robust security solutions, including SAFU vaults and compliance tools, protect user funds and ensure regulatory adherence, building investor trust. We offer user-friendly, customizable integrations and cost-effective solutions that help exchanges scale globally while minimizing costs. With innovative features like Visa payments and memecoin support, we help exchanges thrive in fast-evolving markets.</p>
                </div>
                <div className='WhyExchange__decor'>
                    <div className='WhyExchange__decor-logo free_img'>
                        <img src="./logo.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-eth free_img'>
                        <img src="./img/eth.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-avax free_img'>
                        <img src="./img/avax.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-sol free_img'>
                        <img src="./img/sol.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-bera free_img'>
                        <img src="./img/bera.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-border free_img'>
                        <img src="./img/borderDecor.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-circleup free_img'>
                        <img src="./img/circleUp.svg" alt="" />
                    </div>
                    <div className='WhyExchange__decor-circledown free_img'>
                        <img src="./img/circleDown.svg" alt="" />
                    </div>
                </div>
            </div>
            <Advanced />
        </>
    )
}