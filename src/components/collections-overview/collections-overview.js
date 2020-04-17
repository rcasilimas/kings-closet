import React from 'react';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionView from '../collection-view/collection-view';
import './collections-overview.scss'
import ShopImage from './shop-image';
import ProductPage from '../../pages/product/product';

const CollectionsOverview = ({ collections, urlParams }) => { 
    let collectionsForView;
    collections.sort((a, b) => (a.id > b.id) ? 1 : -1);
    if (urlParams == "mens" || urlParams == "womens") {
        collectionsForView = collections.filter(collection => collection.gender == urlParams)
    } else if (urlParams == "shoes" || urlParams == "tops" || urlParams == "bottoms") {
        collectionsForView = collections.filter(collection => collection.routeName == urlParams)
    } else {
        collectionsForView = collections;
    }

    return (
        <div className='collections-overview'>
            <ShopImage urlParams={urlParams}/>
            {collectionsForView.map(({id, ...otherCollectionProps}) => (
                <CollectionView key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )

}


const mapStateToProps = (state, ownProps) => {

    return ({
        collections: selectCollectionsForPreview(state),
        urlParams: ownProps.match.params.collectionId
    })
}

export default connect(mapStateToProps)(CollectionsOverview);