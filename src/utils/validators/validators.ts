export const requiredField = (value: any) => {
	if (value) return undefined
	return 'Field is required'
}

export const maxLength30 = (value: any) => {
	if (value && value.length > 30) return 'MAX length is >30 symbols'
	return undefined
}

//
export const maxLengthCreator = (maxLength: number) => (value: string) => {
	if (value && value.length > maxLength) return `Must be ${maxLength} symbols or less`
	return undefined
}
