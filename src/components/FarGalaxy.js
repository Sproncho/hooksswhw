import React, {Component, useEffect, useState} from 'react';
import {base_url} from "../utils/constants";
import styles from '../css/farGalaxy.module.css';

const FarGalaxy = () => {


    const [crawl, setCrawl] = useState('Loading...');
    useEffect({
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if(opening_crawl) {
            setCrawl(opening_crawl)
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
        .then(response => response.json())
        .then(data => {
            setCrawl(data.opening_crawl);
            sessionStorage.setItem('opening_crawl', data.opening_crawl);
        });
}
},[])



        return (
            <p className={styles.farGalaxy}>{this.state.opening_crawl}</p>
        );

}

export default FarGalaxy;