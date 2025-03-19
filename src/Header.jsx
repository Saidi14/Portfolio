import AnchorLink from "react-anchor-link-smooth-scroll"

function Header(){
    return (
        <header>
            <h1>Saidi <span>Mwamchera</span></h1>
            <div className="links">
                    <AnchorLink href="">Home</AnchorLink>
                    <AnchorLink href="#Skills">Skills</AnchorLink>
                    <AnchorLink href="">Projects</AnchorLink>
            </div>
        </header>
    )
}
export default Header