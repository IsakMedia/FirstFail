
const textArea = document.querySelector('#textArea');
const link = document.querySelector('#link');




link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('#textArea').innerHTML= `
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/38hYP5ZrVvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
    
});


