import styled from 'styled-components'
import { IChildrenProps } from '#types/common.type'

const Container = styled.div`
    max-width: 375px;
    margin: 0 auto;
    padding: 0 50px;
    background-color: yellow;
`

function Layout({ children }: IChildrenProps) {
    return (
        <>
            <Container>{children}</Container>
        </>
    )
}

export default Layout
