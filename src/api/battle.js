import axios from 'axios';
import config from '../shared/Constants';

const getLocationList = async () => {
    return await axios.get(`${config.API_URL}/list`)
}

export { getLocationList }