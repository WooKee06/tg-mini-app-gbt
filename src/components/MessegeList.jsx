import React from 'react'
import { useSelector } from 'react-redux'

const MessegeList = () => {
	const messegeList = useSelector(state => state.messege.messegeList)
	const gptmessegeList = useSelector(state => state.messege.gptMessegeList)

	return (
		<>
			<div className='messeges '>
				<ul className={`usermsg ${!messegeList.length >= 0 ? 'hide' : ''}`}>
					{messegeList.map((message, index) => (
						<li key={index}>{message}</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default MessegeList
