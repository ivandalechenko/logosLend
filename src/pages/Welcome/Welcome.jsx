import { Link, useNavigate } from "react-router-dom";
import "./Welcome.scss";
import { useState, useRef, useEffect } from "react";

const links = [
    {
        img: '/protocol.svg',
        to: 'Protocols',
        text: 'Protocols'
    },
    {
        img: '/visa.svg',
        to: 'Cards',
        text: 'Cards'
    },
    {
        img: '/logo.svg',
        to: 'Introduction',
        text: 'Introduction'
    },
    {
        img: '/wallet.svg',
        to: 'Wallet',
        text: 'Wallet'
    },
    {
        img: '/login.svg',
        to: 'Login',
        text: 'Login'
    }
]

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


export default ({ }) => {

    const [selected, setselected] = useState('');

    const app = useRef(null)
    const navigate = useNavigate();

    useGSAP(
        () => {
            for (let i = 0; i < 5; i++) {
                gsap.fromTo(`.Welcome_selector_item_${i}`, {
                    opacity: 0,
                }, {
                    opacity: 1,
                    delay: .2 * (i + 1),
                    duration: .5
                })
            }
        },
        { scope: app }
    )

    useEffect(() => {
        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                navigate('/Cards', { state: { fromScroll: true } });
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="Welcome" ref={app}>
            <div className='Welcome_selector'>

                <div className='Welcome_selector_decor_stars free_img'>
                    <img src="/stars.svg" alt="" />
                </div>
                <div className='Welcome_selector_decor free_img'>
                    <img src="/welcome.svg" alt="" />
                </div>
                <div className='Welcome_selector_items free_img'>
                    <div className='Welcome_selector_items_inner'>
                        {
                            links.map((link, index) => {
                                return <Link to={`${link.to ? `/${link.to}` : '/Welcome'} `} className={`Welcome_selector_item Welcome_selector_item_${index}`} onMouseEnter={() => { setselected(link.text) }} onMouseLeave={() => { setselected('') }} style={{
                                    order: index * 5
                                }}>
                                    <img src={link.img} alt="" />
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className='Welcome_selector_desc free_img'>
                    <div className='Welcome_selector_desc_inner'>
                        <div className='Welcome__decor_mouse free_img'>
                            <img src="/img/Welcome/mouse.svg" alt="" />
                        </div>
                        <div className='Welcome_selector_desc_item' style={{
                            opacity: selected === 'VISA' ? 1 : .2
                        }}>
                            VISA
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};
