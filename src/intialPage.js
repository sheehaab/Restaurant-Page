let page = () =>{	
	//crete the header
	const header = document.createElement('header');
	header.setAttribute('id','header')
	content.appendChild(header);

	//create the h1 and the span in the header
	const hOne = document.createElement('h1');
	hOne.setAttribute('id','head-content');
	hOne.textContent = 'Fusion × Food';
	const span = document.createElement('span');
	span.setAttribute('id','head-type');
	span.textContent = ' Resturant Berlin'
	header.appendChild(hOne);
	header.appendChild(span);
}

export{page};

