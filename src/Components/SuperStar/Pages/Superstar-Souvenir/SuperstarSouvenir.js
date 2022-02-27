import React from 'react';
import MarketPlaceSouvenir from '../../../Admin/Home/Pages/AdminSouvenir/MarketPlaceSouvenir/MarketPlaceSouvenir';
import SouvenirTab from '../../../Admin/Home/Pages/AdminSouvenir/SouvenirMain/SouvenirTabComponents/SouvenirTab';
import SouvenirTabPanel from '../../../Admin/Home/Pages/AdminSouvenir/SouvenirMain/SouvenirTabComponents/SouvenirTabPanel';
import LiveNowAuction from './LiveNowAuction/LiveNowAuction';

const SuperstarSouvenir = () => {
    return (
        <div>
            <SouvenirTabPanel>
                <SouvenirTab title="Auction"
                    subtitle="Little About us"
                    icon="far fa-address-card">
                    <LiveNowAuction />
             
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

export default SuperstarSouvenir;