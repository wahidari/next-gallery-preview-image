import Link from "next/link"

export default function MyNavbar() {
    return (
        <>
            <style jsx>
                {`
                
            `}
            </style>
            <div className="bg-navbar shadow-sm">
                <nav className="navbar navbar-expand-lg container">
                    <div className="container-fluid">
                        <Link href="/">
                            <a className="navbar-brand text-dark fw-bold">Next Gallery</a>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="icon-toggle"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <Link href="/">
                                    <a className="nav-link" aria-current="page">Home</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}