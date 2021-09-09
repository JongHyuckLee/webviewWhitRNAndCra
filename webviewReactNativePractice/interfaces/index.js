import {random} from 'lodash';

const Interface = {
    setColor: async (callback) => {
         let colors = await import('../data/colors.json');

         callback(colors?.[random(0, colors?.default?.length)]?.value)
    }
}

export default Interface;