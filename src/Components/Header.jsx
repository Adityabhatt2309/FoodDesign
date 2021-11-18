import React, {Components}from 'react';
import './Header.css';
import Button from '@material-ui/core/Button'; 
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';  
import TextField from '@material-ui/core/TextField';  
import Checkbox from '@material-ui/core/Checkbox';   

function Header(props) {
    return (
        <div>
            <AppBar position="static">  
            <div className="header_item">
                <Toolbar>  
                     Material UI  
                </Toolbar>  

                <div className="Menu_item">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>
            </div>
            </AppBar>  
            
            <div className=".img-fluid w-100% h-auto">
                <img src="https://images.unsplash.com/photo-1636907312269-d1facecaf8a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" alt="Uploading" className="width-100%" />
            </div>
                                
                                 
            <h1>Hello Mr. Aditya</h1>
            <Button variant="contained" color="primary">  
                    Material UI  
            </Button>  
        </div>
    );
}

export default Header;