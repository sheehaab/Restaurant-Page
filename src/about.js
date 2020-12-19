let page = ()=>{
	//create the about 
	const about = document.createElement('div');
	about.setAttribute('id','about');
	content.appendChild(about);

	//create text div
	const text = document.createElement('div');
	text.classList.add('text');
	about.appendChild(text);


	//make the h2 and p
	const hTwo = document.createElement('h2');
	hTwo.textContent = 'About';
	const p = document.createElement('p');
	p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nunc dictum, blandit dui nec, molestie eros. Morbi semper quam vitae dolor tristique volutpat. Phasellus luctus n.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nunc dictum, blandit dui nec, molestie eros. Morbi semper quam vitae dolor tristique volutpat. Phasellus luctus n.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nunc dictum, blandit dui nec, molestie eros. Morbi semper quam vitae dolor tristique volutpat. Phasellus luctus n.'
	text.appendChild(hTwo);
	text.appendChild(p);

}

export {page};