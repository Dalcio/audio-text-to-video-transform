import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ImageContainer, ImageItem } from './styled';

export type ImageType = {
    url: string;
    author: string;
    downloadUrl: string;
};

export const ImagesFound: React.FC = () => {
    const [images, setImages] = useState<ImageType[]>([]);

    const getImages = async () => {
        const result = await fetch('https://picsum.photos/v2/list');

        const searchedImages: ImageType[] = [];

        result.json().then((search) => {
            search.map((img) => {
                searchedImages.push({
                    author: img.author,
                    url: img.url,
                    downloadUrl: img.download_url,
                });
            });
        });

        setImages(searchedImages);
    };

    useEffect(() => {
        getImages();
    }, []);

    console.log(images);

    return (
        <ImageContainer>
            {/* {images.map((img, index) => ( */}
            {/* <ImageItem src={img.url} key={index} alt={img.author} /> */}
            <img
                src="https://picsum.photos/200/300?grayscale"
                alt="Ocean lion"
                width="100"
                height="100"
            />
            {/* ))} */}
        </ImageContainer>
    );
};
// <p>{img.author}=P</p>;
