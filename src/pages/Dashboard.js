import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import { useContext } from 'react';
const Dashboard = () => {
  const {isLoading} = useContext(GithubContext)
  // console.log(isLoading)
  if (isLoading){
    return <main>
      <Navbar/>
      <Search />
      <img src={loadingImage} className='loading-img' alt="loading" />
    </main>
  } else {
    return (
      <main>
        <Navbar></Navbar>
        <Search></Search>
        <Info></Info>
        <User></User>
        <Repos />
      </main>
    );
  }
};

export default Dashboard;
