import React from 'react'
import { FaSearch } from "react-icons/fa";
import './ExploreMain.css'
import ExplorePost from './ExplorePost';

const ExploreMain = () => {
  return (
    <>
        <section className='explore-search'>
            <section className="search-section">
                <FaSearch size={30} color='#ffffff' /> 
                <input type="text" placeholder="search" />
            </section>
            <section className='explore-post-list'>
                <ExplorePost />
                <ExplorePost />
                <ExplorePost />
                <ExplorePost />
                <ExplorePost />
                <ExplorePost />
                <ExplorePost />
                <ExplorePost />
                <ExplorePost />
            </section>
        </section>
    </>

  )
}

export default ExploreMain