import { Link} from 'react-router-dom';
export default function Header(){
    return(
       
            <div>
                <div class="Header">
                    <h3>FlipKart</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/Register">Register</Link></li>
                    </ul>
                    </div>
                </div>
        
    )
}

