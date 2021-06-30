import React, {DetailedReactHTMLElement} from 'react'
import Link, {LinkProps} from 'next/link'
import {useRouter} from 'next/router'

// @ts-ignore
export const ActiveLink = ({href, children}) => {
    const router = useRouter()

    let className = children.props.className || ''
    if (router.pathname === href)
        className += " link-active"


    return <Link href={href}>{React.cloneElement(children, {className})}</Link>
}
