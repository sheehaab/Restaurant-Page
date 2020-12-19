let page = ()=>{
	//create menu
	const menu = document.createElement('div');
	menu.setAttribute('id','menu');
	content.appendChild(menu);


	//create the four dishes 
	for(let i=0;i<4;i++){
		const dish = document.createElement('div');
		dish.setAttribute('id','dish'+i);
		dish.classList.add('dish')
		const imageContaienr = document.createElement('div');
		imageContaienr.setAttribute('id','img'+ i);
		imageContaienr.classList.add('img');
		const image = document.createElement('img');
		const text = document.createElement('div');
		text.setAttribute('id','text');
		const hThree = document.createElement('h3');
		hThree.setAttribute('id','h' + i)
		const span = document.createElement('span');
		span.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nunc dictum, blandit dui nec, molestie eros. Morbi semper quam vitae dolor tristique volutpat. Phasellus luctus n.'

		menu.appendChild(dish);
		dish.appendChild(imageContaienr);
		dish.appendChild(text);
		text.appendChild(hThree);
		text.appendChild(span);
		imageContaienr.appendChild(image);

	}

	//get the images
	const img0 = document.getElementById('img0').firstElementChild;
	const img1 = document.getElementById('img1').firstElementChild;
	const img2 = document.getElementById('img2').firstElementChild;
	const img3 = document.getElementById('img3').firstElementChild;
	let h0 = document.getElementById('h0');
	let h1 = document.getElementById('h1');
	let h2 = document.getElementById('h2');
	let h3 = document.getElementById('h3');
	h0.textContent = 'Chicken Steak With Grilled Vegetables';
	h1.textContent = 'Beef Stroganoff';
	h2.textContent = 'Waldorf Salad';
	h3.textContent = 'Carpaccio';


	img0.setAttribute('src','photos/first.png');
	img1.setAttribute('src','photos/two.png');
	img2.setAttribute('src','photos/three.png');
	img3.setAttribute('src','photos/four.png');


	//create lower and uppper divs
	const upper = document.createElement('div');
	const lower = document.createElement('div');
	upper.setAttribute('id','upper');
	lower.setAttribute('id','lower')
	const dish0 = document.getElementById('dish0');
	const dish1 = document.getElementById('dish1');
	const dish2 = document.getElementById('dish2');
	const dish3 = document.getElementById('dish3');

	menu.appendChild(upper);
	menu.appendChild(lower);
	upper.appendChild(dish0);
	upper.appendChild(dish1);
	lower.appendChild(dish2);
	lower.appendChild(dish3);




}

export {page};