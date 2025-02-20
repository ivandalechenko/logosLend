import React from 'react';
import './Loader.scss';
import { observer } from 'mobx-react-lite';

import loadingStore from '../../loadingStore';

const Loader = () => {
    return (
        <>
            {
                loadingStore.loading && <div className='Loader'>
                    <img src="/loader2.svg" alt="" />
                </div>
            }
        </>
    )
};
export default observer(Loader)

