//this page is imported by SplashScreen.js
//page1 of container box
//this contains the parts that are shown on Container box, that appears on home page 

import styled from "styled-components";

const HomeWeatherLogo=styled.img`
    width: 140px;
    height:140px;
    margin: 40px auto;
`
const SearchCityLabel=styled.span`
    color:black;
    font-size:18px;
    font-weight:bold;
    margin: 10px auto;

`
const SearchBox=styled.form`
    display: flex;
    flex-direction: row;
    border: black solid 1px;
    border-radius: 2px;
    color:black;
    font-size:18px;
    font-weight: bold;
    margin: 20px auto;
    
    & input{
        padding:10px;
        font-size:14px;
        outline:none;
        border:none;
        font-family: Montserrat;
        font-weight:700;
        
        
    }
    & button{
        background-color:black;
        padding: 0 10px;
        font-size:14px;
        color:Lightgray;
        outline:none;
        border:none;
        cursor:pointer;
        font-family: Montserrat;
        font-weight:400;
        
        

    }
    

`

const CityComponent=(props)=>{
    const {updateCity,fetchWeather}=props;
    return(
        <>
        <HomeWeatherLogo src="/icons/HomePic.svg"></HomeWeatherLogo>
        <SearchCityLabel>Search City:</SearchCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder="City name..." 
            onChange={(e)=>updateCity(e.target.value)}>
            </input>

            <button type="submit">Search</button>
        </SearchBox>
        </>
    );
};
export default CityComponent;