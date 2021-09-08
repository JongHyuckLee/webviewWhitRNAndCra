const Interface = {
    getColor: async () => {
         let colors = await import('../data/colors.json');
         return colors
    }
}

export default Interface;