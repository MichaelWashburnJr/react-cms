import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import styled from 'styled-components';

const NavInner = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

function MainNav(props){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavInner>
        <NavbarBrand href="/">Mike's Bait and Tackle</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Freshwater
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="#">Trout</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Bass</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Techniques</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Boating</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="#">All freshwater</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Saltwater
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                  <NavLink href="#">Striped Bass</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Crabbing</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Clamming</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Surf casting</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Open water</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Regulations</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Techniques</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="#">All saltwater</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cooking
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="#">Recipes</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Smoking</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Campfire cooking</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="#">All cooking</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                DIY Gear
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="#">DIY Lures</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Flies</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Bait traps</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="#">All DIY gear</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Store
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="#">Lures</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Poles</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Freshwater</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Saltwater</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Tackle</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#">Apparel</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="#">All products</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        </NavInner>
      </Navbar>
    </div>
  );
}

export default MainNav;