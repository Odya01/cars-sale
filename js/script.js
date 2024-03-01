// open modelMenu

const modelParent = document.querySelector('.models');
const linkModel = document.querySelectorAll('.model__link');
const modelContent = document.querySelectorAll('.modelCar__content');
const modelsItem = document.querySelectorAll('.models__item');

function hideTabContent(){
	modelContent.forEach(item => {
		item.classList.add('hide');
		item.classList.remove('show');
	});
}


function showTabContent(i = 0) {
	modelContent[i].classList.add('show');
	modelContent[i].classList.remove('hide');
}


modelParent.addEventListener('click', (event) =>{
	const target = event.target;

	if (target && target.classList.contains('model__link')) {
		linkModel.forEach((item, i)=>{
			if (target == item){
				hideTabContent();
				showTabContent(i);
			}
		});
	}
});

// end
