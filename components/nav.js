import React from 'react'
import Link from 'next/link'
import { NavBar, NavBarItem} from '@dfds-ui/react-components'

const NextLink = ({ href, ...props }) => {
  return (
    <Link href={href}>
      <a {...props} />
    </Link>
  );
};


const Nav = () => (
  <NavBar>
    <NavBarItem href='/' as={NextLink}>
      Home
    </NavBarItem>

    <NavBarItem href='/example' as={NextLink}>
      Example
    </NavBarItem>
 </NavBar>
)

export default Nav
