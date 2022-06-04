import React, { useMemo, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DriveView } from "./Drive/Drive";
import CssBaseline from '@mui/material/CssBaseline';

import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
  AppBar,
} from '@mui/material';

import Header from './Header/Header';
import { SnackbarProvider } from 'notistack';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { Helmet } from 'react-helmet';

import { useTranslation } from 'react-i18next';

import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  GlowWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SlopeWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
  CloverWalletAdapter,
  MathWalletAdapter,
  Coin98WalletAdapter,
  SolongWalletAdapter,
  BitKeepWalletAdapter,
  TokenPocketWalletAdapter,
  BitpieWalletAdapter,
  SafePalWalletAdapter,
  ExodusWalletAdapter
} from '@solana/wallet-adapter-wallets';

//import { mainListItems, secondaryListItems } from './components/SidebarList/SidebarList';
import grapeTheme from  './utils/config/theme'
//import "./App.less";
import { GRAPE_RPC_ENDPOINT, TX_RPC_ENDPOINT } from './utils/grapeTools/constants';

function Copyright(props: any): JSX.Element {
  const { t, i18n } = useTranslation();
    return (
    <Typography sx={{background:'transparent'}} variant="body2" color="text.secondary" align="center" {...props}>
      {t('Powered by Grape | GenesysGo on Solana')}
      {/*
      <Link color="inherit" href="https://verify.grapes.network">
        Grape Network | Dashboard v1.1.5
      </Link>
      */}
    </Typography>
  );
}


function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // You can also provide a custom RPC endpoint
  const network = WalletAdapterNetwork.Mainnet; //.Devnet; //.Mainnet;
  // You can also provide a custom RPC endpoint
  //const endpoint =  useMemo(() => clusterApiUrl(network), [network]); // GRAPE_RPC_ENDPOINT;
  //const endpoint =  GRAPE_RPC_ENDPOINT;
  const endpoint =  TX_RPC_ENDPOINT;
  const wallets = useMemo(() => [

    new PhantomWalletAdapter(),
    new GlowWalletAdapter(),
    new SolflareWalletAdapter(),
    new SlopeWalletAdapter(),
    new LedgerWalletAdapter(),
    new ExodusWalletAdapter(),
    new SolletWalletAdapter({ network }),
    new SolletExtensionWalletAdapter({ network }),
    new TorusWalletAdapter(),
    new CloverWalletAdapter(),
    new MathWalletAdapter(),
    new Coin98WalletAdapter(),
    new SolongWalletAdapter(),
    new BitKeepWalletAdapter(),
    new TokenPocketWalletAdapter(),
    new BitKeepWalletAdapter(),
    new BitpieWalletAdapter(),
    new SafePalWalletAdapter(),
  ], [network]);
  
  return (
    <>
      <Suspense fallback="loading">
          <ThemeProvider theme={grapeTheme}>
              <div className="grape-gradient-background">
              <SnackbarProvider>
                  <ConnectionProvider endpoint={endpoint}>
                      <WalletProvider wallets={wallets} autoConnect>
                      
                      <Grid 
                          sx={{ 
                            flex: 1
                          }}>
                          <CssBaseline />
                          <Router>
                          <AppBar position="fixed" color="primary" style={{ background: 'rgba(0,0,0,0.5)' }}>
                              <Header
                                  open={open} 
                                  toggleDrawer={toggleDrawer}
                              />
                          </AppBar>
                              
                            <Grid
                              component="main"
                              sx={{
                                  mt: 6,
                                  display: 'flex',
                                  flexGrow: 1
                              }}
                              >
                              <Container maxWidth="xl" sx={{ mb: 4 }}>
                                  <Routes>
                                    
                                    <Route path="/*" element={<DriveView />} >
                                        <Route path=":handlekey" element={<DriveView />} />
                                    </Route>

                                    <Route path="*" element={<NotFound />} />
                                  </Routes>
                                  
                                  <Copyright sx={{ mt: 4 }} />
                              </Container>
                            </Grid>
                          </Router>
                      </Grid>
                      
                      </WalletProvider>
                  </ConnectionProvider>
              </SnackbarProvider>
              </div>
          </ThemeProvider>
        </Suspense>
    </>
  );
}

export const NotFound = () => {
  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      <Paper className="grape-paper-background">
        <Grid 
          className="grape-paper" 
          container
          alignContent="center"
          justifyContent="center"
          direction="column">
          <Grid item>
            <Typography 
              align="center"
              variant="h3">
              {'No Grapes Here...'}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
  </div>
  )
}

//export const Dashboard: FC<{ children: ReactNode }> = ({ children }) => {
export default function Dashboard() {
  return <DashboardContent />;
}