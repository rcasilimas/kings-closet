import React, { useEffect } from 'react';

import CollectionItem from '../CollectionItem/CollectionItem.js'

import './CollectionPreview.scss';

const CollectionPreview = ({title, items}) => {

    
    if (title && items) {
        return (
            <div className='collection-preview'>
                <div className='preview'>
                    {items.filter((item, index) => index < 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            )
    } else {
        return null;
    }

    
}

export default CollectionPreview;