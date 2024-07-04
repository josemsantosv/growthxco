export function scrollSidebar() {
  const boxSection = document.getElementById('boxSection');
  const boxTwo = document.getElementById('boxTwo');
  
  if (!boxSection || !boxTwo) return;
  
  boxSection.addEventListener('mouseenter', () => {
    document.body.style.overflow = 'hidden';
  });

  boxSection.addEventListener('mouseleave', () => {
    document.body.style.overflow = 'auto';
  });

  boxTwo.addEventListener('scroll', (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight) {
      document.body.style.overflow = 'auto';
    }
  });
}
