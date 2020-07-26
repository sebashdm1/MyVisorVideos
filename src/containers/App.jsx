import React, {useState,useEffect} from 'react';
import Header from '../component/Header';
import Search from '../component/Search';
import Carousel from '../component/Carousel';
import Categories from '../component/Categories';
import CarouselItem from '../component/CarouselItem';
import Footer from '../component/Footer';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState.js';
 
const API = 'http://localhost:3000/initialState';


const App = () => {
    
    const initialState= useInitialState(API);
    return initialState.length === 0 ? <h1> Loading... </h1> :(
        <div className = "App">
            <Header/>
            <Search/>
            {
              initialState.mylist.length > 0 &&  
              <Categories title="Mi lista">
                <Carousel>
                   <CarouselItem/>
                </Carousel>
               </Categories>
            }
           
            <Categories title="Estrenos 2021">
                <Carousel>
                    {initialState.trends.map(item=>
                        <CarouselItem key={item.id}{...item}/>
                    )}  
                </Carousel>
            </Categories>


            <Categories title="Productos de sebas">
                <Carousel>
                {initialState.originals.map(item=>
                        <CarouselItem key={item.id}{...item}/>
                    )}  
                </Carousel>
            </Categories>
            <Footer/>
        </div>
  );
}

export default App;