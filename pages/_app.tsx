import type {AppProps} from 'next/app'
import SidebarComponent from '../components/sidebar/Sidebar.component'
import ToolbarComponent from '../components/Toolbar.component'
import '../styles/index.scss'
import {Container} from "react-bootstrap";

function MyApp({Component, pageProps}: AppProps) {

    return (

        <div className="d-flex g-0">
            <div>
                <div className="sidebar-container-fix"/>
                <SidebarComponent/>
            </div>
            <div className="w-100">
                <ToolbarComponent/>
                <Container className="p-4 " fluid>
                    <Component {...pageProps}/>
                </Container>
            </div>
        </div>

    )
}

export default MyApp
