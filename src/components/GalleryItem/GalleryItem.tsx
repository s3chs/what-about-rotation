import './style.scss';

export default function GalleryItem({imagesUrls, gridPositions}: any) {

    return (
        <div className="gallery-item-container">
            <div className=" gallery-logo-container">
                <p className=" gallery-logo">
                    sneakers
                </p>
                <p className=" gallery-logo">
                    sneakers
                </p>
                <p className=" gallery-logo">
                    sneakers
                </p>
            </div>
            {imagesUrls && imagesUrls.map((image: string, index: number) => (
                <div
                    className=" gallery-item-wrapper"
                    key={index}
                    style={{
                        gridArea: `
                    ${gridPositions[index][0]}/
                     ${gridPositions[index][1]}/
                      ${gridPositions[index][2]}/
                       ${gridPositions[index][3]}
                    `,
                    }}
                >
                    <div className=" gallery-item" style={{background: `url(${image}) 50% 50% / cover`}}/>
                </div>
            ))}
        </div>
    );
}
