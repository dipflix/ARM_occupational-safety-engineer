import React, {useCallback} from 'react';
import {BiMenu} from "react-icons/bi";
import Icon from "../../custom/Icon";
import MenuStorage from '../../storages/Menu.storage';
import SidebarComponent from '../sidebar/Sidebar.component';


const SideBarMenuButton = () => {

    // @ts-ignore
    const handleOnClick = useCallback(() => {
        MenuStorage.changeMenuActive()
    });

    return (
        <div role="button" className="show-on-phone me-5" onClick={handleOnClick}>
            <Icon icon={BiMenu} className="sidebar-menu-button text-dark" iconSize={2}/>
        </div>
    );
};

export default SideBarMenuButton;