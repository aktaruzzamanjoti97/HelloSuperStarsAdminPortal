import React from 'react';
// import LiveNowSouvenir from './SouvenirTabComponents/LiveNowSouvenir/LiveNowSouvenir';
import './SouvenirMain.css';
import SouvenirTab from './SouvenirTabComponents/SouvenirTab';
import SouvenirTabPanel from './SouvenirTabComponents/SouvenirTabPanel';
// import MarketPlaceSouvenir from './SouvenirTabComponents/MarketPlaceSouvenir/MarketPlaceSouvenir';
// import LiveNowSouvenir from '../Content/LiveNowSouvenir';
import MarketPlaceSouvenir from '../MarketPlaceSouvenir/MarketPlaceSouvenir';
import LiveNowSouvenir from '../Content/LiveNowSouvenir';

const SouvenirMain = () => {
    return (
        <div>

            <SouvenirTabPanel>
                <SouvenirTab title="Auction"
                    subtitle="Little About us"
                    icon="far fa-address-card">
                    {/* <LiveNowSouvenir /> */}
                    <LiveNowSouvenir />
                    {/* <p>This is Auction</p> */}
                </SouvenirTab>

                <SouvenirTab title="Marketplace"
                    subtitle="Our History"
                    icon="fas fa-hourglass-start">
                    <MarketPlaceSouvenir />
                </SouvenirTab>
            </SouvenirTabPanel>
        </div>
    );
};

export default SouvenirMain; 