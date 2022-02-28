import React from 'react';
import MarketPlaceSouvenir from '../../../Admin/Home/Pages/AdminSouvenir/MarketPlaceSouvenir/MarketPlaceSouvenir';
import SouvenirTab from '../../../Admin/Home/Pages/AdminSouvenir/SouvenirMain/SouvenirTabComponents/SouvenirTab';
import SouvenirTabPanel from '../../../Admin/Home/Pages/AdminSouvenir/SouvenirMain/SouvenirTabComponents/SouvenirTabPanel';
import LiveNowAuction from './LiveNowAuction/LiveNowAuction';
import SuperstarLiveNowAuction from './SuperstarLiveNowAuction';
import SuperstarMarketplaceSouvenir from './SuperstarMarketplaceSouvenir';

const SuperstarSouvenir = () => {
    return (
        <div>
            <SouvenirTabPanel>
                <SouvenirTab title="Auction"
                    subtitle="Little About us"
                    icon="far fa-address-card">
                    {/* <LiveNowAuction /> */}
                    <SuperstarLiveNowAuction />
             
                </SouvenirTab>

                <SouvenirTab title="Marketplace"
                    subtitle="Our History"
                    icon="fas fa-hourglass-start">
                    {/* <MarketPlaceSouvenir /> */}
                    <SuperstarMarketplaceSouvenir />
                </SouvenirTab>
            </SouvenirTabPanel>
        </div>
    );
};

export default SuperstarSouvenir;