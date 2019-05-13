import React, { Component } from 'react';
import '../pages/logo.css';
class Header extends Component{
    render (){
        return (
            <div className="header-wrapper">
                <div className="content-header">
                        <a className="logo" href="/">
                            Chuluunbor
                        </a>
                {/* <div class="dots"></div> */}
                </div>
          </div>
        )
    }

}

export default Header;

