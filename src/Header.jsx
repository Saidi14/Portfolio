import AnchorLink from "react-anchor-link-smooth-scroll"

function Header(){
    return (
        <header>
            <h1>Saidi <span>Mwamchera</span></h1>
            <div className="links">
                    <AnchorLink  className="navlink" href="#Skills">Skills</AnchorLink>
                    <AnchorLink className="navlink" href="#projectSection">Projects</AnchorLink>
                    <AnchorLink className="navlink" href="#footer">Contact</AnchorLink>
            </div>
        </header>
    )
}
export default Header