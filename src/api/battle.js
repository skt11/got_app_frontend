import axios from 'axios';
import config from '../shared/Constants';

const getLocationList = async () => {
    return await axios.get(`${config.API_URL}/list`)
}

const searchBattle = async (query = {}) => {
    return await axios.get(`${config.API_URL}/search`, {
        params: {
            ...query
        }
    })
}

export { getLocationList, searchBattle }