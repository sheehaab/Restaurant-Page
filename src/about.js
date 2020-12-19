let page = ()=>{
	//get the content in html to put the elements in it
	const content = document.getElementById('content');
	
	//create the nav and give the nav id
	const nav = document.createElement('nav');
	nav.setAttribute('id','nav');
	content.appendChild(nav);
	
	//create the ul 
	const ul = document.createElement('ul');
	ul.setAttribute('id','ul');
	nav.appendChild(ul);

	//create the li
	for(let i=0;i<3;i++){
		const li = document.createElement('li');
		//create id for every li in the ul
		li.setAttribute('id', i+1)
		ul.appendChild(li);
	}

	//get the li from dom by id 
	const liOne = document.getElementById('1');
	const liTwo = document.getElementById('2');
	const liThree = document.getElementById('3');
	
	//put text to every li
	liOne.textContent = 'home';
	liTwo.textContent = 'menu';
	liThree.textContent = 'about';
}

export {page};