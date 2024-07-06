import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserInMessege } from '../store/messege/reducer' // исправьте путь, если нужно

const YourComponent = () => {
	const [message, setMessage] = useState('')
	const [reply, setReply] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = async () => {
		// Проверка, что сообщение не пустое
		if (!message.trim()) {
			console.log('Message is empty')
			setReply('Message cannot be empty')
			return
		}

		try {
			const response = await fetch(
				'https://4d14-201-216-219-7.ngrok-free.app/ux/gpt/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ message }),
				},
				[dispatch]
			)

			if (!response.ok) {
				const errorData = await response.json()
				console.log('Error data:', errorData) // Проверка данных об ошибке
				throw new Error(errorData.error || 'Something went wrong')
			}

			const data = await response.json()

			if (data.response && data.response.content) {
				setReply(data.response.content)
			} else {
				setReply('No reply field in response')
			}

			setMessage('')
			dispatch(setUserInMessege(message))
			dispatch(setUserInMessege(data.response.content))
		} catch (error) {
			console.error('Error:', error.message)
			setReply('Error: ' + error.message)
		}
	}

	return (
		<div className='input-wrap wrap'>
			<div className='input'>
				<svg
					width='17'
					height='17'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M7.918 17.807L15.808 10.254C16.0322 10.0433 16.211 9.78894 16.3331 9.50653C16.4553 9.22413 16.5183 8.9197 16.5183 8.61201C16.5183 8.30431 16.4553 7.99988 16.3331 7.71748C16.211 7.43507 16.0322 7.18069 15.808 6.97001C15.3437 6.53329 14.7304 6.29013 14.093 6.29013C13.4556 6.29013 12.8423 6.53329 12.378 6.97001L4.544 14.468C4.11777 14.8683 3.77807 15.3516 3.54586 15.8882C3.31365 16.4248 3.19385 17.0033 3.19385 17.588C3.19385 18.1727 3.31365 18.7512 3.54586 19.2878C3.77807 19.8244 4.11777 20.3078 4.544 20.708C6.344 22.431 9.262 22.431 11.062 20.708L19.011 13.1C21.663 10.56 21.663 6.44401 19.011 3.90401C16.358 1.36501 12.057 1.36501 9.404 3.90401L3 10.034'
						stroke='black'
						strokeWidth='1.5'
						strokeLinecap='round'
					/>
				</svg>
				<input
					type='text'
					value={message}
					onChange={e => setMessage(e.target.value)}
					placeholder='Отправьте сообщение '
				/>
			</div>
			<svg
				width='20'
				height='20'
				onClick={handleSubmit}
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M3.4 20.4L20.85 12.92C21.0304 12.8432 21.1842 12.715 21.2923 12.5514C21.4004 12.3879 21.4581 12.1961 21.4581 12C21.4581 11.804 21.4004 11.6122 21.2923 11.4486C21.1842 11.2851 21.0304 11.1569 20.85 11.08L3.4 3.60003C3.2489 3.53412 3.08377 3.50687 2.91951 3.52073C2.75525 3.53459 2.59702 3.58912 2.4591 3.67942C2.32118 3.76971 2.20791 3.89292 2.1295 4.03793C2.0511 4.18293 2.01003 4.34518 2.01 4.51003L2 9.12003C2 9.62003 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z'
					fill='black'
				/>
			</svg>
		</div>
	)
}

export default YourComponent
