import React from "react";


class Navbar extends React.Component{
    render(){
        return(
            <>
            <div style = {styles.nav}>
                <div style={styles.title}>
                    MOVIED
                </div>
                <div style={styles.cartContainer}>
                    <img  style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" alt="Cart Icon" />
                    <span style={styles.cartCount}>0</span>
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
        background:"darkcyan",
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
        marginLeft : 20
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

    cartCount:{
        background:"orange",
        borderRadius: "50%",
        padding:"4px 8px",
        marginTop:10,
        position:"absolute",
        right:10,
        top :-5,
        fontSize:12
    }

}