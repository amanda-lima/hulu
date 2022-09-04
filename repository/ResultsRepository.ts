import requests from '../utils/requests'

export const ResultsRepository = {
    getResults: async (genre) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`);

            console.log(requests)
            return data;
        } catch (error) {
            return error;
        }
    }
}