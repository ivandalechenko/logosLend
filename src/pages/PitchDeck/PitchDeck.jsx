import { observer } from 'mobx-react-lite';
import './PitchDeck.scss';
import { useEffect } from 'react';
import loadingStore from '../../loadingStore';
const siteUrl = import.meta.env.VITE_SITE_URL;

export default observer(() => {

    useEffect(() => {
        loadingStore.setLoading(true)
    }, [])

    return (
        <iframe
            src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${siteUrl}/pd.pdf#toolbar=0&scrollbar=0`}
            className='PitchDeck'
            onLoad={() => { loadingStore.setLoading(false) }}
        ></iframe>
    )
})