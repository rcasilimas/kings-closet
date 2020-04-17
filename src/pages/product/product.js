import React, {useState, useEffect} from 'react';
import SizePicker from '../../components/size-picker/size-picker';
import CustomButton from '../../components/custom-button/custom-button'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import exit from '../../assets/exit.svg'

import './product.scss';
import { addItem } from '../../redux/cart/cart-actions';
import { selectProduct } from '../../redux/shop/shop-selectors';
import { removeProductPage } from '../../redux/shop/shop-actions';

const ProductPage = ({productInfo, removeProduct, addItem}) => {
    const { productPage, item } = productInfo;
    const [view, setView] = useState(false);
    const [size, setSize] = useState(false);

    const sizeHandler = (size) => {
        setSize(size)
        item.size = size;
        item.cartid = item.id + size
    }
    
    useEffect(() => {
        if (productInfo) {
            setView(productPage)
        }
    }, [productInfo])

   

    const removeProductPage = () => {
        removeProduct()
        setSize(false)
    }

    const addItemToCart = () => {
        console.log(item)
        addItem(item)
        removeProductPage()
    }



    return (
        <div className='product-background' style={{display: (view) ? 'flex' : 'none'}}>
                <div className='pop-up-container'>
                    <div className='pop-up-image-container'>
                        <img className='pop-up-image' src={(productPage) ? item.imageUrl : null} />
                    </div>
                    <div className='pop-up-options-container'>
                        <div onClick={removeProductPage} className='popup-x-container'>
                            <div className='x-img-container'>
                                <img className='x-img' src={exit} />
                            </div>
                        </div>
                        <h3>{(productPage) ? item.name : null}</h3>
                        <h4>{(productPage) ? item.price : null}</h4>
                        <h5>Select Your Size</h5>
                        <SizePicker sizePicked={size} sizeHandler={sizeHandler} productType={(productPage) ? item.type : null} />
                        <div className='pop-up-cart-button'>
                        <CustomButton disabled={!size} onClick={addItemToCart} inverted> Add to cart </CustomButton>
                        </div>
                    </div>
                </div>        
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    productInfo: selectProduct
})

const mapDispatchToProps = dispatch => ({
    removeProduct: () => dispatch(removeProductPage()),
    addItem: item => dispatch(addItem(item))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);