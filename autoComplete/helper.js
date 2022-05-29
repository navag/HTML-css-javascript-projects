import { STATES } from './data';

export const getOptions = (keyWord) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = STATES.filter(state => state.substring(0, keyWord.length) === keyWord)
            resolve(result);
        }, 2000);
    })
}