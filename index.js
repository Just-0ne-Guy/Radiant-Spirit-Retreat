let current = 0;
let isModalOpen = false;


document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelectorAll(".testimonial__btn")[0];
  const nextBtn = document.querySelectorAll(".testimonial__btn")[1];


  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      if (i === index) testimonial.classList.add("active");
    });
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  });

  showTestimonial(current); 
});


function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visable";

  emailjs
    .sendForm(
      "service_tslm6uj",
      "template_qxbe627",
      event.target,
      "E892NPs1JL09A2C8y"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visable");
      success.classList += " modal__overlay--visable";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visable");
      alert(
        "The email service is temporarly unavailable. Please contact me directly directly on Cmatthew2402@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  } else isModalOpen = true;
  document.body.classList += " modal--open";
}
 