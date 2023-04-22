import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

const Button = ({ label, className }) => {
	return (
		<button className={className}>
			{ label }
		</button>
	)
}

export default Button