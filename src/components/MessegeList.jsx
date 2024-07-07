import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

const MessegeList = () => {
	const messegeList = useSelector(state => state.messege.messegeList)
	const messagesEndRef = useRef(null)
	const ChatmessageList = useSelector(state => state.messege.messegeList)

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		scrollToBottom()
	}, [ChatmessageList])

	return (
		<>
			<div className='messeges '>
				<ul className={`usermsg ${!messegeList.length >= 0 ? 'hide' : ''}`}>
					{messegeList.map((msg, index) => (
						<li
							key={index}
							className={msg.type === 'gpt' ? 'gpt-message' : 'user-message'}
						>
							{msg.text}
						</li>
					))}
					<div ref={messagesEndRef} />
				</ul>
			</div>
		</>
	)
}

export default MessegeList
