import React from 'react';
import './MyForm.css'
import data from '../data.js'

const MyForm = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const [imgState, setImgState] = React.useState({
        url: '/',
        topText: '',
        bottomText: '',
    })

    function handleClick(evt) {
        setImgState(prevState =>
        {
            return {
            ...prevState,
            url : data.data.memes[getRandomInt(100)].url
        }})
        evt.preventDefault()
    }

    function handleChange(event) {
        const {name, value} = event.target
        setImgState(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <div>
            <form className='holder'>
                <div className='row'>
                <input
                    type='text'
                    className='text'
                    name='topText'
                    onChange={handleChange}
                    value={imgState.topText}
                />
                <input
                    type='text'
                    className='text'
                    name='bottomText'
                    onChange={handleChange}
                    value={imgState.bottomText}
                />
                </div>
                <input onClick={handleClick} type='submit' className='submit' value='Get my random image'></input>
            </form>
            <div className='meme'>
            <img className='meme--img' src={imgState.url}/>
                <h2 className="meme--text top">{imgState.topText}</h2>
                <h2 className="meme--text bottom">{imgState.bottomText}</h2>
            </div>
        </div>
    );
};

export default MyForm;