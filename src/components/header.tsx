import { Link } from "react-router-dom";


export default function Header(){
    return(
        <>
        <div className="header">
            <div className="header-title" style={{color:"#3131ab", display:"flex", alignItems:"center"}}>
                <img src="/logo.png" style={{width:"3.25rem"}}/>
                <div>
                <h1 style={{fontSize:"2.8rem", letterSpacing:"0.1rem", fontWeight:800}}>MHT</h1>
                <p style={{position:"absolute", fontWeight:700, fontSize:"0.45rem", top:"3.6rem"}}>MURTAFAT HAIMA TRADING</p>
                </div>
                
            </div>
            <div className="nav-bar" style={{marginRight:"6rem", gap:"2.5rem"}}>
                <Link className={location.pathname=="/home"?"blue":"nav"} to="/home">HOME</Link>
                <Link className="nav" to="">ABOUT</Link>
                <Link className="nav" to="">SERVICES</Link>
                <Link className="nav" to="">CONTACT</Link>
            </div>
        </div>
        <div className="mobile-nav">
        <div style={{display:"flex",gap:"3rem"}}>
                <Link className={location.pathname=="/home"?"blue":"nav"} to="/home">HOME</Link>
                <Link className="nav" to="">SERVICES</Link>
                <Link className="nav" to="">ABOUT</Link>
            </div>
        </div>
        </>
        
    )
}