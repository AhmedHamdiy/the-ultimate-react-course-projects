import { useState, useEffect } from 'react';
import { getSliderImages } from '../../services/apiRestaurant';
import { useLoaderData, useNavigation } from 'react-router';
import Button from '../../ui/Button';

function MenuSlider() {
    const images = useLoaderData();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length, images, currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden my-4">
            <Button type="left" onClick={nextSlide}>
                &#10095;
            </Button>

            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="min-w-full flex justify-center items-center"
                    >
                        <img
                            src={image.imgUrl}
                            alt={`Slide ${index}`}
                            className="object-cover w-[800px] h-[600px] rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </div>
            <Button type="right" onClick={prevSlide}>
                &#10094;
            </Button>
        </div>
    );
}

export async function loader() {
    const images = await getSliderImages();
    return images;
}

export default MenuSlider;
