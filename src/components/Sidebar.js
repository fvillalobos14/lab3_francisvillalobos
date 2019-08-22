import React from 'react'
import { Sidenav, Nav, Dropdown, Icon } from 'rsuite'

function Sidebar(props) {
    return (
            <Sidenav {...props} >
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                            TEST 
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<Icon icon="home" />}>
                            Home 
                        </Nav.Item>
                        <Dropdown eventKey="3" title="Asus" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="3-1">Zenfone3</Dropdown.Item>
                            <Dropdown.Item eventKey="3-2">Zenfone Max Pro M1</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="4" title="Google" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="4-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="4-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="5" title="Huawei" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="5-1">Honor view 10 (berkeley)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="6" title="LG" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="6-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="6-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="7" title="Leeco" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="7-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="7-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="8" title="Lenovo" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="8-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="8-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="9" title="Motorola" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="9-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="9-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="10" title="OnePlus" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="10-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="10-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="11" title="Oneplus" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="11-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="11-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="12" title="Samsung" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="12-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="12-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="13" title="Smartron" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="13-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="13-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="14" title="Sony" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="14-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="14-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="15" title="Xiaomi" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="15-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="15-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="16" title="YU" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="16-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="16-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>

                        <Dropdown eventKey="17" title="ZUK" icon={<Icon icon="mobile" />}>
                            <Dropdown.Item eventKey="17-1">Nexus 5 (Hammerhead)</Dropdown.Item>
                            <Dropdown.Item eventKey="17-2">Nexus 5x (Bullhead)</Dropdown.Item>
                        </Dropdown>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
    )
}
export default Sidebar