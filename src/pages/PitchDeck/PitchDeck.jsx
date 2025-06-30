import { observer } from 'mobx-react-lite';
import './PitchDeck.scss';
import { useEffect } from 'react';
import loadingStore from '../../loadingStore';

const PitchDeck = observer(() => {
    useEffect(() => {
        loadingStore.setLoading(true);
    }, []);

    return (
        <iframe
            src={`https://embed.figma.com/deck/DAAtwWGfuxnj5MtP0xONxN/Untitled?node-id=1-115&embed-host=share&hide-ui=1`}
            className='PitchDeck'
            onLoad={() => { loadingStore.setLoading(false) }}
            style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                width: '100%',
                height: '90%'
            }}
            allowFullScreen
        ></iframe>
    );
});

export default PitchDeck;