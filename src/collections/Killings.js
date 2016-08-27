import {Collection} from 'backbone';
import Killing from '../models/Killing';

/**
 *
 */
const Killings = Collection.extend ({
    model: Killing,
    url: 'https://thecountedapi.com/api/counted/',
});

export default Killings;





