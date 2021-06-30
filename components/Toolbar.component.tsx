import React from "react";
import {FormControl} from "react-bootstrap";
import SideBarMenuButton from "./phone/SideBarMenu.button";
import {observer} from "mobx-react";
import MenuStorage from '../storages/Menu.storage'

const ToolbarComponent = observer(() => {
    return (
        <div className={["toolbar border-bottom", MenuStorage.show && "toolbar-sidebar-opened" || ""].join(" ")}>
            <div className="toolbar-content box d-flex align-items-center">
                <SideBarMenuButton/>
                <div className="me-4 w-100 d-flex align-items-center toolbar-search">
                    <FormControl type="input" placeholder="Search" className="border-none "/>
                </div>
            </div>
        </div>
    );
})

export default ToolbarComponent;