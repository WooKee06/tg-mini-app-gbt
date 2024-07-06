import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInMessege } from '../store/messege/reducer'
import data from './Hints.json'

const Hints = () => {
	const [hints, setHints] = useState(false)
	const dispatch = useDispatch()
	const messegeList = useSelector(state => state.messege.messegeList)

	const autoMessegePush = msg => {
		dispatch(setUserInMessege(msg))
		setHints(true)
	}

	return (
		<>
			<div className={`hints ${messegeList.length == 0 ? 'hide' : ''}`}>
				<ul>
					{data.map((hint, index) => (
						<li
							key={index}
							onClick={() => autoMessegePush(hint.title + hint.conent)}
						>
							<div className='title'>{hint.title}</div>
							<div className='conent'>{hint.conent}</div>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Hints
