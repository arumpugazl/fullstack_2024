import '../../assets/css/NavBar.css'
import { Link } from 'react-router-dom';

var NavBar=()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/UseEffect'>UseEffect</Link></li>
                    <li><Link to='/UseEffectAPI'>UseEffectAPI</Link></li>
                    <li><Link to='/UseRef'>UseRef</Link></li>
                    <li><Link to='/ExamResults'>UseContext</Link></li>
                    <li><Link to='/UseMemo'>UseMemo</Link></li>
                    <li><Link to='/Login'>Login</Link></li>
                    <li><Link to='/Signup'>Signup</Link></li>
                    <li><Link to='/MongoDB'>MongoDB</Link></li>
                </ul>
            </nav>
        </header>
    ) 
}
export default NavBar;
