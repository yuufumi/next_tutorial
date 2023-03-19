import styles from "../../styles/Users.module.css"
import Link from "next/link"
export const getStaticProps = async() => {


    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return {
        props: { users: data }
    }
} 

const Users = ({ users }) => {
    return ( 
        <>
        <h1>All users</h1>
        {users.map(user => (
            <Link className={styles.single} key={user.id} href={"/users/" + user.id }>
                <h3>{user.name}</h3>
            </Link>
        ))}
        </>
     );
}
 
export default Users;