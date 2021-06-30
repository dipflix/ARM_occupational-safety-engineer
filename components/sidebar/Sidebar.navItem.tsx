import React from 'react';
import {LinkProps} from 'next/link'
import {IconType} from "react-icons";
import { ActiveLink } from '../../custom/Link/ActiveLink';
import Icon from "../../custom/Icon";


const SidebarNavItem = (props: SidebarNavItem) => {

    return (
        <li>
            <ActiveLink href={props.href} >
                <a className="d-flex nav-link align-items-center link-dark-blue mb-2 p-0 py-1">
                    <Icon icon={props.icon} className="me-3" iconSize={3}/>
                    <div className="fs-2">{props.title}</div>
                </a>
            </ActiveLink>
        </li>
    );
}

interface SidebarNavItem extends LinkProps {
    icon?: IconType,
    title?: string
}

export default SidebarNavItem;