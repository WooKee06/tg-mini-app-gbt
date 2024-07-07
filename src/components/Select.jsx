import React, { useState } from 'react'
import Manual from './Manual'

const Select = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState('GPT-3.5')
	const [manual, setManualOpen] = useState(false)

	const OpenManualPop = () => {
		setManualOpen(true)
	}

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleOptionClick = option => {
		setSelectedOption(option)
		setIsOpen(false)
	}

	return (
		<>
			<div className='gbt-version'>
				<div className='version'>
					<Manual
						manual={manual}
						setManualOpen={setManualOpen}
						title='Пользовательская инструкция'
					>
						<p>
							Пользовательские инструкции позволяют вам указать важные сведения
							о себе, котарые помогут улучшить качество ответов Сбзи6РТ. Вы
							можете поделиться своими интересами, предпочтениями,
							профессиональной сферой и другими деталями, чтобы ответы были
							более точными и полевными для вас. Например: Я - студент
							медицинского университета. Отвечай как профессор медицины. Все
							ответы должны быть научно обоснованными.
						</p>

						<form action=''>
							<input type='text' placeholder='название инструкции' />
							<textarea rows={5} type='text' placeholder='инструкция' />
							<button>Сохрaнить</button>
						</form>
					</Manual>

					<div className={`select ${isOpen ? 'is-active' : ''}`}>
						<div className='select__header' onClick={toggleDropdown}>
							<span className='select__current'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M18.496 10.7089L9.85997 19.5889C9.61997 19.8349 9.22197 19.5499 9.37797 19.2439L12.452 13.1779C12.4753 13.1322 12.4864 13.0812 12.4843 13.0299C12.4823 12.9785 12.467 12.9286 12.4401 12.8848C12.4133 12.8411 12.3756 12.805 12.3307 12.78C12.2859 12.7549 12.2353 12.7418 12.184 12.7419H5.71797C5.65891 12.7419 5.60118 12.7244 5.55201 12.6917C5.50285 12.659 5.46443 12.6125 5.44158 12.558C5.41873 12.5036 5.41246 12.4436 5.42356 12.3856C5.43466 12.3276 5.46263 12.2741 5.50397 12.2319L13.514 4.11695C13.746 3.88195 14.132 4.13995 14.003 4.44495L11.706 9.85995C11.6865 9.90586 11.6788 9.95589 11.6836 10.0055C11.6883 10.0551 11.7053 10.1028 11.7331 10.1442C11.7609 10.1856 11.7986 10.2194 11.8428 10.2426C11.8869 10.2658 11.9361 10.2776 11.986 10.2769L18.277 10.1989C18.3363 10.198 18.3947 10.2147 18.4445 10.2469C18.4944 10.2791 18.5336 10.3254 18.5572 10.3799C18.5807 10.4344 18.5876 10.4947 18.5769 10.5531C18.5661 10.6115 18.5383 10.6654 18.497 10.7079'
										fill='black'
									/>
								</svg>
								{selectedOption}
							</span>
							<div className='select__icon'>
								<svg
									width='11'
									height='6'
									viewBox='0 0 20 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1.00009 15H19.0001C19.1823 14.9994 19.361 14.9491 19.5168 14.8546C19.6726 14.7601 19.7996 14.6248 19.8843 14.4634C19.9689 14.302 20.008 14.1206 19.9972 13.9387C19.9864 13.7568 19.9262 13.5812 19.8231 13.431L10.8231 0.430983C10.4501 -0.108017 9.55209 -0.108017 9.17809 0.430983L0.178085 13.431C0.0739103 13.5809 0.0128196 13.7566 0.00145064 13.9388C-0.00991832 14.121 0.0288693 14.3029 0.113599 14.4646C0.198329 14.6263 0.325761 14.7617 0.48205 14.8561C0.638338 14.9505 0.817505 15.0003 1.00009 15Z'
										fill='black'
									/>
								</svg>
							</div>
						</div>
						<div className='select__body'>
							<div className='select__items'>
								<div
									className='select__item'
									onClick={() => handleOptionClick('GPT-3.5')}
								>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M12.0001 17.27L16.1501 19.78C16.9101 20.24 17.8401 19.56 17.6401 18.7L16.5401 13.98L20.2101 10.8C20.8801 10.22 20.5201 9.12001 19.6401 9.05001L14.8101 8.64001L12.9201 4.18001C12.5801 3.37001 11.4201 3.37001 11.0801 4.18001L9.19007 8.63001L4.36007 9.04001C3.48007 9.11001 3.12007 10.21 3.79007 10.79L7.46007 13.97L6.36007 18.69C6.16007 19.55 7.09007 20.23 7.85007 19.77L12.0001 17.27Z'
											fill='black'
										/>
									</svg>
									GPT-4
								</div>
								<div
									className='select__item'
									onClick={() => handleOptionClick('GPT-4o')}
								>
									<svg
										width='22'
										height='22'
										viewBox='0 0 16 16'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clipPath='url(#clip0_4795_254)'>
											<path
												d='M7.65705 6.24697C7.76705 5.91697 8.23306 5.91697 8.34306 6.24697L8.98805 8.18397C9.13003 8.60977 9.36923 8.99665 9.6867 9.31394C10.0042 9.63124 10.3912 9.87023 10.8171 10.012L12.7531 10.657C13.0831 10.767 13.0831 11.233 12.7531 11.343L10.8161 11.988C10.3903 12.1299 10.0034 12.3691 9.68608 12.6866C9.36878 13.0041 9.12979 13.3911 8.98805 13.817L8.34306 15.753C8.31934 15.8252 8.27341 15.8882 8.21181 15.9328C8.15022 15.9774 8.07611 16.0014 8.00005 16.0014C7.924 16.0014 7.84989 15.9774 7.7883 15.9328C7.7267 15.8882 7.68077 15.8252 7.65705 15.753L7.01205 13.816C6.87018 13.3903 6.63114 13.0035 6.31385 12.6862C5.99656 12.3689 5.60975 12.1298 5.18405 11.988L3.24705 11.343C3.17479 11.3193 3.11187 11.2733 3.06726 11.2117C3.02264 11.1501 2.99862 11.076 2.99862 11C2.99862 10.9239 3.02264 10.8498 3.06726 10.7882C3.11187 10.7266 3.17479 10.6807 3.24705 10.657L5.18405 10.012C5.60975 9.8701 5.99656 9.63105 6.31385 9.31376C6.63114 8.99647 6.87018 8.60966 7.01205 8.18397L7.65705 6.24697ZM3.79405 1.14797C3.80839 1.10466 3.83602 1.06698 3.873 1.04027C3.90998 1.01356 3.95444 0.99918 4.00005 0.99918C4.04567 0.99918 4.09013 1.01356 4.12711 1.04027C4.16409 1.06698 4.19171 1.10466 4.20605 1.14797L4.59305 2.30997C4.76605 2.82797 5.17205 3.23397 5.69005 3.40697L6.85206 3.79397C6.89536 3.80831 6.93305 3.83593 6.95976 3.87291C6.98647 3.90989 7.00084 3.95435 7.00084 3.99997C7.00084 4.04559 6.98647 4.09004 6.95976 4.12702C6.93305 4.164 6.89536 4.19163 6.85206 4.20597L5.69005 4.59297C5.43443 4.67781 5.20214 4.82116 5.01169 5.01161C4.82124 5.20206 4.67789 5.43434 4.59305 5.68997L4.20605 6.85197C4.19171 6.89527 4.16409 6.93296 4.12711 6.95967C4.09013 6.98638 4.04567 7.00075 4.00005 7.00075C3.95444 7.00075 3.90998 6.98638 3.873 6.95967C3.83602 6.93296 3.80839 6.89527 3.79405 6.85197L3.40705 5.68997C3.32222 5.43434 3.17886 5.20206 2.98842 5.01161C2.79797 4.82116 2.56568 4.67781 2.31005 4.59297L1.14805 4.20597C1.10475 4.19163 1.06706 4.164 1.04035 4.12702C1.01364 4.09004 0.999268 4.04559 0.999268 3.99997C0.999268 3.95435 1.01364 3.90989 1.04035 3.87291C1.06706 3.83593 1.10475 3.80831 1.14805 3.79397L2.31005 3.40697C2.56568 3.32213 2.79797 3.17878 2.98842 2.98833C3.17886 2.79788 3.32222 2.56559 3.40705 2.30997L3.79405 1.14797ZM10.8631 0.0989675C10.8729 0.0704938 10.8914 0.0458034 10.916 0.0283291C10.9405 0.0108548 10.9699 0.00146484 11.0001 0.00146484C11.0302 0.00146484 11.0596 0.0108548 11.0841 0.0283291C11.1087 0.0458034 11.1272 0.0704938 11.1371 0.0989675L11.3951 0.872967C11.5101 1.21897 11.7811 1.48997 12.1271 1.60497L12.9011 1.86297C12.9295 1.87284 12.9542 1.89134 12.9717 1.91589C12.9892 1.94044 12.9986 1.96983 12.9986 1.99997C12.9986 2.0301 12.9892 2.05949 12.9717 2.08404C12.9542 2.1086 12.9295 2.1271 12.9011 2.13697L12.1271 2.39497C11.9567 2.45197 11.8019 2.54776 11.6749 2.67478C11.5478 2.80181 11.4521 2.95661 11.3951 3.12697L11.1371 3.90097C11.1272 3.92944 11.1087 3.95413 11.0841 3.97161C11.0596 3.98908 11.0302 3.99847 11.0001 3.99847C10.9699 3.99847 10.9405 3.98908 10.916 3.97161C10.8914 3.95413 10.8729 3.92944 10.8631 3.90097L10.6051 3.12697C10.5481 2.95661 10.4523 2.80181 10.3252 2.67478C10.1982 2.54776 10.0434 2.45197 9.87305 2.39497L9.10005 2.13697C9.07158 2.1271 9.04689 2.1086 9.02942 2.08404C9.01194 2.05949 9.00255 2.0301 9.00255 1.99997C9.00255 1.96983 9.01194 1.94044 9.02942 1.91589C9.04689 1.89134 9.07158 1.87284 9.10005 1.86297L9.87405 1.60497C10.2201 1.48997 10.4911 1.21897 10.6061 0.872967L10.8631 0.0989675Z'
												fill='black'
											/>
										</g>
										<defs>
											<clipPath id='clip0_4795_254'>
												<rect width='16' height='16' fill='white' />
											</clipPath>
										</defs>
									</svg>
									GPT-4o
								</div>
								<div
									className='select__item'
									onClick={() => handleOptionClick('YandexGPT')}
								>
									<svg
										width='18'
										height='18'
										viewBox='0 0 31 31'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle cx='15.5' cy='15.5' r='15.5' fill='black' />
										<path
											d='M17.5956 17.7191L13.7806 25H11L15.1905 17.2145C13.2218 16.3646 11.9079 14.8246 11.9079 11.9783C11.9036 7.99277 14.8762 6 18.4075 6H22V25H19.5948V17.7191H17.5956ZM19.5948 7.72559H18.3115C16.3734 7.72559 14.4964 8.8166 14.4964 11.9783C14.4964 15.0324 16.2163 16.0158 18.3115 16.0158H19.5948V7.72559Z'
											fill='white'
										/>
									</svg>
									YandexGPT
								</div>
							</div>
						</div>
					</div>
					<svg
						width='24'
						height='24'
						onClick={OpenManualPop}
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M8 9H16M8 13H14M14 18H13L8 21V18H6C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H18C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V11.5M19 22V22.01M19 19C19.4483 18.9986 19.8832 18.8468 20.235 18.569C20.5868 18.2911 20.8352 17.9033 20.9406 17.4675C21.0459 17.0318 21.0019 16.5733 20.8158 16.1655C20.6297 15.7576 20.3122 15.424 19.914 15.218C19.5162 15.0142 19.0611 14.951 18.6228 15.0387C18.1845 15.1264 17.7888 15.3598 17.5 15.701'
							stroke='black'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
			</div>
		</>
	)
}

export default Select