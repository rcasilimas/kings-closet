const INITIAL_STATE = {
    sections: [
        {
          title: 'shoes',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 1,
          linkUrl: 'shop/shoes',
        },
        {
          title: 'tops',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/tops'
        },
        {
          title: 'bottoms',
          imageUrl: 'https://cdn.stocksnap.io/img-thumbs/960w/QBSVGRFT2Y.jpg',
          id: 3,
          linkUrl: 'shop/bottoms'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};



const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
} 

export default directoryReducer;