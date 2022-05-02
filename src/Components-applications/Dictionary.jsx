import { React, useState } from 'react'
import Axios from 'axios'
import './css/dictionary.css'
import { FaSearch } from 'react-icons/fa'
import { FcSpeaker } from 'react-icons/fc'
import dict from '../img/dict.png'

function Dictionary() {
	const [data, setData] = useState('');
	const [searchWord, setSearchWord] = useState('');
	const [catchError, setCatchError] = useState(false);

	function getMeaning() {
		Axios.get(
			`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
		).then((response) => {
			setCatchError(false);
			setData(response.data[0])
		}).catch((err) => 
		{
			setData('');
			setCatchError(true);
		})
	}

	function playAudio() {
		let audio = new Audio(data.phonetics[0].audio)
		audio.play()
	}

	return (
		<div className="Dict">
			<img src={dict} alt="" className='dict-img'/>

			<div className="searchBox">
				<input
					type="text"
					placeholder="Eg: Resistance"
					onChange={(e) => {
						setSearchWord(e.target.value)
					}}
					onKeyDown={(e) => {if(e.key==="Enter"){
						e.preventDefault();
						setSearchWord(e.target.value);
						getMeaning();
					}}}
				/>
				<button
					onClick={() => {
						getMeaning()
					}}>
					<FaSearch size="20px" />
				</button>
			</div>
			{ catchError && 
					<div className='errorMessage'>Word Not Found! try again...</div>
			}
			{data && (
				<div className="showResults">
					<h2>
						{data.word}{' '}
						<button
							onClick={() => {
								playAudio()
							}}>
							<FcSpeaker size="26px" />
						</button>
					</h2>
					<h4>Parts of speech:</h4>
					<p>{data.meanings[0].partOfSpeech}</p>

					<h4>Definition:</h4>
					<p>{data.meanings[0].definitions[0].definition}</p>

					<h4>Example:</h4>
					<p>{data.meanings[0].definitions[0].example}</p>
				</div>
			)}
		</div>
	)
}

export default Dictionary
