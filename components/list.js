import React from 'react'
import {css} from '@emotion/core'

const listStyles = css`
    li {
        margin-bottom: 5px;
    }
`

const List = ({...props}) => {
    return <ul css={listStyles} {...props}></ul>
}

export default List