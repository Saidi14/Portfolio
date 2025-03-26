import AnchorLink from "react-anchor-link-smooth-scroll"

function Header(){
    return (
        <header>
            <h1>Saidi <span>Mwamchera</span></h1>
            <div className="links">
                    <AnchorLink href="#Skills">Skills</AnchorLink>
                    <AnchorLink href="#projectSection">Projects</AnchorLink>
                    <AnchorLink href="#footer">Contact</AnchorLink>
            </div>
        </header>
    )
}
export default Header