const Header = () => {
    return (
        <section className = "hero is-info is-bold">
               <div className = "hero-body">
                  <div className="container has-text-centered">
                     <h1 className = "title">
                        User Biodata
                     </h1>
                     <h2 className = "subtitle">
                        For Pagination Test
                     </h2>
                  </div>
               </div>
            </section>
    )
}

Header.defaultProps = {
    title: "Pagination Test"
}

export default Header;