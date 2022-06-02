import STATIC_LOGO from '../../public/grape_white_logo.svg';

export const TX_RPC_ENDPOINT = process.env.REACT_APP_API_TX_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com';
export const GRAPE_RPC_ENDPOINT = process.env.REACT_APP_API_GRAPE_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com';
export const THEINDEX_RPC_ENDPOINT = process.env.REACT_APP_API_THEINDEX_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com';
export const SOFLARE_NOTIFICATIONS_API_KEY = process.env.REACT_APP_API_KEY_SOLFLARE_NOTIFICATIONS || '';

//export const GRAPE_DRIVE = '/';

export const GRAPE_DRIVE = '/?storage=';

export const GRAPE_RPC_REFRESH = 25000;
export const GRAPE_TREASURY = 'GrapevviL94JZRiZwn2LjpWtmDacXU8QhAJvzpUMMFdL';

export const MARKET_LOGO = STATIC_LOGO;