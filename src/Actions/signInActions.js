const verifyEmail = (email) => {
	const numberAts = email.replace(/[^@]/g, "").length===1
			// chck for no more than one @
	const atBain = email.substring(email.length-9).toLowerCase()==='@bain.com'		
			// check for @bain.com
	const fullEamil = email.substring(0,email.length-9).toLowerCase().match(/[a-z]/gi) !== null

	return (fullEamil&atBain&numberAts)
}

const verifyPassword = (password) => {
	// check password length
	const passLength = (password.length<=16 && password.length>=8)
	// check capital letters
	const capitalLetters = password.match(/[A-Z]/gi) !== null
	// check regular letters
	const regularLetters = password.match(/[a-z]/g) !== null
	// check numbers
	const numbers = password.match(/[0-9]/gi) !== null
	return (passLength&capitalLetters&regularLetters&numbers)
}

export const verifyRegisterData = (registerData) => {
	const {name ,password, email} = registerData
	let errorArray = []
	// Name verify
	if (name.trim().length === 0) {
		errorArray.push('User name must contain at least one non white space char')
	}
	// Bain email verify
	if (!verifyEmail(email)) {
		errorArray.push('You must enter a valid Bain email')
	}
	// password verify
	if (!verifyPassword(password)) {
		errorArray.push('Password must contain between 8 and 16 charcters, at least on capital letter, at least on regular letter and at least one number')
	}
	return errorArray
}

export const verifySignInData = (signIn) => {
	const {password, email} = signIn
	let errorArray = []
	// Bain email verify
	if (!verifyEmail(email)) {
		errorArray.push('You must enter a valid Bain email')
	}
	// password verify
	if (!verifyPassword(password)) {
		errorArray.push('Password must contain between 8 and 16 charcters, at least on capital letter, at least on regular letter and at least one number')
	}
	return errorArray
}
