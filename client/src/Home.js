import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Layout from '../components/Layout/Layout';
import  Header from "../components/Layout/Header";
import Banner from '../components/Banner/Banner';
import Categories from '../components/category/Categories';
import Products from '../components/Products/Products';
import Footer from '../components/Layout/Footer';

const Home = () => {
    return (
      <Layout>
      <Header />
      <Categories />
      <Banner />  
      <Products />
      
      </Layout>
      
    );
  };

export default Home;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",

     },
});
