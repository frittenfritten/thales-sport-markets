export const parlayMarketsAMMContract = {
    addresses: {
        5: 'TBD',
        10: 'TBD',
        42: 'TBD',
        420: '0xc9183e3306a06e64c2a83e655756f70a83152536',
    },
    abi: [
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_thalesAMM', type: 'address' },
                { indexed: false, internalType: 'address', name: '_stakingThales', type: 'address' },
                { indexed: false, internalType: 'address', name: '_safeBox', type: 'address' },
                { indexed: false, internalType: 'address', name: '_referrals', type: 'address' },
                { indexed: false, internalType: 'address', name: '_parlayMarketData', type: 'address' },
            ],
            name: 'AddressesSet',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'receiver', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'ExtraAmountTransferredDueToCancellation',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'market', type: 'address' },
                { indexed: false, internalType: 'address[]', name: 'markets', type: 'address[]' },
                { indexed: false, internalType: 'uint256[]', name: 'positions', type: 'uint256[]' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'sUSDpaid', type: 'uint256' },
            ],
            name: 'NewParlayMarket',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'oldOwner', type: 'address' },
                { indexed: false, internalType: 'address', name: 'newOwner', type: 'address' },
            ],
            name: 'OwnerChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'newOwner', type: 'address' }],
            name: 'OwnerNominated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'market', type: 'address' },
                { indexed: false, internalType: 'address', name: 'account', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'sUSDPaid', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'sUSDAfterFees', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'totalQuote', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'initialQuote', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'skewImpact', type: 'uint256' },
            ],
            name: 'ParlayMarketCreated',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: '_parlayOwner', type: 'address' },
                { indexed: false, internalType: 'bool', name: '_userWon', type: 'bool' },
            ],
            name: 'ParlayResolved',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'bool', name: 'isPaused', type: 'bool' }],
            name: 'PauseChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'address', name: 'refferer', type: 'address' },
                { indexed: false, internalType: 'address', name: 'trader', type: 'address' },
                { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'volume', type: 'uint256' },
            ],
            name: 'ReferrerPaid',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'max_amount', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'max_odds', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_parlayAMMFee', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_safeBoxImpact', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: '_referrerFee', type: 'uint256' },
            ],
            name: 'SetAmounts',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'sUSD', type: 'address' }],
            name: 'SetSUSD',
            type: 'event',
        },
        { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'uint256', name: 'index', type: 'uint256' },
                { internalType: 'uint256', name: 'pageSize', type: 'uint256' },
            ],
            name: 'activeParlayMarkets',
            outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_sportMarkets', type: 'address[]' },
                { internalType: 'uint256[]', name: '_positions', type: 'uint256[]' },
                { internalType: 'uint256', name: '_sUSDPaid', type: 'uint256' },
                { internalType: 'uint256', name: '_additionalSlippage', type: 'uint256' },
                { internalType: 'uint256', name: '_expectedPayout', type: 'uint256' },
            ],
            name: 'buyFromParlay',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_sportMarkets', type: 'address[]' },
                { internalType: 'uint256[]', name: '_positions', type: 'uint256[]' },
                { internalType: 'uint256', name: '_sUSDPaid', type: 'uint256' },
                { internalType: 'uint256', name: '_additionalSlippage', type: 'uint256' },
                { internalType: 'uint256', name: '_expectedPayout', type: 'uint256' },
                { internalType: 'address', name: 'collateral', type: 'address' },
                { internalType: 'address', name: '_referrer', type: 'address' },
            ],
            name: 'buyFromParlayWithDifferentCollateralAndReferrer',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_sportMarkets', type: 'address[]' },
                { internalType: 'uint256[]', name: '_positions', type: 'uint256[]' },
                { internalType: 'uint256', name: '_sUSDPaid', type: 'uint256' },
            ],
            name: 'buyQuoteFromParlay',
            outputs: [
                { internalType: 'uint256', name: 'sUSDAfterFees', type: 'uint256' },
                { internalType: 'uint256', name: 'totalBuyAmount', type: 'uint256' },
                { internalType: 'uint256', name: 'totalQuote', type: 'uint256' },
                { internalType: 'uint256', name: 'initialQuote', type: 'uint256' },
                { internalType: 'uint256', name: 'skewImpact', type: 'uint256' },
                { internalType: 'uint256[]', name: 'finalQuotes', type: 'uint256[]' },
                { internalType: 'uint256[]', name: 'amountsToBuy', type: 'uint256[]' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_sportMarkets', type: 'address[]' },
                { internalType: 'uint256[]', name: '_positions', type: 'uint256[]' },
                { internalType: 'uint256', name: '_sUSDPaid', type: 'uint256' },
                { internalType: 'address', name: '_collateral', type: 'address' },
            ],
            name: 'buyQuoteFromParlayWithDifferentCollateral',
            outputs: [
                { internalType: 'uint256', name: 'collateralQuote', type: 'uint256' },
                { internalType: 'uint256', name: 'sUSDAfterFees', type: 'uint256' },
                { internalType: 'uint256', name: 'totalBuyAmount', type: 'uint256' },
                { internalType: 'uint256', name: 'totalQuote', type: 'uint256' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_sportMarkets', type: 'address[]' },
                { internalType: 'uint256[]', name: '_positions', type: 'uint256[]' },
                { internalType: 'uint256', name: '_sUSDToPay', type: 'uint256' },
            ],
            name: 'canCreateParlayMarket',
            outputs: [{ internalType: 'bool', name: 'canBeCreated', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'curveOnrampEnabled',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'curveSUSD',
            outputs: [{ internalType: 'contract ICurveSUSD', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'dai',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_parlayMarket', type: 'address' }],
            name: 'exercisableSportPositionsInParlay',
            outputs: [
                { internalType: 'bool', name: 'isExercisable', type: 'bool' },
                { internalType: 'address[]', name: 'exercisableMarkets', type: 'address[]' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_parlayMarket', type: 'address' }],
            name: 'exerciseParlay',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_parlayMarket', type: 'address' },
                { internalType: 'address', name: '_sportMarket', type: 'address' },
            ],
            name: 'exerciseSportMarketInParlay',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address[]', name: '_parlayMarkets', type: 'address[]' }],
            name: 'expireMarkets',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        { inputs: [], name: 'initNonReentrant', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'address', name: '_owner', type: 'address' },
                { internalType: 'contract ISportsAMM', name: '_sportsAmm', type: 'address' },
                { internalType: 'contract ISportPositionalMarketManager', name: '_sportManager', type: 'address' },
                { internalType: 'uint256', name: '_parlayAmmFee', type: 'uint256' },
                { internalType: 'uint256', name: '_maxSupportedAmount', type: 'uint256' },
                { internalType: 'uint256', name: '_maxSupportedOdds', type: 'uint256' },
                { internalType: 'contract IERC20Upgradeable', name: '_sUSD', type: 'address' },
                { internalType: 'address', name: '_safeBox', type: 'address' },
                { internalType: 'uint256', name: '_safeBoxImpact', type: 'uint256' },
            ],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_parlayMarket', type: 'address' }],
            name: 'isActiveParlay',
            outputs: [{ internalType: 'bool', name: 'isActiveParlayMarket', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'lastPauseTime',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxSupportedAmount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'maxSupportedOdds',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'nominateNewOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'nominatedOwner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'parlayAmmFee',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'parlayMarketData',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'parlayMarketMastercopy',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'parlaySize',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'paused',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'reducedFeesEnabled',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'referrals',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'referrerFee',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_parlayMarket', type: 'address' }],
            name: 'resolvableSportPositionsInParlay',
            outputs: [
                { internalType: 'bool', name: 'isAnyResolvable', type: 'bool' },
                { internalType: 'address[]', name: 'resolvableMarkets', type: 'address[]' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'resolveParlay', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [{ internalType: 'address', name: '', type: 'address' }],
            name: 'resolvedParlay',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address payable', name: 'account', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'retrieveSUSDAmount',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sUSD',
            outputs: [{ internalType: 'contract IERC20Upgradeable', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'safeBox',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'safeBoxImpact',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_sportsAMM', type: 'address' },
                { internalType: 'contract IStakingThales', name: '_stakingThales', type: 'address' },
                { internalType: 'address', name: '_safeBox', type: 'address' },
                { internalType: 'address', name: '_referrals', type: 'address' },
                { internalType: 'address', name: '_parlayMarketData', type: 'address' },
            ],
            name: 'setAddresses',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'uint256', name: '_maxSupportedAmount', type: 'uint256' },
                { internalType: 'uint256', name: '_maxSupportedOdds', type: 'uint256' },
                { internalType: 'uint256', name: '_parlayAMMFee', type: 'uint256' },
                { internalType: 'uint256', name: '_safeBoxImpact', type: 'uint256' },
                { internalType: 'uint256', name: '_referrerFee', type: 'uint256' },
            ],
            name: 'setAmounts',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_curveSUSD', type: 'address' },
                { internalType: 'address', name: '_dai', type: 'address' },
                { internalType: 'address', name: '_usdc', type: 'address' },
                { internalType: 'address', name: '_usdt', type: 'address' },
                { internalType: 'bool', name: '_curveOnrampEnabled', type: 'bool' },
                { internalType: 'uint256', name: '_maxAllowedPegSlippagePercentage', type: 'uint256' },
            ],
            name: 'setCurveSUSD',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'setOwner',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bool', name: '_reducedFeesEnabled', type: 'bool' }],
            name: 'setParameters',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: '_parlayMarketMastercopy', type: 'address' }],
            name: 'setParlayMarketMastercopies',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bool', name: '_paused', type: 'bool' }],
            name: 'setPaused',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address[]', name: '_parlayMarkets', type: 'address[]' },
                { internalType: 'bool', name: '_paused', type: 'bool' },
            ],
            name: 'setPausedMarkets',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sportManager',
            outputs: [{ internalType: 'contract ISportPositionalMarketManager', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'sportsAmm',
            outputs: [{ internalType: 'contract ISportsAMM', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'stakingThales',
            outputs: [{ internalType: 'contract IStakingThales', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'address', name: 'proxyAddress', type: 'address' }],
            name: 'transferOwnershipAtInit',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'receiver', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
                { internalType: 'bool', name: 'dueToCancellation', type: 'bool' },
            ],
            name: 'transferRestOfSUSDAmount',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: 'receiver', type: 'address' },
                { internalType: 'uint256', name: 'amount', type: 'uint256' },
            ],
            name: 'transferSusdTo',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'address', name: '_account', type: 'address' },
                { internalType: 'bool', name: '_userWon', type: 'bool' },
            ],
            name: 'triggerResolvedEvent',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'usdc',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'usdt',
            outputs: [{ internalType: 'address', name: '', type: 'address' }],
            stateMutability: 'view',
            type: 'function',
        },
    ],
};

export default parlayMarketsAMMContract;
