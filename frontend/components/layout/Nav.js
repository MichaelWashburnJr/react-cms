import React, { useState } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { I18nKeys, getI18nValue } from '../../lib/graphql-i18n';
import { mapDataToProps } from '../../lib/graphql';

const NavComponent = ({ brandName, blogLinkText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" light expand="md">
      <NavbarBrand href="/">{brandName}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog">{blogLinkText}</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

const GET_NAV_DATA = gql`
  query NavData {
    setting {
      brandName
    }
    blog {
      common {
        ${I18nKeys('navLinkText')},
      }
    }
  }
`;

const graphqlConnect = graphql(GET_NAV_DATA, {
  props: mapDataToProps({
    brandName: getI18nValue(['setting', 'brandName']),
    blogLinkText: getI18nValue(['blog', 'common', 'navLinkText']),
  }),
});

export default graphqlConnect(NavComponent);
