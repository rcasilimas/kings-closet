import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Footer from './components/footer/footer'
/* import {data} from './data' */
import { addCollectionAndDocuments } from './firebase/firebase'
import CheckoutPage from './pages/checkout/checkout';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header'
import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-actions';
import { selectCollectionsForPreview } from './redux/shop/shop-selectors'
import ProductPage from './pages/product/product';
import ContactPage from './pages/contact/contact';
import MenuDropdown from './components/menu-header/menu-dropdown';
import MenuHeader from './components/menu-header/menu-header';

const App = ({ checkUserSession , currentUser}) => {
  useEffect(() => {
    /* addCollectionAndDocuments('collections', data)  */
    checkUserSession()
  }, [checkUserSession, addCollectionAndDocuments])

  const [isHidden, setIsHidden] = useState(true);
  
  const handleScroll = async () => {
        let position = document.body.scrollTop;
        if (position <= 80) {
            setIsHidden(true)
        } else {
            setIsHidden(false)
        }
    };
    

    useEffect(() => {
        document.body.addEventListener('scroll', handleScroll);

        return () => {
        document.body.removeEventListener('scroll', () => handleScroll);
        };
    }, []);


    return (
      <div>
        <ProductPage />
        <Header hidden={isHidden} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/product' component={ProductPage} />
          <Route exact path='/signin' render={() => 
            currentUser ? (
              <Redirect to ='/' />
              ) : (
                <SignInAndSignUpPage />
                )} />
          <Route exact path='/contact' render={ContactPage} />
          <Route exact path='/menu' render={MenuDropdown} />
        </Switch>
        <Footer />
      </div>
    );
  }


const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
}) 

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
