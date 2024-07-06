import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.scss'
import Chat from './components/Chat.jsx'
import Header from './components/Header'
import MessegeList from './components/MessegeList.jsx'
import Select from './components/Select'
import Hints from './hints/Hints.jsx'

function App() {
	return (
		<Router>
			<div className='app'>
				<Header />
				<div className='chat-wrap wrap'>
					<Select />
					<MessegeList />
					<Hints />
				</div>
				<Chat />
			</div>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</Router>
	)
}

export default App
