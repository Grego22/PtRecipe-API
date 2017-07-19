let pupp = document.querySelector('.puppies')
let button = document.querySelector('.butt')
let search = document.querySelector('.searchbox')
let fun = ''

let url = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q='

button.addEventListener('click', () => {
	fun = search.value

	fetch(url + fun).then(response => response.json()).then(grego => {
		console.log(grego)
		for (var i = 0; i < grego.results.length; i++) {
			let char = document.createElement('li')
			char.textContent += grego.results[i].title
			char.appendChild(pupp)

			let img = document.createElement('img')
			img.src = grego.results[i].thumbnail
			char.appendChild(img)

			let linkage = document.createElement('a')
			linkage.href = grego.results[i].href
			char.appendChild(linkage)
			console.log(grego)

			pupp.appendChild(char)
		}
	})
})
