import Header from "../container/header";
import Footer from "../container/footer";

function Layout({children}) {
    return  (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}

export default Layout;