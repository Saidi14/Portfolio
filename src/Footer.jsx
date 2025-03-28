import linkedIn from "/icons8-linkedin.svg"
import git from "/github-mark-white.svg"
function Footer(){
    let date = new Date().getFullYear();
    return(
        <footer id="footer">
            <p>&copy; Saidi Mwamchera </p>
            <div className="footerLinks">
                <a href="https://www.linkedin.com/in/saidimwamchera">
                    <img className="footerImage"src={linkedIn}></img>
                </a>
                <a href="https://github.com/Saidi14">
                    <img className="footerImage" src={git}/>
                </a>
            </div>
        </footer>
    )
}
export default Footer