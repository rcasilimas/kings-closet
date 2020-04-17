import React, { useEffect } from 'react';

import CollectionItem from '../CollectionItem/CollectionItem.js'

import './collection-view.scss';

const CollectionView = ({title, items}) => { 
    
    if (title && items) {
        return (
            <div className='collection-view'>
                <div className='collection-view-title-container'>
                    <h1 className='collection-view-title'>{title}</h1>
                </div>
                <div className='view'>
                    {items.map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
            )
    } else {
        return null;
    }

    
}

export default CollectionView;