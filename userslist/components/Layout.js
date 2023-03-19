import Footer from "./footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
    <>
        <Navbar></Navbar>
            {children}    
        <Footer></Footer>
    </>
      );
}
 
export default Layout;