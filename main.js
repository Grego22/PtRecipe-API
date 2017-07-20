let pupp = document.querySelector('.puppies')
let button = document.querySelector('.butt')
let search = document.querySelector('.searchbox')
let fun = ''

let url = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q='

button.addEventListener('click', () => {
	fun = search.value

	fetch(url + fun).then(response => response.json()).then(grego => {
		for (var i = 0; i < grego.results.length; i++) {
			let newLi = document.createElement('li')

			let title = document.createElement('h3')
			title.textContent += grego.results[i].title
			newLi.appendChild(title)

			let img = document.createElement('img')
			img.src = grego.results[i].thumbnail
			newLi.appendChild(img)

			let linkage = document.createElement('a')
			linkage.href = grego.results[i].href
			newLi.appendChild(linkage)

			pupp.appendChild(newLi)
		}
	})
})
