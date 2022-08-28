import React from "react";
import styled from "styled-components"

// define props for particular component
interface IHomePageProps {

}

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
`


const HomePage = (props: IHomePageProps) => {
    return <Container>
        <h1>Hot Anime</h1>
    </Container>



}

export default HomePage;