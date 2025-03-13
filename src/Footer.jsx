function Footer(){
    let date = new Date().getFullYear();
    return(
        <footer>
            <p>&copy; {date} My website</p>
        </footer>
    )
}
export default Footer