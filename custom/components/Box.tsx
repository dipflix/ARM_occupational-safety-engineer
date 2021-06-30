import React, {Component} from 'react';
import {IconType} from "react-icons";
import Icon from "../Icon";
import {ImPushpin} from "react-icons/im";


type TitleParams = {
    title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    children?: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    icon?: IconType | undefined;
    iconSize?: Number;
}

type ContentParams = {
    children?: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}
type BoxParams = {
    rounded?: boolean;
    className?: any;
    children?: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}


const Title = (props: TitleParams) => (
    <div className="d-flex box-title-content">
        <div className="d-flex box-title flex-grow-1 align-items-center">
            {props.icon && (<Icon icon={props.icon} className={("icon-size-" + props.iconSize) + " me-3 "}/>)}
            <div>{props.title}</div>
        </div>
        <div>{props.children}</div>
    </div>
)


const Content = (props: ContentParams) => (
    <div className="box-content">{props.children}</div>
)


const Box = (props: BoxParams) => {

    return (
        <div className={
            [
                "box",
                "bordered",
                (props.rounded && "box-rounded"),
                props.className,
            ].join(" ")}>
            {props.children}
        </div>
    );
}

Box.Title = Title
Box.Content = Content
export default Box;