import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useSnackbar } from 'notistack';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
//import '@dialectlabs/react-ui/lib/index.css';

//import {    ChatButton,Inbox as DialectInbox, } from '@dialectlabs/react-ui';
//import { BottomChat as DialectBottomChat, DialectUiManagementProvider } from '@dialectlabs/react-ui';
//import { getDialectVariables, GRAPE_BOTTOM_CHAT_ID } from '../utils/grapeTools/ui-contants';
import { ClassNames } from '@emotion/react';

import { 
    MARKET_LOGO
} from '../utils/grapeTools/constants';


import {
    WalletDialogProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-material-ui';

import {
    MenuItem,
    Menu,
    Tooltip,
    Dialog,
    DialogTitle,
    InputBase,
    Paper,
    Container,
    List,
    ListItem,
    ListItemText,
    IconButton
} from '@mui/material';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SearchIcon from '@mui/icons-material/Search';

import { GRAPE_RPC_ENDPOINT } from '../utils/grapeTools/constants';
import { ValidateAddress } from '../utils/grapeTools/WalletAddress'; // global key handling

import { useTranslation } from 'react-i18next';

export interface State extends SnackbarOrigin {
    open: boolean;
}

function getParam(param: string) {
    //return new URLSearchParams(document.location.search).get(param);
    return new URLSearchParams(window.location.search).get(param);
}

interface HeaderProps{
    children?:React.ReactNode;
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '17px',
    backgroundColor: alpha(theme.palette.common.white, 0.015),
    '&:hover': {
        border: '1px solid rgba(255,255,255,0.75)',
        backgroundColor: alpha(theme.palette.common.white, 0.1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: 5,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
        marginLeft: 5,
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: alpha(theme.palette.common.white, 0.25),
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
    },
  }));

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
    ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Header(props: any) {
    const { open_menu } = props;
    const [open_snackbar, setSnackbarState] = React.useState(false);
    const [tokenParam, setTokenParam] = React.useState(getParam('token'));
    const [discordId, setDiscordId] = React.useState(getParam('discord_id'));
    const [userId, setUserId] = React.useState(getParam('user_id'));
    const [providers, setProviders] = React.useState(['Sollet', 'Sollet Extension', 'Phantom','Solflare']);
    const [open_wallet, setOpenWallet] = React.useState(false);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isWalletOpen = Boolean(anchorEl);
    const [newinputpkvalue, setNewInputPKValue] = React.useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const currPath = location.pathname;
    const searchParams = new URLSearchParams(location.search);
    //const currPath = location?.pathname ?? "";
    const { enqueueSnackbar } = useSnackbar();

    const theme: 'dark' | 'light' = 'dark';
    //const DIALECT_PUBLIC_KEY = new PublicKey('D2pyBevYb6dit1oCx6e8vCxFK9mBeYCRe8TTntk2Tm98');
    
    const routes = [
        { name: "Home", path: "/" },
    ]
    
    //Menu
    const menuId = 'primary-wallet-account-menu';
    const menuWalletId = 'primary-fullwallet-account-menu';

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        // this.props.parentCallback("Data from child");
    };

    const handleCloseWallet = (value: any) => {
        setOpenWallet(false);

    };

    function SimpleDialog(props: any) {
        const { onClose, selectedValue, open_wallet } = props;

        const handleCloseWallet = () => {
            onClose(selectedValue);
        };

        const handleListItemClick = (value: any) => {
            onClose(value);
        };

        return (
            <Dialog onClose={handleCloseWallet} aria-labelledby="simple-dialog-title" open={open_wallet}>
                <DialogTitle id="simple-dialog-title">{t('Select Wallet')}</DialogTitle>
                <List>
                    {providers.map((provider) => (
                        <ListItem button onClick={() => handleListItemClick(provider)} key={provider}>
                            <ListItemText primary={provider} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        );
    }

    const handleClickSnackbar = () => {
        enqueueSnackbar(`${t('Copied...')}`,{ variant: 'success' });
        
        handleMenuClose();
        //setSnackbarState(true);
    };
    
    function HeaderChat() {
        const wallet = useWallet();
        const { publicKey } = wallet;
        const theme: 'dark' | 'light' = 'dark';

        return (
            publicKey && (
                <>
                {/*
                <DialectUiManagementProvider>
                    <ChatButton
                        wallet={wallet}
                        dialectId="header-chat-button"
                        network={'mainnet'}
                        rpcUrl={GRAPE_RPC_ENDPOINT}
                        theme={theme}
                        />
                </DialectUiManagementProvider>
                */}
                </>
            )
        );
    }
    
    /*
    function BottomChat() {
        const wallet = useWallet();
        const { publicKey } = wallet;
    
        return (
            publicKey && (
                <ClassNames>
                    {({ css }) => (
                        <Container
                            sx={{
                                zIndex: 'tooltip',
                            }}
                        >
                            <DialectBottomChat
                                dialectId={GRAPE_BOTTOM_CHAT_ID}
                                wallet={wallet}
                                rpcUrl={GRAPE_RPC_ENDPOINT}
                                theme="dark"
                                network="mainnet"
                                variables={getDialectVariables(css, 'popup')}
                            />
                        </Container>
                    )}
                </ClassNames>
            )
        );
    }
    */

    const { t, i18n } = useTranslation();

    function handlePublicKeySubmit(event: any) {
        event.preventDefault();
        //console.log(""+newinputpkvalue+" ("+newinputpkvalue.length+"): " +ValidateAddress(newinputpkvalue));
        if ((newinputpkvalue && newinputpkvalue.length>0 && ValidateAddress(newinputpkvalue))||
            ((newinputpkvalue.toLocaleUpperCase().indexOf(".SOL") > -1) || (newinputpkvalue.slice(0,1) === '@'))){
            navigate({
                pathname: "/"+newinputpkvalue
            },
                { replace: true }
            );
            setNewInputPKValue('');
        } else if (newinputpkvalue && newinputpkvalue.length>0){
            if (newinputpkvalue.toLocaleUpperCase().indexOf("MINT:") > -1){
                let mint = newinputpkvalue.slice(5,newinputpkvalue.length);
                if (ValidateAddress(mint)){
                    navigate({
                        pathname: "/"+mint
                    },
                        { replace: true }
                    );
                    setNewInputPKValue('');
                }
            }
        }else{
            setNewInputPKValue('');
        }
    }

    return (
        <Toolbar
            color="inherit"
            className="grape-art-header"
            >

            <Box display='flex' flexGrow={1}>
                <Button
                    variant="text"
                    color="inherit" 
                    href='/'
                    sx={{borderRadius:'17px',pl:1,pr:1}}
                >
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        display='flex'
                        sx={{ml:1,mr:1}}
                    >
                        <img src={MARKET_LOGO} height="40px" width="137px" className="header-logo" alt="Powered by Grape" />
                    </Typography>
                </Button>
                <Tooltip title={`Back to the Dashboard`}><IconButton sx={{borderRadius:'17px'}} component="a" href='https://verify.grapes.network'><DashboardOutlinedIcon/></IconButton></Tooltip>
            </Box>
            <HeaderChat />
            <div className="grape-wallet-adapter">
                <WalletDialogProvider className="grape-wallet-provider">
                    <WalletMultiButton className="grape-wallet-button" />
                </WalletDialogProvider>
            </div>
        </Toolbar>
        
    );
}

export default Header;
