import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import { useMediaQuery } from 'react-responsive'

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }



const NavWrapper = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    padding: .6em;
    padding-top: 2em;
    padding-bottom: 2em;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 14%;
    z-index: 99999;


    div:first-child{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1440px;
        width: 100%;

    }

`;

const Logo = styled.img`
   object-fit: contain;
   height: 3em;
   margin-left: 1em;
   cursor: pointer;
`; 

const NavItems = styled.div`
    display: flex;
    color: white;
    width: 30em;
    justify-content: space-between;

    p{
        font-size: .8em;
        cursor: pointer;
        font-family: 'Audiowide', cursive;
        transition: all ease-in-out 0.3s;
    }

    p:hover{
     text-shadow: 0px 4px 10px white; 
    }
`;

const Contact = styled.div`
   object-fit: contain;
   width: 100px
   height: 100px;
   margin-top: 0px;
   padding-right: 4em;
   cursor: pointer;
   background-image: url("./mobile-menu.png");
   background-size: cover;
   width: 100px;
    height: 100px;

   @media only screen and (max-width: 768px) {
   width: 70px;
   height: 70px;
   background-image: url("./mobile-menu.png");
   background-size: cover;

    }

   `;

   const SocialContainer = styled.div`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    
    @media only screen and (max-width: 768px) {
        height: 20px;
        margin-top: 40px;
    }
`
const SocialLogo = styled.img`
    width: 25px;
    height: 25px;
    margin: 10px;

`

const OpenSpacesLogo = styled.img`
width: 20%;
margin-top: 45px;

@media only screen and (max-width: 768px) {
width: 80%;
}

`

   function Navigation(){
    const [showMenu, setShowMenu] = useState(false);

    let menu

   

    return(
        <nav className={styles.navigationBarMobile} style={{position: "fixed", paddingTop: "5px"}}>
            <h2 className={styles.menuToggle} style={{fontFamily: "ArialMT", fontSize: "24px"}} onClick={() => setShowMenu(!showMenu)}>MENU</h2>
            <img className={styles.menuToggleIcon} onClick={() => setShowMenu(!showMenu)} src="/menu-icon.png"></img>
            {menu}
        </nav>
    )
}

const Navbar = () => {
    
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90){
                setColor(true);
            } else {
                setColor(false);
            }
        }  
        window.addEventListener('scroll', changeColor)
    }, [])


    const [color, setColor] = useState(false)
    const [showMenu, setShowMenu] = useState(false);


    
    let menu
    
    if (showMenu){
        menu = 
        <div className={styles.navLinkContainerMobile} style={{position: "fixed"}}>
            <a onClick={() => setShowMenu(false)}><h1 style={{position: "fixed", top: "0", right: "25px", cursor:"pointer"}}>X</h1></a>
            <OpenSpacesLogo src="/logo.png"></OpenSpacesLogo>
            <a onClick={() => setShowMenu(false)} className={styles.navLink} href="#about"><h3>How We Help</h3></a>
            <a onClick={() => setShowMenu(false)} className={styles.navLink} href="#theProcess"><h3>The Process</h3></a>
            <a onClick={() => setShowMenu(false)} className={styles.navLink} href="#services"><h3>Services</h3></a>
            <a onClick={() => setShowMenu(false)} className={styles.navLink} href="#perks"><h3>Perks</h3></a>
            <a onClick={() => setShowMenu(false)} className={styles.navLink} href="#caseStudy"><h3>Recent Work</h3></a>
            <a onClick={() => setShowMenu(false)} className={styles.navLink} href="#contact"><h3>Contact</h3></a>
            
            <SocialContainer>
                <a href="https://instagram.com/openspaces.io"><SocialLogo src="/IG.png"></SocialLogo></a>
                <a href="https://www.linkedin.com/company/openspaces-design"><SocialLogo src="/linkedin.png"></SocialLogo></a>
            </SocialContainer>
            
            
        </div>
    }
    
    return (
    <>
    <NavWrapper className={color ? 'nav-header' : ''}>
        
        <div>
        <Logo src={'./logo.png'}/>
        <NavItems className={styles.hidden}>
        </NavItems>
        <Contact onClick={() => setShowMenu(!showMenu)}/>
        </div>
        

    </NavWrapper>
    {menu}
  </>
  )

}

export default Navbar