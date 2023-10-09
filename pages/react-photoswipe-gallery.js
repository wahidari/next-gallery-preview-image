import Head from 'next/head'
import React from "react";
import MyNavbar from '../components/MyNavbar';

import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

export default function Home() {
    const images = [
        {
            original: "https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1638091986258-0c285a62defd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 1"
        },
        {
            original: "https://images.unsplash.com/photo-1638201977889-7cf4026c7960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1638201977889-7cf4026c7960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 2"
        },
        {
            original: "https://images.unsplash.com/photo-1518387801569-c9372e7f2dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1518387801569-c9372e7f2dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 3"
        },
        {
            original: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 4"
        },
        {
            original: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 5"
        },
        {
            original: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80",
            thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
            title: "Image 6"
        }
    ]

    return (
        <>
            <Head>
                <title>react-photoswipe-gallery</title>
                <meta name="description" content="Next Bootstrap" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MyNavbar />

            <main>

                <div className="container py-5">
                    <h2 className="mb-3">react-photoswipe-gallery</h2>
                    <a className="mb-5" href="https://github.com/dromru/react-photoswipe-gallery">link</a> & {" "}
                    <a className="mb-5" href="https://dromru.github.io/react-photoswipe-gallery/?path=/docs/demo-basic--basic">src</a>

                    <Gallery withDownloadButton>
                        <div className="row g-4 py-3">
                            {images.map((item, i) =>
                                <Item
                                    key={i}
                                    original={item.original}
                                    thumbnail={item.thumbnail}
                                    caption={item.title}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img style={{
                                            cursor: 'pointer'
                                        }} className="col-12 col-sm-6 col-lg-4" ref={ref} onClick={open} src={item.thumbnail} alt={item.title} />
                                    )}
                                </Item>
                            )}
                        </div>
                    </Gallery>
                </div>

            </main>
        </>
    )
}