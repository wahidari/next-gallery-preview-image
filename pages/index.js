import Head from 'next/head'
import Image from 'next/image'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import React, { useState, useCallback } from "react";
import MyNavbar from '../components/MyNavbar';
import Link from 'next/link';

export default function Home({ photos, albums }) {
    console.log(photos)

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const lightboxStyles = {
        header: (base, state) => {
            const opacity = 1;
            const transform = "translateY(10px)";
            const top = "-10";
            return { ...base, opacity, transform, top };
        },
        navigation: (base, state) => {
            const opacity = 1;
            const background = "rgba(0, 0, 0, 0.8)";
            return { ...base, opacity, background };
        },
        navigationPrev: (base, state) => {
            const background = "rgba(0, 0, 0, 0.5) !important";
            return { ...base, background };
        },
        navigationNext: (base, state) => {
            const background = "rgba(0, 0, 0, 0.5) !important";
            return { ...base, background };
        },
        footer: (base, state) => {
            const opacity = 1;
            const transform = "translateY(-10px)";
            const bottom = "-10";
            return { ...base, opacity, transform, bottom };
        }
    }

    return (
        <>
            <style jsx>
                {`
            `}
            </style>

            <Head>
                <title>Next Gallery</title>
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MyNavbar />

            <main>

                <div className="container py-5">
                    <h2 className="mb-3">Gallery</h2>
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    styles={lightboxStyles}
                                    showNavigationOnTouchDevice={true}
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>

                <div className="container py-5">
                    <h2 className="mb-3">Albums</h2>
                    <div className="row g-3">
                        {albums.map(album =>
                            <div className="col-md-6 col-lg-4" key={album.slug}>
                                <div className="card">
                                    <Image src={album.src} alt="image" width={350} height={250} />
                                    <div className="card-body">
                                        <Link href={`/album/${album.slug}`}>
                                            <a className="card-title text-decoration-none text-dark stretched-link"><h5>{album.title}</h5></a>
                                        </Link>
                                        <p className="card-text">This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="container py-5">
                    <h2 className="mb-3">Albums</h2>
                    <div className="row g-3">
                        {albums.map(album =>
                            <div className="col-md-6 col-lg-4" key={album.slug}>
                                <div className="card card-gallery text-white">
                                    <Image src={album.src} alt="image" width={350} height={250} />
                                    <Link href={`/album/${album.slug}`}>
                                        <a className="stretched-link"></a>
                                    </Link>
                                    <div className="card-img-overlay">
                                        <div className="bottom-0 position-absolute mb-3">
                                            <h5>{album.title}</h5>
                                            <p className="card-text">This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </main>
        </>
    )
}

// This gets called on every request to this page
export async function getServerSideProps() {
    const getDataPhotos = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/photo`);
    const photos = await getDataPhotos.json();
    const getDataAlbums = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/album`);
    const albums = await getDataAlbums.json();
    // console.log(photos)
    return {
        props: { photos, albums }, // will be passed to the page component as props
    };
};