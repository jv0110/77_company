const copy = () => {
  const year = document.querySelector('.copy .year');
  year.innerHTML = new Date().getFullYear();
}
copy();