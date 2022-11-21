/* слайдер с модалкой*/

fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
  
    Toolbar: false,
    closeButton: "top",
  
    Image: {
      zoom: false,
    },
  
    on: {
      initCarousel: (fancybox) => {
        const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
      "Carousel.change": (fancybox, carousel, to, from) => {
        const slide = carousel.slides[to];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
    },
  });

  /* слайдер на 3 картинки 
  import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
  */

/* простой слайдер 

const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    slidesPerPage : auto
  });*/
