import {Image, Navbar} from "react-bootstrap";
import {Configuration} from "../../configuration";
import SidebarNavItem from "./Sidebar.navItem";
import MenuStorage from '../../storages/Menu.storage'
import {observer} from "mobx-react";

const SidebarComponent = observer((props: SidebarProps) => {
    return (
        <Navbar
            className={[
                "d-flex flex-column flex-shrink-0 vh-100 box border-right sidebar",
                props.className,
                 MenuStorage.show && "sidebar-show" || ""
            ].join(" ")}
        >
            <div className="w-100 px-4">
                <div className="mb-4 mt-1">
                    <div className="d-flex align-items-center">
                        <div className="me-3">
                            <Image src={Configuration.company.logoImage} alt="" className="sidebar-logo"/>
                        </div>
                        <div className="sidebar-logo-text">
                            <div className="text-primary fs-1">{Configuration.company.department}</div>
                            <div className="text-muted fw-light fs-6">{Configuration.company.name}</div>
                        </div>
                    </div>
                </div>

                <ul className="list-unstyled">
                    {
                        Configuration.navLinks.map((item, index) => {
                            return <SidebarNavItem key={index} href={item.src} title={item.title} icon={item.icon}/>
                        })
                    }
                </ul>


            </div>
        </Navbar>
    );
})

type SidebarProps = {
    className?: string
}

export default SidebarComponent;

