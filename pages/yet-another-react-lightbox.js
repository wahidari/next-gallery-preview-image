import { useState } from "react";
import Head from 'next/head'
import Image from 'next/image';
import MyNavbar from '../components/MyNavbar';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Download from "yet-another-react-lightbox/plugins/download";

export default function Home() {
    const [index, setIndex] = useState(-1);
    const images = [
        {
            src: "https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 1", description: "Image 1", width: 1080, height: 800,
            // srcSet: "https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1638201977889-7cf4026c7960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1638201977889-7cf4026c7960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 2", description: "Image 2", width: 1080, height: 800,
            // srcSet: "https://images.unsplash.com/photo-1638201977889-7cf4026c7960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1518387801569-c9372e7f2dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1518387801569-c9372e7f2dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 3", description: "Image 3", width: 1080, height: 800,
            // srcSet: "https://images.unsplash.com/photo-1518387801569-c9372e7f2dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 4", description: "Image 4", width: 1080, height: 800,
            // srcSet: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 5", description: "Image 5", width: 1080, height: 800,
            // srcSet: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80"
        },
        {
            src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 6", description: "Image 6", width: 1080, height: 800,
            // srcSet: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80"
        }
    ]

    return (
        <>
            <Head>
                <title>yet-another-react-lightbox</title>
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MyNavbar />

            <main>

                <div className="container py-5">
                    <h2 className="mb-3">yet-another-react-lightbox</h2>
                    <a href="https://yet-another-react-lightbox.com">link</a> & {" "}
                    <a href="https://github.com/igordanchenko/react-photo-album/blob/main/examples/lightbox/src/App.tsx">src</a>
                    <div className="row g-4 py-3">
                        {images.map((item, i) =>
                            <div className="col-12 col-sm-6 col-lg-4" key={i} style={{ cursor: 'pointer' }}>
                                <Image src={item.thumbnail} alt={item.title} width={400} height={250} unoptimized onClick={() => setIndex(i)} className="rounded" />
                            </div>
                        )}
                    </div>
                    <Lightbox
                        slides={images}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        // enable optional lightbox plugins
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions, Counter, Download]}
                        counter={{ container: { style: { top: "unset", bottom: 0, right: 0, display: 'flex', justifyContent: 'end' } } }}
                    />
                </div>

            </main>
        </>
    )
}