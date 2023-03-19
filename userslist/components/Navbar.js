import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/user.jpg" width={70} height={70}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="/users">user listing</Link>
        </nav>
     );
}
 
export default Navbar;