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
    const [error, setError] = useState({show: false, msg:""})
    //request loading
    const [request, setRequest] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    //check rate
    const searchGithubUser = async (user) => {
        toggleError()
        setIsLoading(true)
        const response = await axios(`${rootUrl}/users/${user}`).catch(err => console.log(err));

        if(response){
            setGithubUser(response.data)
            const {login, followers_url} = response.data;
           
            await Promise.allSettled([await axios(`${rootUrl}/users/${login}/repos?per_page=100`),await axios(`${followers_url}?per_page=100`)])
            .then((results) => {
                const [repos, followers] = results;
                const status = 'fulfilled'
                if (repos.status === status){
                    setRepos(repos.value.data)
                }
                if (followers.status === status){
                    setFollowers(followers.value.data)
                }
            }).catch(err => console.log(error))
        } else {
            toggleError(true, 'there is no user with that username')
        }
        checkRequests();
        setIsLoading(false)
    }
    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
        .then(({data}) => {
            let{ rate:{remaining},} = data;
            setRequest(remaining)
            if(remaining===0){
                toggleError(true, "Sorry, you have exeeded your hourly rate limit")
            }
        })
        .catch((err) => console.log(err))
    }
    function toggleError(show=false, msg=""){
        setError({show, msg})
    }
    //error
    useEffect(checkRequests, [])
    return <GithubContext.Provider value={{
        repos, githubUser, followers, request, error, searchGithubUser, isLoading
    }}>
        {children}
    </GithubContext.Provider>
}

export {GithubProvider, GithubContext}
