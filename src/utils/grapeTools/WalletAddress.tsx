import React from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { Button, CardActionArea } from '@mui/material';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import moment from 'moment';
import { PublicKey } from '@solana/web3.js';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
    ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export async function getImageOrFallback(url:string, fallback:string) {
    //console.log(url+" vs "+fallback)
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = url
      img.onload = () => {
        //console.log("image found")
        resolve(url)
        return url
      }
      img.onerror = () => {
        //console.log("image not found")
        reject(`image not found for url ${url}`)
      }
    }).catch(() => {
      return fallback
    })
}

export function timeAgo(blockTime:string){
    try{
        let prettydate = moment.unix(+blockTime).format("MMMM Do YYYY, h:mm a");
                    //console.log("prettyForSaleDate: "+prettyForSaleDate)
        let timeago = moment.duration(moment(new Date()).diff(moment.unix(+blockTime))).asDays().toFixed(0);
        //console.log("Time Ago: "+timeago);
        if (+timeago >= 1){
            prettydate = timeago+' days ago';
        } else{
            let hoursago = moment.duration(moment(new Date()).diff(moment.unix(+blockTime))).asHours().toFixed(0);
            if (+hoursago >= 1){
                prettydate = hoursago+' hours ago';
            } else {
                let minutesAgo = moment.duration(moment(new Date()).diff(moment.unix(+blockTime))).asMinutes().toFixed(0);
                if (+minutesAgo >= 1){
                    prettydate = minutesAgo+' minutes ago';
                } else {
                    let secondsAgo = moment.duration(moment(new Date()).diff(moment.unix(+blockTime))).asSeconds().toFixed(0);
                    if (+secondsAgo >= 1){
                        prettydate = minutesAgo+' seconds ago';
                    }
                }
            }
        }  

        return prettydate;
    }catch(e){
        return blockTime;
    }
}

export function formatBlockTime(date: string, epoch: boolean, time: boolean){
    // TODO: make a clickable date to change from epoch, to time from, to UTC, to local date
    let date_str = new Date(date).toLocaleDateString(); //.toUTCString();
    if (time)
        date_str = new Date(date).toLocaleString();
    if (epoch){
        date_str = new Date(+date * 1000).toLocaleDateString(); //.toUTCString();
        if (time)
            date_str = new Date(+date * 1000).toLocaleString(); //.toUTCString();
    }
    return date_str
    
}

export function trimAddress(addr: string, trim:any) {
    if ((addr) && (addr.length > trim)){
        let start = addr.substring(0, trim);
        let end = addr.substring(addr.length - trim);
        return `${start}...${end}`;
    } else{
        return addr;
    }
}

export function ValidateCurve(address:string){
    //console.log("On Curve: "+PublicKey.isOnCurve(new PublicKey(address).toBuffer()));
    return PublicKey.isOnCurve(new PublicKey(address).toBuffer());
}

export function ValidateAddress(address:any){
    try{
        if (address){
            //let base58 = useMemo(() => props?.toBase58(), [props]) || null;
            if ((address.length >= 32) && 
                (address.length <= 45)){    
                return ValidateCurve(address);
            }
            return false;
        }
    } catch(e){console.log("ERR: "+e)};
    return false;
    
}

export function MakeLinkableAddress(props:any){
    const addr = props?.addr || "";
    const trim = props?.trim;
    const hasextlink = props?.hasextlink || false;
    const hascopy = props?.hascopy || false;
    const fontsize = props?.fontsize || "16px";
    const permalink = props?.permalink || false;
    const isDNS = props?.isDNS || null;
    
    let stri_addr = addr;
    const [open_snackbar, setSnackbarState] = React.useState(false);
    
    const handleCopyClick = () => {
        setSnackbarState(true);
    };

    const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarState(false);
    };
    
    if (addr.length > 0){
        if (trim>0)
            stri_addr = trimAddress(addr, trim)
    }

    function ClipboardAction(){
        if (hascopy){
            return (
                <Button size="small" variant="text">
                    <CopyToClipboard 
                    text={addr} 
                    onCopy={handleCopyClick}
                    >
                        <ContentCopyIcon sx={{fontSize:fontsize, mr:0 }} />
                    </CopyToClipboard>
                    <Snackbar open={open_snackbar} autoHideDuration={2000} message="Copied">
                        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Copied!
                        </Alert>
                    </Snackbar>
                </Button>
            );
        } else{
            return <React.Fragment/>
        }
    }

    function PermalinkAction(){
        if (permalink){
            return (
                <Button size="small" variant="text">
                    <CopyToClipboard 
                    text={window.location.href} 
                    onCopy={handleCopyClick}
                    >
                        <InsertLinkIcon sx={{fontSize:fontsize, ml:1 }} />
                    </CopyToClipboard>
                    <Snackbar open={open_snackbar} autoHideDuration={2000} message="Copied">
                        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        Copied!
                        </Alert>
                    </Snackbar>
                </Button>
            );
        } else{
            return <React.Fragment/>
        }
    }
    
    if (addr.length > 0){
        if (hasextlink){
            return ( 
                <React.Fragment>
                    <ClipboardAction />
                    <Button size="small" variant="text" component="a" href={`https://explorer.solana.com/address/${addr}`} target="_blank">{stri_addr} <OpenInNewIcon sx={{fontSize:fontsize, ml:1}} /></Button>
                    <PermalinkAction />
                </React.Fragment>
            )
        } else {
            return ( 
                <React.Fragment>
                    <ClipboardAction />
                    {isDNS ?
                        <>{addr}</>
                    :
                    <Button size="small" variant="text" component="a" href={`https://explorer.solana.com/address/${addr}`} target="_blank">{stri_addr}</Button>
                    }
                    <PermalinkAction />
                </React.Fragment>
            )
        }
    } else{
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}