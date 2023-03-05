import './style.scss';
import { useEffect, useState } from 'react';
import { getImages } from '../../service/httpService';
import GalleryItem from '../GalleryItem/GalleryItem';

export default function Gallery() {

    const gridPositions = [
        [1, 1, 4, 4],
        [4, 1, 5, 4],
        [1, 4, 4, 6],
        [4, 4, 7, 6],
        [5, 1, 7, 3],
        [7, 2, 9, 4],
        [7, 4, 10, 6],
        [10, 4, 10, 6],
        [9, 1, 11, 4],
        [7, 1, 9, 2],
    ];
    const [firstFetch, setFirstFetch] = useState<boolean>(true);
    const [images, setImages] = useState<Array<Array<string>>>([[]]);
    const [page, setPage] = useState<number>(1);

    const fetchImages = (page: number) => {
        getImages(page).then((response: Array<any>) => {

            const fetchedImages = response.map(image => image.urls.regular);

            if (firstFetch) {
                setImages([fetchedImages]);
                setFirstFetch(false);
            } else {
                const newImageState = [...images];
                newImageState.push(fetchedImages);
                setImages(newImageState);
            }
        });
    };

    useEffect(() => {
        fetchImages(page);
    }, [page]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onScroll = () => {
        const {clientHeight, scrollHeight, scrollTop} = document.documentElement;
        if (scrollHeight - scrollTop === clientHeight) {
            setPage(page => page + 1);
        }
    };

    return (
        <div className="gallery-section-container">
            <div className="gallery-title">
                <p>
                    gallery
                </p>
            </div>
            {images && images.map((imagesArr, index) => (
                    <GalleryItem
                        key={index}
                        imagesUrls={imagesArr}
                        index={index}
                        gridPositions={gridPositions}
                    />
                ),
            )}
        </div>
    );
}
