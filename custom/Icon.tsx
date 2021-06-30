import React from 'react';
import {IconType} from "react-icons";

interface IconParams {
    className?: string;
    icon: IconType | undefined;
    iconSize?: Number;
}

const Icon = (props: IconParams) => {

    return (
        <div className={
            [
                "icon",
                props.className,
                props.iconSize && "icon-size-" + props.iconSize
            ].join(" ")}>{
            // @ts-ignore
            props.icon?.call()
        }</div>
    );
};

export default Icon;