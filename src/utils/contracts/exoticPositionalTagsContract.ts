export const exoticPositionalTagsContract = {
    addresses: {
        10: '0xd550bD32B434bA870642F94710eb220f542Ed3F3',
        69: '0x912e29c66291e10565df22b2857EACC2Ea6A84A1',
    },
    abi: [
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'string', name: 'label', type: 'string' },
                { indexed: false, internalType: 'uint256', name: 'number', type: 'uint256' },
            ],
            name: 'NewTagAdded',
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
            inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
            name: 'Paused',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'uint256', name: 'number', type: 'uint256' },
                { indexed: false, internalType: 'string', name: 'old_label', type: 'string' },
                { indexed: false, internalType: 'string', name: 'label', type: 'string' },
            ],
            name: 'TagLabelChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'string', name: 'label', type: 'string' },
                { indexed: false, internalType: 'uint256', name: 'old_number', type: 'uint256' },
                { indexed: false, internalType: 'uint256', name: 'number', type: 'uint256' },
            ],
            name: 'TagNumberChanged',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: 'string', name: '_label', type: 'string' },
                { indexed: false, internalType: 'uint256', name: '_number', type: 'uint256' },
            ],
            name: 'TagRemoved',
            type: 'event',
        },
        {
            anonymous: false,
            inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
            name: 'Unpaused',
            type: 'event',
        },
        { inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [
                { internalType: 'string', name: '_label', type: 'string' },
                { internalType: 'uint256', name: '_number', type: 'uint256' },
            ],
            name: 'addTag',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'string', name: '_label', type: 'string' },
                { internalType: 'uint256', name: '_number', type: 'uint256' },
            ],
            name: 'editTagLabel',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'string', name: '_label', type: 'string' },
                { internalType: 'uint256', name: '_number', type: 'uint256' },
            ],
            name: 'editTagNumber',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getAllTags',
            outputs: [
                { internalType: 'string[]', name: '', type: 'string[]' },
                { internalType: 'uint256[]', name: '', type: 'uint256[]' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getAllTagsLabels',
            outputs: [{ internalType: 'string[]', name: '', type: 'string[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getAllTagsNumbers',
            outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
            name: 'getTagByIndex',
            outputs: [
                { internalType: 'string', name: '', type: 'string' },
                { internalType: 'uint256', name: '', type: 'uint256' },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_index', type: 'uint256' }],
            name: 'getTagIndexNumber',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_number', type: 'uint256' }],
            name: 'getTagLabel',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'string', name: '_label', type: 'string' }],
            name: 'getTagNumber',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_number', type: 'uint256' }],
            name: 'getTagNumberIndex',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getTagsCount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        { inputs: [], name: 'initNonReentrant', outputs: [], stateMutability: 'nonpayable', type: 'function' },
        {
            inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
            name: 'initialize',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                { internalType: 'string', name: '_label', type: 'string' },
                { internalType: 'uint256', name: '_number', type: 'uint256' },
            ],
            name: 'isValidTag',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'string', name: '_label', type: 'string' }],
            name: 'isValidTagLabel',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_number', type: 'uint256' }],
            name: 'isValidTagNumber',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
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
            name: 'paused',
            outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '_number', type: 'uint256' }],
            name: 'removeTag',
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
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'tagIndexNumber',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'tagLabel',
            outputs: [{ internalType: 'string', name: '', type: 'string' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
            name: 'tagNumber',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            name: 'tagNumberIndex',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'tagsCount',
            outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
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
    ],
};

export default exoticPositionalTagsContract;