// yandex map
ymaps.ready(init);
function init(){
	var myMap = new ymaps.Map("map", {
    center: [48.753890, 44.484555],
    zoom: 16
  });

	// Метка на карте
	var myPlacemark = new ymaps.Placemark([48.753890, 44.484555], {}, {
		preset: 'islands#orangeIcon',
		iconImageSize: [30, 40],
		iconImageOffset: [0, -2]
	});

	myMap.geoObjects.add(myPlacemark); 
}
// end map


// open modelMenu

const modelParent = document.querySelector('.models');
const linkModel = document.querySelectorAll('.model__link');
const modelContent = document.querySelectorAll('.modelCar__content');

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
				console.log(i);
				hideTabContent();
				showTabContent(i);
			}
		});
	}
});

// end


// modal contact
const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');


  function openModel(){  
		console.log('open модалки')
    // modal.classList.toggle('show');
    // document.body.style.overflow = 'hidden';
  }

  modalTrigger.forEach(btn => {
      btn.addEventListener('click', openModel);
  });
  
  function closeModal(){
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal){
      closeModal();
    }
  });

  // bnt 'esc' close modal
  document.addEventListener('keydown', () => {
    if (e.code === "Escape" && modal.classList.contains('show')){
      closeModal();
    }
  });

