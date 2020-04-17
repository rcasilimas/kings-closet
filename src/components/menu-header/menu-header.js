import React from 'react';
import menuButton from '../../assets/menu-button-white.svg';
import menuButtonBlack from '../../assets/menu-button.svg'
import { withRouter } from 'react-router-dom';

import './menu-header.scss';

const MenuHeader = ({ history }) => {

    return (
        <div className='menu-header-container'>
            <img onClick={() => history.push('/menu')} className='menu-button' src={menuButton} />
        </div>
    )
}

export default withRouter(MenuHeader);