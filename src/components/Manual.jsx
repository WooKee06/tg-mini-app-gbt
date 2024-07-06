import React from 'react'

const Manual = ({ manual, setManualOpen, children, title }) => {
	const closeManualPop = () => {
		setManualOpen(false)
	}
	return (
		<div className={`manual ${manual ? 'hide ' : ''}`}>
			<div className='manual-pop'>
				<div className='close-manual'>
					<svg
						width='25'
						className='close'
						onClick={closeManualPop}
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
					<span>{title}</span>
				</div>
				{children}
			</div>
		</div>
	)
}

export default Manual
