import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Register from './Components/Register/Register.jsx'
import Login from './Components/Login/Login.jsx'
import Password from './Components/Password/Password.jsx'
import User from './Components/User/User.jsx'
import Company from './Components/Company/Company.jsx'
import Service from './Components/Service/Service.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Cart from './Components/Cart/Cart.jsx'
import ShopContext, { ShopContextProvider } from './context/shop-context.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Checkout from './Components/Checkout/Checkout.jsx'
import MyProfile from './Components/MyProfile/MyProfile.jsx'
import ProfileAccount from './Components/ProfileAccount/ProfileAccount.jsx'
import AccountOrders from './Components/AccountOrders/AccountOrders.jsx'
import ProfileBillingInfo from './Components/ProfileBillingInfo/ProfileBillingInfo.jsx'
import ProfilePayment from './Components/ProfilePayment/ProfilePayment.jsx'
import ProfileInvoice from './Components/ProfileInvoice/ProfileInvoice.jsx'
import SocialProfile from './Components/SocialProfile/SocialProfile.jsx'
import ProfileNotifications from './Components/ProfileNotifications/ProfileNotifications.jsx'
import ProfileSetting from './Components/ProfileSetting/ProfileSetting.jsx'
import AdminDashboard from './Components/AdminDashboard/AdminDashboard.jsx'
import Admin from './Components/Admin/Admin.jsx'
import DashboardAddUser from './Components/DashboardAddUser/DashboardAddUser.jsx'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { ShopContextProvider } from './context/shop-context.jsx'
import Checkout from './Components/Checkout/Checkout.jsx'
=======
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738
import DashboardAllUsers from './Components/DashboardAllUsers/DashboardAllUsers.jsx'
import DashboardAddProduct from './Components/DashboardAddProduct/DashboardAddProduct.jsx'
import DashboardAddProductGeneral from './Components/DashboardAddProductGeneral/DashboardAddProductGeneral.jsx'
import DashboardAddProductInventory from './Components/DashboardAddProductInventory/DashboardAddProductInventory.jsx'
import DashboardAddProductImages from './Components/DashboardAddProductImages/DashboardAddProductImages.jsx'
import DashboardAddProductSEO from './Components/DashboardAddProductSEO/DashboardAddProductSEO.jsx'
import DashboardAddProductShipping from './Components/DashboardAddProductShipping/DashboardAddProductShipping.jsx'
import DashboardAddProductStatus from './Components/DashboardAddProductStatus/DashboardAddProductStatus.jsx'
<<<<<<< HEAD
import DashboardAddStore from './Components/DashboardAddStore/DashboardAddStore.jsx'
import Scanner from './Components/Scanner/Scanner.jsx'
import Scan from './Components/Scan/Scan.jsx'
import TestSign from './Components/TestSign/TestSign.jsx'
import TestLogin from './Components/TestLogin/TestLogin.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'
import Final from './Components/Final/Final.jsx'
=======
>>>>>>> a928d784a302cfbc623ef108fcaf4019573faa04
>>>>>>> c92fa3c4f77037ad41c31a9f9f5fef99ae4e4738


export default function App() {
  
  const loggedIn = window.localStorage.getItem('isLoggedIn')
  console.log(loggedIn, "login")
  const onFileChange = (files) => {
    console.log(files);
  } 
  
  let router = createBrowserRouter([
  
    {path: '', element: <Layout/>, errorElement: <NotFound/>, children: [
    
      {index: true, element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'service', element: <Service/>},
      {path: 'shop', element: <Shop/>},
      {path: 'scan', element: <Scanner/> },
      {path: 'scann', element: <Scan/> },
      {path: 'cart', element: <Cart/> },
      {path: 'shopcontext', element: <ShopContext/>},
      {path: 'checkout', element: <Checkout />},
      {path: 'contact', element: <Contact/>},
      {path: 'profile', element: <MyProfile/>, children: [
      
        {path: 'account', index: true , element: <ProfileAccount onFileChange={(files) => onFileChange(files)} />},
        {path: 'my-orders', element: <AccountOrders/>},
        {path: 'profile-billing-info', element: <ProfileBillingInfo/>},
        {path: 'profile-payment', element: <ProfilePayment/>},
        {path: 'profile-invoice', element: <ProfileInvoice/>},
        {path: 'social-profile', element: <SocialProfile/>},
        {path: 'profile-notifications', element: <ProfileNotifications/>},
        {path: 'profile-setting', element: <ProfileSetting/>},
      
      ]},
      {path: 'login', element: <Login/>},
      {path: 'password', element: <Password/>},
      {path: 'sign', element: <TestSign />},
      {path: 'signin', element: <TestLogin />},
      {path: 'register', element: <Final />},
      // {path: 'register', element: <Register/>, children: [
      
      //   // {index: true, element: <User/>},
      //   {index: true, element: <SignUp />},
      //   {path: 'company', element: <Company/>}
      
      // ]}
    
    ]},
    
    {path: 'en', element: <Admin/>, children: [
    
      {path: 'dashboard', element: <AdminDashboard/>},
      {path: 'user/create', element: <DashboardAddUser/>},
      {path: 'all/users', element: <DashboardAllUsers/>},
      {path: 'create/product', element: <DashboardAddProduct/>, children: [
      
        {path: 'general', element: <DashboardAddProductGeneral />},
        {path: 'inventory', element: <DashboardAddProductInventory/>},
        {path: 'media', element: <DashboardAddProductImages/>},
        {path: 'seo', element: <DashboardAddProductSEO />},
        {path: 'shipping&tax', element: <DashboardAddProductShipping/>},
        {path: 'status', element: <DashboardAddProductStatus/> }
      
      ]},
      
      {path: 'store/create', element: <DashboardAddStore/>}
    
    ]}
  
  ])
  
  return (
    <>
      <ShopContextProvider>
          <RouterProvider router={router}></RouterProvider>
      </ShopContextProvider>
    </>
  )
}


