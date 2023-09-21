import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from "../features/car/carSlice"
import { useSelector } from 'react-redux';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  return (
    <Container>
        <a>
          <img src="img/logo.svg"/>
        </a>
        <Menu>
          {cars && cars.map((car, index)=> (
            <a key={index} href="#">{car}</a>
          ))}
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
        </RightMenu>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(false)}/>
          </CloseWrapper>
          {cars && cars.map((car, index)=>(
            <li key={index}><a  href="#">{car}</a></li>
          ))}
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-In</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadaster</a></li>
          
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`
const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 768px){
    display: none;
  }

  a {
    text-decoration: none;
    padding: 0 10px;
    font-size:1.2em;
    font-weight: bold;
  }
`
const RightMenu = styled.div`
  display: flex;

  a {
    text-decoration: none;
    padding-right: 20px;
    font-size:1.2em;
    font-weight: bold;
  }
  @media (max-width: 768px){
    display: none;
  }
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1.5em 1.5em;
  transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
  transition: transform .6s;


  li a {
    text-decoration: none;
    font-weight: bold;
    display: block;
    padding: 1em 0;
    border-bottom: 1px solid gray;
  }

`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  
`