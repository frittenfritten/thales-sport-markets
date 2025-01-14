import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsAppReady } from 'redux/modules/app';
import { RootState } from 'redux/rootReducer';
import styled from 'styled-components';
import { getNetworkId } from 'redux/modules/wallet';
import UnsupportedNetwork from 'components/UnsupportedNetwork';
import { isNetworkSupported } from 'utils/network';
import { FlexDivColumn } from 'styles/common';
import DappHeader from './DappHeader';
import Loader from 'components/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DappFooter from './DappFooter';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import queryString from 'query-string';
import { getReferralId, setReferralId } from 'utils/referral';
import { useLocation } from 'react-router-dom';

const DappLayout: React.FC = ({ children }) => {
    const isAppReady = useSelector((state: RootState) => getIsAppReady(state));
    const networkId = useSelector((state: RootState) => getNetworkId(state));
    const { trackPageView } = useMatomo();

    const location = useLocation();
    const queryParams: { referralId?: string } = queryString.parse(location.search);

    useEffect(() => {
        if (queryParams.referralId) {
            setReferralId(queryParams.referralId);
        }
    }, [queryParams.referralId]);

    useEffect(() => {
        const customDimensions = [
            {
                id: 1,
                value: networkId ? networkId?.toString() : '',
            },
        ];

        const referralId = getReferralId();
        if (referralId) {
            customDimensions.push({
                id: 2,
                value: referralId,
            });
        }

        trackPageView({ customDimensions });
    }, [networkId, trackPageView]);

    return (
        <>
            {isAppReady ? (
                networkId && !isNetworkSupported(networkId) ? (
                    <UnsupportedNetwork />
                ) : (
                    <Background>
                        <Wrapper>
                            <DappHeader />
                            {children}
                            <DappFooter />
                        </Wrapper>
                        <ToastContainer theme={'colored'} />
                    </Background>
                )
            ) : (
                <Loader />
            )}
        </>
    );
};

const Background = styled.section`
    min-height: 100vh;
    background: ${(props) => props.theme.background.primary};
    color: ${(props) => props.theme.textColor.primary};
`;

const Wrapper = styled(FlexDivColumn)`
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 0px;
    max-width: 1700px;
    min-height: 100vh;
    @media (max-width: 1260px) {
        padding: 40px 20px;
    }
    @media (max-width: 767px) {
        padding: 40px 10px;
    }
`;

export default DappLayout;
