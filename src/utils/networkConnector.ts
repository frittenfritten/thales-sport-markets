import { ethers, Signer } from 'ethers';
import { NetworkSettings } from 'types/network';
import sportMarketManagerContract from 'utils/contracts/sportPositionalMarketManagerContract';
import sportMarketDataContract, {
    sportPositionalMarketDataContract,
} from 'utils/contracts/sportPositionalMarketDataContract';
import sportsAMMContract from 'utils/contracts/sportsAMMContract';
import sUSDContract from 'utils/contracts/sUSDContract';
import { NetworkIdByName } from './network';
import theRundownConsumerContract from 'utils/contracts/theRundownConsumerContract';
import multipleCollateral from './contracts/multipleCollateralContract';
import overtimeVoucherContract from './contracts/overtimeVoucherContract';

type NetworkConnector = {
    initialized: boolean;
    provider: ethers.providers.Provider | undefined;
    signer: Signer | undefined;
    setNetworkSettings: (networkSettings: NetworkSettings) => void;
    paymentTokenContract?: ethers.Contract;
    multipleCollateral?: Array<ethers.Contract | undefined>;
    marketManagerContract?: ethers.Contract;
    marketDataContract?: ethers.Contract;
    sportPositionalMarketDataContract?: ethers.Contract;
    sportMarketManagerContract?: ethers.Contract;
    sportMarketDataContract?: ethers.Contract;
    sportsAMMContract?: ethers.Contract;
    theRundownConsumerContract?: ethers.Contract;
    thalesBondsContract?: ethers.Contract;
    tagsContract?: ethers.Contract;
    exoticUsdContract?: ethers.Contract;
    sUSDContract?: ethers.Contract;
    overtimeVoucherContract?: ethers.Contract;
};

// @ts-ignore
const networkConnector: NetworkConnector = {
    initialized: false,
    setNetworkSettings: function (networkSettings: NetworkSettings) {
        this.initialized = true;
        this.signer = networkSettings.signer;
        this.provider = networkSettings.provider;
        this.sportPositionalMarketDataContract = initializeContract(sportPositionalMarketDataContract, networkSettings);
        this.sportMarketManagerContract = initializeContract(sportMarketManagerContract, networkSettings);
        this.sportMarketDataContract = initializeContract(sportMarketDataContract, networkSettings);
        this.theRundownConsumerContract = initializeContract(theRundownConsumerContract, networkSettings);
        this.sportsAMMContract = initializeContract(sportsAMMContract, networkSettings);
        this.sUSDContract = initializeContract(sUSDContract, networkSettings);
        this.overtimeVoucherContract = initializeContract(overtimeVoucherContract, networkSettings);

        this.multipleCollateral = [
            initializeContract(multipleCollateral['sUSD'], networkSettings),
            initializeContract(multipleCollateral['DAI'], networkSettings),
            initializeContract(multipleCollateral['USDC'], networkSettings),
            initializeContract(multipleCollateral['USDT'], networkSettings),
        ];
    },
};

const initializeContract = (contract: any, networkSettings: NetworkSettings) =>
    contract.addresses[networkSettings.networkId || NetworkIdByName.OptimismMainnet] !== ''
        ? new ethers.Contract(
              contract.addresses[networkSettings.networkId || NetworkIdByName.OptimismMainnet],
              contract.abi,
              networkConnector.provider
          )
        : undefined;

export default networkConnector;
