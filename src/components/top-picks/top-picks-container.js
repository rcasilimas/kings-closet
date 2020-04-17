import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';
import { createStructuredSelector } from 'reselect';
import CollectionsPreviewContainer from '../CollectionPreview/collections-preview-container';
import { SpinnerContainer, SpinnerOverlay } from '../with-spinner/with-spinner-styles';

import './top-picks-container.scss';


const TopPicksContainer = ({fetchCollectionsStart, collections}) => {
    collections.sort((a, b) => (a.id > b.id) ? 1 : -1);
    const [topPicks, setTopPicks] = useState()
    let content = (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
    let previewArray = [];

    useEffect(() => {
        const fetch = async () => {
            await fetchCollectionsStart()
            menHandler()
        }
        fetch()
    }, [fetchCollectionsStart])
    


    const menHandler = () => {
        setTopPicks("mens")
    }

    const womenHandler = () => {
        setTopPicks("womens")
    }

    if (topPicks === "mens") {
        previewArray = collections.filter(collection => collection.gender == "mens")

    } 

    if (topPicks == "womens") {
        previewArray = collections.filter(collection => collection.gender == "womens")
    }

    if (previewArray[0]) {
        content = <CollectionsPreviewContainer title={previewArray[0].title} items={previewArray[0].items} />
    }

    




    return (
        <div className='top-picks-container'>
            <div className='button-container'>
                <div className='button' onClick={menHandler}>
                    <h2 className={(topPicks == "mens") ? "active-text" : null}>Men's Top Picks</h2>
                </div>
                <div className='button' onClick={womenHandler}>
                    <h2 className={(topPicks == "womens") ? "active-text" : null}>Women's Top Picks</h2>
                </div>
            </div>
            <div className='top-picks-content'>
                {content}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})



export default connect(mapStateToProps, mapDispatchToProps)(TopPicksContainer);