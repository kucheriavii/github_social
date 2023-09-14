import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import { createContext } from 'react';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext()
const GithubProvider = ({children}) => {
    return <GithubContext.Provider value={{test:"Valianok"}}>
        {children}
    </GithubContext.Provider>
}

export {GithubProvider, GithubContext}
