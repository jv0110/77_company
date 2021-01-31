const countOne = () => {
  const countOne = document.querySelectorAll('.results-container .number')[0];
  let counterOne = new countUp.CountUp(countOne, 43);
  if (!counterOne.error) {
	  counterOne.start();
  } else {
    console.error(counterOne.error);
  }
}
const countTwo = () => {
  const countTwo = document.querySelectorAll('.results-container .number')[1];
  let counterTwo = new countUp.CountUp(countTwo, 8320);
  if (!counterTwo.error) {
	  counterTwo.start();
  } else {
    console.error(counterTwo.error);
  }
}
const countThree = () => {
  const countThree = document.querySelectorAll('.results-container .number')[2];
  let counterThree = new countUp.CountUp(countThree, 13430);
  if (!counterThree.error) {
	 counterThree.start();
  } else {
    console.error(counterThree.error);
  }
}
const countFour = () => {
  const countFour = document.querySelectorAll('.results-container .number')[3];
  let counterFour = new countUp.CountUp(countFour, 314);
  if (!counterFour.error) {
	 counterFour.start();
  } else {
    console.error(counterFour.error);
  }
}
const counters = () => { 
  countOne();
  countTwo();
  countThree();
  countFour();
}
const el_visible = () => {
  const observer = new IntersectionObserver(entries => {
	if(entries[0].isIntersecting === true){
	  counters();
	}
  }, { threshold: [0] });

  observer.observe(document.querySelector('.results'));
}
el_visible();