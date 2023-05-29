import { useLocation } from 'react-router-dom';

export default function Navbar() {

    //an import and a setting was made in order to put the contidional for the location as to hide the register function 
    //when inside the register URL (as such, changes were made in app.js and appRouter.js)
    const location = useLocation();
    const { pathname } = location;

    return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand disabled">Menu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        {pathname !== '/register' && (
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                        )}
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}