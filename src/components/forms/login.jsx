import React, { useContext, useEffect, useState } from 'react';
import {Box,Typography} from '@mui/material'
import { Input,InputLabel , Button } from '@mui/material';
import "./login.sass";
import CircularProgress from '@mui/material/CircularProgress';


const { ethereum } = window;










const LoginForm = ()=>{
    const [isLoading, setLoading] = useState(false)


  const isMetaMaskInstalled = async() => {
    //Have to check the ethereum binding on the window object to see if it's installed
    return Boolean(ethereum && ethereum.isMetaMask);
  };




// this si connect through wallet
const connectThroughWallet = async(e)=>{
    e.preventDefault()
    try{
        
   
    setLoading(true)
    console.log('here you are going to connect using Wallet')


    var isMetaMask = await isMetaMaskInstalled()

    console.log('is metaMaks', isMetaMask)

    if(isMetaMask === true){

        await ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        console.log('this is account', accounts[0])


    }


    }catch(err){
        
        setLoading(false)                
    }

}








    return (
        <Box className='fullWithBox' sx={{"width":"100%", "display" : "flex", "justifyContent" : "center", "alignItems" : "center"}}>

        <Box className="FormBox">
            <form className="formControl">
            <Typography className='formTitle'> Snipe Finance </Typography>

                <Box sx={{"marginTop" : "30px"}}>

                        <InputLabel>Wallet Address</InputLabel>
                            <Input 
                            name="wltAddress"
                            
                            type="text"
                            placeholder="wallet address"
                            />


                </Box>
                
                <Box sx={{"marginTop" : "20px"}}>

                    <InputLabel>Email</InputLabel>
                        <Input 
                        name="email"
                     
                        type="email"
                        placeholder="email address"
                        />


                </Box>

                <Box sx={{"marginTop":"20px"}}>

                        <InputLabel>Password</InputLabel>
                        <Input 
                            className="formControl"
                            name="password"
                            
                            type="password"
                            placeholder="password"
                            />

                </Box>

                
                
            <Box sx={{"marginTop":"30px"}} className="buttonsBOx">
                <Button variant="contained" type="primary" sx={{"margin" : "auto", "display" : "block"}}>
                    
                {isLoading ? <CircularProgress sx={{color:'white', "marginRight" : "5px"}} size="1.2rem"/> : ''}
                    Login
                </Button>

                <Typography sx={{"display" : "flex", "justifyContent" : "center", "alignItems" : "center"}}>
                    OR
                </Typography>

                <Button onClick={connectThroughWallet} variant="contained" type="primary" sx={{"margin" : "auto", "display" : "block"}}>
                    
                    {isLoading ? <CircularProgress sx={{color:'white', "marginRight" : "5px"}} size="1.2rem"/> : ''}
                    

                    Connect Wallet
                </Button>

                </Box>

                
                    <Box sx={{"marginTop" : "20px"}}>
                        <Box className="ErroHandler">
                            <Typography>Invalid Creditionals</Typography>
                        </Box>
                    </Box>
            </form>



        </Box>
        
        </Box>
    )
}




export default LoginForm