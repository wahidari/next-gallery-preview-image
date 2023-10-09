import Link from "next/link"

export default function MyNavbar() {
    return (
        <>
            <div className="bg-navbar shadow-sm">
                <nav className="navbar navbar-expand-lg container">
                    <div className="container-fluid">
                        <Link href="/">
                            <a className="navbar-brand text-dark fw-bold">Next Gallery</a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="icon-toggle"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <Link href="/">
                                    <a className="nav-link" aria-current="page">Home</a>
                                </Link>
                                <Link href="/react-image-gallery">
                                    <a className="nav-link" aria-current="page">react image gallery</a>
                                </Link>
                                <Link href="/react-photoswipe-gallery">
                                    <a className="nav-link" aria-current="page">react photoswipe gallery</a>
                                </Link>
                                <Link href="/react-lightgallery">
                                    <a className="nav-link" aria-current="page">react lightgallery</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}