const panels = document.querySelectorAll('.panel');

panels.forEach(node => {
  node.addEventListener('click', () => {
    removeActiveClass();
    node.classList.add('active');
  })
});

const removeActiveClass = () => {
  panels.forEach(node => {
    node.classList.remove('active');
  })
}