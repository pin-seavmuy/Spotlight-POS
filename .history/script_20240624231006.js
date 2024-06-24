document.querySelectorAll('.wrapper').forEach(item => {
	item.addEventListener('click', () => {
	  document.querySelectorAll('.wrapper').forEach(innerItem => {
		innerItem.classList.remove('active');
	  });
	  item.classList.add('active');
	});
  });
  