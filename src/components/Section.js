import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, LeftBtnText, RightBtnText }) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>
        </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            { LeftBtnText }
                        </LeftButton>
                        {RightBtnText && 
                            <RightButton>
                                { RightBtnText }
                            </RightButton>
                        } 
                    </ButtonGroup>
                </Fade>
            <ArrowDown src="img/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('img/model-3.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: norepeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${props => `URL("/img/${props.bgImage}")`}
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    
    h1 {
        margin-bottom: .5em;
        font-size: 2.5em;
    }
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background: rgba(23, 26, 32, 0.8);
    height: 48px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5em;
    margin: 8px;
    cursor: pointer;
    opacity: 0.85;
`
const RightButton = styled(LeftButton)`
    background: white;
    color: black;
    opacity: 0.65;
`
const ArrowDown = styled.img`
    height: 40px;
    animation: into infinite 1.5s;
`
const Buttons = styled.div`

`