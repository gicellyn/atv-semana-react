import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function NotFound() {
    return(
        <main>
            <div className="not-found">
                <img src="https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png" alt="notfound" />
            </div>
            <div className="not-found">
                <Button variant="dark" className=" mt-1" type="submit"><Link className="nav-link" to="/">VOLTAR PARA HOME</Link></Button>
            </div>
        </main>
    );
}


export default NotFound;