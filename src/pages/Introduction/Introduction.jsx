import './Introduction.scss';
export default () => {return (
    <div className='Introduction'>
        <h2 className='Introduction__title'>Logos Vault</h2>
        <p className='Introduction__description'>The Logos Vault provides institutional-grade cold storage for tokens, NFTs, and partnered assets while enabling staking directly from cold storage. Users can turn any SD card into a hardware wallet with Decentralized HSM encryption, while Liquid ID and Secure Enclave Vaults protect transactions and private keys.</p>
        <div className='Introduction__join'>
            <p className='Introduction__join-title'>Join The Waitlist!</p>
            {/* <button>Example@gmail.com <img src="/img/buttonWhitepapper.svg" alt="" /></button> */}
            <div className='Introduction__join-input'>
                <input type="email" placeholder='Example@gmail.com'/>
                <button>Sign Up <img src="/img/buttonWhitepapper.svg" alt="" /></button>
            </div>
        </div>
        <div className='Introduction__decor'>
            <img src="./vaultDecor.webp" alt="" />
        </div>
    </div>
)}