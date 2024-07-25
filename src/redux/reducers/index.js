import {combineReducers} from 'redux';
import count from './Count';
import Profile from '../../pages/Profile';

const result = combineReducers({
    count,
    // Profile,
    // Product,
})
export default result