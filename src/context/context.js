import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import { createContext } from 'react';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext()
const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers)
    //request loading
    const [request, setRequest] = useState(0);
    const [loading, setIsLoading] = useState(false);
    //check rate
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
        .then(({data}) => {
            let{ rate:{remaining},} = data;
            setRequest(remaining)
            if(remaining===0){
                //throw en error
            }
        })
        .catch((err) => console.log(err))
    }
    //error
    useEffect(checkRequests, [])
    return <GithubContext.Provider value={{
        repos, githubUser, followers, request
    }}>
        {children}
    </GithubContext.Provider>
}

export {GithubProvider, GithubContext}
