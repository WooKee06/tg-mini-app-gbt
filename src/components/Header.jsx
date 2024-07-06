import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Manual from './Manual'
const Header = () => {
	const [burder, setBurgerOpen] = useState(false)
	const [manual, setManualOpen] = useState(false)

	const OpenManualPop = () => {
		setManualOpen(true)
	}
	const OpenBurgerMenu = () => {
		setBurgerOpen(true)
	}
	const closeBurgerMenu = () => {
		setBurgerOpen(false)
	}

	const CreateNewChat = e => {
		e.preventDefault()
		setManualOpen(false)
		toast('Новый чат создан!')
	}

	return (
		<>
			<Manual manual={manual} setManualOpen={setManualOpen} title='Новый чат'>
				<form action=''>
					<input type='text' placeholder='название нового чата' />
					<button onClick={CreateNewChat}>Создать</button>
				</form>
			</Manual>

			<header>
				<div className='burger'>
					<svg
						width='16'
						height='12'
						onClick={OpenBurgerMenu}
						viewBox='0 0 16 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1 1H3.625M15 1H7.125M15 11H12.375M1 11H8.875M1 6H15'
							stroke='black'
							strokeWidth='1.9'
							strokeLinecap='round'
						/>
					</svg>
				</div>
				<div onClick={OpenManualPop} className='new-chat'>
					<svg
						width='19'
						height='19'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M8.5 2.75C8.5 2.55109 8.42098 2.36032 8.28033 2.21967C8.13968 2.07902 7.94891 2 7.75 2C7.55109 2 7.36032 2.07902 7.21967 2.21967C7.07902 2.36032 7 2.55109 7 2.75V7H2.75C2.55109 7 2.36032 7.07902 2.21967 7.21967C2.07902 7.36032 2 7.55109 2 7.75C2 7.94891 2.07902 8.13968 2.21967 8.28033C2.36032 8.42098 2.55109 8.5 2.75 8.5H7V12.75C7 12.9489 7.07902 13.1397 7.21967 13.2803C7.36032 13.421 7.55109 13.5 7.75 13.5C7.94891 13.5 8.13968 13.421 8.28033 13.2803C8.42098 13.1397 8.5 12.9489 8.5 12.75V8.5H12.75C12.9489 8.5 13.1397 8.42098 13.2803 8.28033C13.421 8.13968 13.5 7.94891 13.5 7.75C13.5 7.55109 13.421 7.36032 13.2803 7.21967C13.1397 7.07902 12.9489 7 12.75 7H8.5V2.75Z'
							fill='black'
						/>
					</svg>
				</div>
			</header>

			<div className={`burger-wrap ${burder ? 'hide' : ''}`}>
				<div className='close-btn'>
					<button onClick={closeBurgerMenu}>
						<svg
							width='25'
							className='close'
							height='25'
							viewBox='0 0 512 512'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M289.94 256L384.94 161C389.449 156.499 391.985 150.392 391.991 144.021C391.996 137.651 389.471 131.539 384.97 127.03C380.469 122.521 374.362 119.985 367.991 119.98C361.621 119.974 355.509 122.499 351 127L256 222L161 127C156.491 122.491 150.376 119.958 144 119.958C137.624 119.958 131.509 122.491 127 127C122.491 131.509 119.958 137.624 119.958 144C119.958 150.376 122.491 156.491 127 161L222 256L127 351C122.491 355.509 119.958 361.624 119.958 368C119.958 374.376 122.491 380.491 127 385C131.509 389.509 137.624 392.042 144 392.042C150.376 392.042 156.491 389.509 161 385L256 290L351 385C355.509 389.509 361.624 392.042 368 392.042C374.376 392.042 380.491 389.509 385 385C389.509 380.491 392.042 374.376 392.042 368C392.042 361.624 389.509 355.509 385 351L289.94 256Z'
								fill='black'
							/>
						</svg>
					</button>
				</div>

				<div className='burger-content'>
					<ul>
						<li>
							<svg
								width='25'
								height='25'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z'
									fill='black'
								/>
							</svg>
							Создать чат
						</li>
						<li>
							<svg
								width='25'
								height='25'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M2 18C2 16.46 2 15.69 2.347 15.124C2.541 14.807 2.807 14.541 3.124 14.347C3.689 14 4.46 14 6 14C7.54 14 8.31 14 8.876 14.347C9.193 14.541 9.459 14.807 9.653 15.124C10 15.689 10 16.46 10 18C10 19.54 10 20.31 9.653 20.877C9.459 21.193 9.193 21.459 8.876 21.653C8.311 22 7.54 22 6 22C4.46 22 3.69 22 3.124 21.653C2.80735 21.4593 2.54108 21.1934 2.347 20.877C2 20.31 2 19.54 2 18ZM14 18C14 16.46 14 15.69 14.347 15.124C14.541 14.807 14.807 14.541 15.124 14.347C15.689 14 16.46 14 18 14C19.54 14 20.31 14 20.877 14.347C21.193 14.541 21.459 14.807 21.653 15.124C22 15.689 22 16.46 22 18C22 19.54 22 20.31 21.653 20.877C21.4589 21.1931 21.1931 21.4589 20.877 21.653C20.31 22 19.54 22 18 22C16.46 22 15.69 22 15.124 21.653C14.8073 21.4593 14.5411 21.1934 14.347 20.877C14 20.31 14 19.54 14 18ZM2 6C2 4.46 2 3.69 2.347 3.124C2.541 2.807 2.807 2.541 3.124 2.347C3.689 2 4.46 2 6 2C7.54 2 8.31 2 8.876 2.347C9.193 2.541 9.459 2.807 9.653 3.124C10 3.689 10 4.46 10 6C10 7.54 10 8.31 9.653 8.876C9.459 9.193 9.193 9.459 8.876 9.653C8.311 10 7.54 10 6 10C4.46 10 3.69 10 3.124 9.653C2.80724 9.45904 2.54096 9.19277 2.347 8.876C2 8.311 2 7.54 2 6ZM14 6C14 4.46 14 3.69 14.347 3.124C14.541 2.807 14.807 2.541 15.124 2.347C15.689 2 16.46 2 18 2C19.54 2 20.31 2 20.877 2.347C21.193 2.541 21.459 2.807 21.653 3.124C22 3.689 22 4.46 22 6C22 7.54 22 8.31 21.653 8.876C21.459 9.193 21.193 9.459 20.877 9.653C20.31 10 19.54 10 18 10C16.46 10 15.69 10 15.124 9.653C14.8072 9.45904 14.541 9.19277 14.347 8.876C14 8.311 14 7.54 14 6Z'
									stroke='black'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							База затравок
						</li>
						<li>
							<svg
								width='25'
								height='25'
								viewBox='0 0 65 65'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M32.5 8.125C29.299 8.125 26.1294 8.75548 23.1721 9.98044C20.2148 11.2054 17.5277 13.0008 15.2643 15.2643C13.0008 17.5277 11.2054 20.2148 9.98044 23.1721C8.75548 26.1294 8.125 29.299 8.125 32.5C8.125 35.701 8.75548 38.8706 9.98044 41.8279C11.2054 44.7852 13.0008 47.4723 15.2643 49.7357C17.5277 51.9992 20.2148 53.7946 23.1721 55.0196C26.1294 56.2445 29.299 56.875 32.5 56.875C38.9647 56.875 45.1645 54.3069 49.7357 49.7357C54.3069 45.1645 56.875 38.9647 56.875 32.5C56.875 26.0353 54.3069 19.8355 49.7357 15.2643C45.1645 10.6931 38.9647 8.125 32.5 8.125ZM32.5 4.0625C40.0421 4.0625 47.2753 7.05858 52.6083 12.3917C57.9414 17.7247 60.9375 24.9579 60.9375 32.5C60.9375 40.0421 57.9414 47.2753 52.6083 52.6083C47.2753 57.9414 40.0421 60.9375 32.5 60.9375C24.9579 60.9375 17.7247 57.9414 12.3917 52.6083C7.05858 47.2753 4.0625 40.0421 4.0625 32.5C4.0625 24.9579 7.05858 17.7247 12.3917 12.3917C17.7247 7.05858 24.9579 4.0625 32.5 4.0625Z'
									fill='black'
								/>
								<path
									d='M40.6251 18.2812C43.3335 18.2812 44.6876 19.6354 44.6876 22.3438C44.6876 25.0521 43.3335 26.4062 40.6251 26.4062C37.9168 26.4062 36.5626 25.0521 36.5626 22.3438C36.5626 19.6354 37.9168 18.2812 40.6251 18.2812ZM13.6258 50.1881L10.7495 47.3119L22.5348 35.5306C23.5549 34.5101 24.904 33.8846 26.342 33.7656C27.78 33.6466 29.2136 34.0417 30.3876 34.8806L39.1626 41.145C39.5377 41.4123 39.9924 41.5442 40.4523 41.5191C40.9122 41.494 41.3499 41.3134 41.6936 41.0069L57.5536 26.8125L60.2592 29.8431L44.4033 44.0334C43.3717 44.9567 42.0565 45.5011 40.6742 45.5772C39.2919 45.6532 37.9249 45.2564 36.7983 44.4519L28.0233 38.1834C27.6321 37.9056 27.1552 37.7752 26.677 37.8154C26.1989 37.8555 25.7504 38.0636 25.4111 38.4028L13.6258 50.1841V50.1881Z'
									fill='black'
								/>
							</svg>
							Dalle-3
						</li>
						<li>
							<svg
								width='25'
								height='25'
								viewBox='0 0 65 65'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M32.5 8.125C29.299 8.125 26.1294 8.75548 23.1721 9.98044C20.2148 11.2054 17.5277 13.0008 15.2643 15.2643C13.0008 17.5277 11.2054 20.2148 9.98044 23.1721C8.75548 26.1294 8.125 29.299 8.125 32.5C8.125 35.701 8.75548 38.8706 9.98044 41.8279C11.2054 44.7852 13.0008 47.4723 15.2643 49.7357C17.5277 51.9992 20.2148 53.7946 23.1721 55.0196C26.1294 56.2445 29.299 56.875 32.5 56.875C38.9647 56.875 45.1645 54.3069 49.7357 49.7357C54.3069 45.1645 56.875 38.9647 56.875 32.5C56.875 26.0353 54.3069 19.8355 49.7357 15.2643C45.1645 10.6931 38.9647 8.125 32.5 8.125ZM32.5 4.0625C40.0421 4.0625 47.2753 7.05858 52.6083 12.3917C57.9414 17.7247 60.9375 24.9579 60.9375 32.5C60.9375 40.0421 57.9414 47.2753 52.6083 52.6083C47.2753 57.9414 40.0421 60.9375 32.5 60.9375C24.9579 60.9375 17.7247 57.9414 12.3917 52.6083C7.05858 47.2753 4.0625 40.0421 4.0625 32.5C4.0625 24.9579 7.05858 17.7247 12.3917 12.3917C17.7247 7.05858 24.9579 4.0625 32.5 4.0625Z'
									fill='black'
								/>
								<path
									d='M40.6251 18.2812C43.3335 18.2812 44.6876 19.6354 44.6876 22.3438C44.6876 25.0521 43.3335 26.4062 40.6251 26.4062C37.9168 26.4062 36.5626 25.0521 36.5626 22.3438C36.5626 19.6354 37.9168 18.2812 40.6251 18.2812ZM13.6258 50.1881L10.7495 47.3119L22.5348 35.5306C23.5549 34.5101 24.904 33.8846 26.342 33.7656C27.78 33.6466 29.2136 34.0417 30.3876 34.8806L39.1626 41.145C39.5377 41.4123 39.9924 41.5442 40.4523 41.5191C40.9122 41.494 41.3499 41.3134 41.6936 41.0069L57.5536 26.8125L60.2592 29.8431L44.4033 44.0334C43.3717 44.9567 42.0565 45.5011 40.6742 45.5772C39.2919 45.6532 37.9249 45.2564 36.7983 44.4519L28.0233 38.1834C27.6321 37.9056 27.1552 37.7752 26.677 37.8154C26.1989 37.8555 25.7504 38.0636 25.4111 38.4028L13.6258 50.1841V50.1881Z'
									fill='black'
								/>
							</svg>
							Midjiorney
						</li>
						<li>
							<svg
								width='25'
								height='25'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M5.6 19.92L7.124 18.701L7.134 18.693C7.452 18.438 7.613 18.31 7.792 18.219C7.952 18.137 8.123 18.077 8.3 18.041C8.499 18 8.706 18 9.122 18H17.803C18.921 18 19.481 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.48 21 15.92 21 14.804V7.197C21 6.079 21 5.519 20.782 5.092C20.5899 4.71558 20.2836 4.40963 19.907 4.218C19.48 4 18.92 4 17.8 4H6.2C5.08 4 4.52 4 4.092 4.218C3.71565 4.40969 3.40969 4.71565 3.218 5.092C3 5.52 3 6.08 3 7.2V18.671C3 19.737 3 20.27 3.218 20.543C3.31174 20.6607 3.43083 20.7557 3.56641 20.821C3.70198 20.8863 3.85053 20.9201 4.001 20.92C4.351 20.92 4.767 20.586 5.6 19.92Z'
									stroke='black'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							Нужные идеи для артов
						</li>
					</ul>
					<div className='burger-menu'>
						<button>
							menu{' '}
							<svg
								width='20'
								height='20'
								viewBox='0 0 40 40'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M23.1122 8.98695C23.1124 9.39576 23.032 9.80058 22.8757 10.1783C22.7193 10.5561 22.4901 10.8993 22.2012 11.1885C21.9122 11.4776 21.5691 11.707 21.1914 11.8636C20.8138 12.0202 20.409 12.1008 20.0002 12.101C19.5914 12.1011 19.1866 12.0207 18.8089 11.8644C18.4311 11.7081 18.0879 11.4789 17.7987 11.1899C17.5096 10.9009 17.2801 10.5578 17.1236 10.1802C16.967 9.80253 16.8864 9.39776 16.8862 8.98895C16.886 8.16333 17.2137 7.37142 17.7973 6.78744C18.3809 6.20345 19.1726 5.87522 19.9982 5.87495C20.8238 5.87469 21.6158 6.20241 22.1997 6.78602C22.7837 7.36963 23.112 8.16133 23.1122 8.98695Z'
									fill='black'
								/>
								<path
									d='M23.1122 19.671C23.1122 17.9522 21.7189 16.559 20.0002 16.559C18.2815 16.559 16.8882 17.9522 16.8882 19.671C16.8882 21.3897 18.2815 22.783 20.0002 22.783C21.7189 22.783 23.1122 21.3897 23.1122 19.671Z'
									fill='black'
								/>
								<path
									d='M23.1122 30.357C23.1122 28.6383 21.7189 27.245 20.0002 27.245C18.2815 27.245 16.8882 28.6383 16.8882 30.357C16.8882 32.0757 18.2815 33.469 20.0002 33.469C21.7189 33.469 23.1122 32.0757 23.1122 30.357Z'
									fill='black'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
