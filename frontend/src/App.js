import React from 'react';
import Header from './components/Header/index.jsx';
// import { Prototype } from './components/TestComponent';
import AboutUs from './components/AboutUsSection/AboutUs';
import EstimateSection from './components/EstimateSection';
import BestExpertiseSection from './components/BestExpertiseSection/BestExpertiseSection';
// import { Prototype } from './components/TestComponent';
// import { API } from './modules/apis';
import Gallery from '../src/components/GalleryComponent/Gallery';
import { Navbar } from './components/Navbar';
import { UpdatedPosts } from './components/UpdatedPosts';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Prototype /> */}
        <AboutUs />
        <BestExpertiseSection />
        <Gallery />
        <EstimateSection />
        <UpdatedPosts />
      </div>
    );
  }
}
