import React from 'react'
import { SiteLayout, GlobalStyles } from '@dfds-ui/react-components'
import Nav from './nav'

const Layout = ({...props}) => {
    return (<>
    <GlobalStyles />
    <SiteLayout.Grid>
        <SiteLayout.Header>
            <Nav />
        </SiteLayout.Header>
        <SiteLayout.Main {...props} />
        <SiteLayout.Footer>
            &nbsp;
        </SiteLayout.Footer>
    </SiteLayout.Grid></>)
}

export default Layout