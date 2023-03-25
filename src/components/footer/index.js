import { useLocation } from 'react-router-dom';


export default function Footer() {
    // const location = useLocation();
    return (

        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="/about" class="nav-link px-2 text-muted">About</a></li>
                    <li class="nav-item"><a href="/plans" class="nav-link px-2 text-muted">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted disabled">FAQs</a></li>
                </ul>
                <p class="text-center text-muted">© 2022 Company, Inc </p>
                {/* <div>Location: {location.pathname}</div> */}
            </footer>
        </div>
    )
}