import React from "react";
import styled from "styled-components";


// const Nav = styled.div`
//         width:100%;
//         height:70px;
//         background:linear-gradient(170deg, #1bc059, #0d47a1);
//         display:flex;
//         justifyContent: space-around;
//         alignItems : center;
       
// `;

const CartCount = styled.div`
background-color:${(props) => props.color};
border-radius: 50%;
padding:4px 8px;
position:absolute;
right:10px;
top :-5px;
fontSize:12px;
visibility:${(props) => props.show?"visible":"hidden"};;
`

// //Styled Component
// class Navbar extends React.Component{
//     render(){
//         return(
//             <>
//             <Nav>
//                 <div style={styles.title}>
//                     MOVIE-PORT
//                 </div>
//                 <div style={styles.cartContainer}>
//                     <img  style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" alt="Cart Icon" />
//                     <span style={styles.cartCount}>0</span>
//                 </div>
//             </Nav>
            
//             </>
//         )
//     }
// }

// Styled Inline

class Navbar extends React.Component{
    render(){
        return(
            <>
            <div style = {styles.nav}>
                <div style={styles.title}>
                    MOVIE-PORT
                </div>
                <div style={styles.cartContainer}>
                    <img  style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" alt="Cart Icon" />
                    <CartCount color="red" show={true}>0</CartCount>
                </div>
            </div>
            
            </>
        )
    }
}

export default Navbar;

const styles = {
    nav:{
        width:"100%",
        height:70,
        background:"linear-gradient(170deg, #1bc059, #0d47a1)",
        display:"flex",
        justifyContent: "space-around",
        alignItems : "center",
        position:"relative"
    },
    
    title:{
        fontSize:30,
        color:"#fff",
        fontWeight:600,
        fontFamily: '"Montserrat", sans-serif',
        textTransform : "uppercase",
        marginTop:8,
        marginLeft : 20,
       
    },
    
    cartContainer:{
        position:"relative",
        cursor:"pointer",
    },

    cartIcon:{
        height:48,
        marginRight:20,
        marginTop:10
    },

    // cartCount:{
    //     borderRadius: "50%",
    //     padding:"4px 8px",
    //     marginTop:10,
    //     position:"absolute",
    //     right:10,
    //     top :-5,
    //     fontSize:12
    // }

}