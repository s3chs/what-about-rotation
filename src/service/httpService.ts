const clientId = '35k6P0Nikf0yk7wdcLYvEQXYYzub3leQ8hzY5dVeVLI';

export const getImages = async (page: number) => {
    return await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=jordans-sneakers&client_id=${clientId}`,
    ).then((response: Response) => response.json()).then(data => data.results);
};
