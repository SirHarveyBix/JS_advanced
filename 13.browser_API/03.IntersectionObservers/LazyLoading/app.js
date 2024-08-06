// "https://source.unsplash.com/random"

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      //Image needs to be loaded!!!
      console.log('LOADING A NEW RANDOM IMAGE!!!');
      // entry.target.src = 'https://picsum.photos/200/300?random=' + index + 1;
      entry.target.src = 'https://loremflickr.com/200/300';
      observer.unobserve(entry.target); // when the content is loaded, no need to keep watching
    }
  });
});

const allImages = document.querySelectorAll('img.lazy');

allImages.forEach((img) => observer.observe(img));
