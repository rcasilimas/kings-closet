import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionPreview from './CollectionPreview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsPreviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPreview)

export default CollectionsPreviewContainer;