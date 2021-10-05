


document.addEventListener('DOMContentLoaded', () => {
	fetchData()
})

const fetchData = async() => {
	try {
		const res = await fetch('json/api.json', {
  mode: 'no-cors',
  credentials: 'include'
})
		const data = await res.json()
	} catch (error){
		console.log(error)
	}
}