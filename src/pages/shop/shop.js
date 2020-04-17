import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection-container';
import NonstickyHeader from '../../components/header/nonsticky-header';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';
import Header from '../../components/header/header';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container';


const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

        return (
        <div className='shop-page'>
        <NonstickyHeader />
        <Route 
        exact 
        path={`${match.path}`} 
        component={CollectionsOverviewContainer} 
        />
        <Route 
        path={`${match.path}/:collectionId`} 
        component={CollectionsOverviewContainer}
        />
    </div>
        )
    }
   
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);