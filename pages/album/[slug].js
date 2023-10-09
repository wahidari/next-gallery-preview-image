import Head from "next/head";
import Image from "next/image";
import MyNavbar from "../../components/MyNavbar";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import React, { useState, useCallback } from "react";

export default function AlbumDetail({ album }) {

    console.log(album.photos)

    // If array only provide "src"
    // Creating new array of object for add width and height from array only src available
    let newAlbum = []
    for (let index = 0; index < album.photos.length; index++) {
        newAlbum.push({
            src: album.photos[index],
            width: 4,
            height: 3
        })
    }

    console.log(newAlbum)

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

            <Head>
                <title>{`${album.title} - Next Bootstrap`}</title>
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MyNavbar />

            <main>
                <div className="container py-5">
                    <h2>{album.title} With Lightbox</h2>
                    {/* <Gallery photos={album.photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    styles={lightboxStyles}
                                    showNavigationOnTouchDevice={true}
                                    currentIndex={currentImage}
                                    views={album.photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway> */}

                    <Gallery photos={newAlbum} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    styles={lightboxStyles}
                                    showNavigationOnTouchDevice={true}
                                    currentIndex={currentImage}
                                    views={newAlbum.map(x => ({
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
                    <h2>{album.title}</h2>

                    <div className="row g-2">
                        {album.photos.map(photo =>
                            <div className="col-6" key={photo}>
                                <Image src={photo} alt="Image" width={550} height={350} unoptimized />
                            </div>
                        )}
                    </div>
                </div>
            </main>

        </>
    );
};

// This gets called on every request to this page
export async function getServerSideProps({ params }) {
    // console.log(params.slug)
    // Call external API from here directly using slug params in route url
    const getSingleAlbum = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/album/${params.slug}`);
    const album = await getSingleAlbum.json();
    // handle detail not found to 404 page
    if (getSingleAlbum.status == 404) {
        return {
            notFound: true,
        };
    }
    return {
        props: { album },
    };
};