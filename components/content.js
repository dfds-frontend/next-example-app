import React from 'react'
import { css } from '@emotion/core'

const contentStyles = css`margin: 50px 15px 0 15px;`

const Content = ({...props}) => {
    return (<div css={contentStyles} {...props} />)
}

export default Content