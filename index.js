// document.addEventListener("DOMContentLoaded", () => {
//     const animatedBlocks = document.querySelectorAll(".animated-block");

//     const handleScroll = () => {
//         animatedBlocks.forEach((block) => {
//             const blockPosition = block.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             if (blockPosition < windowHeight) {
//                 block.classList.add("visible");
//             }
//         });
//     };

//     window.addEventListener("scroll", handleScroll);
// });

document.addEventListener('DOMContentLoaded', () => {
    const animatedBlocks = document.querySelectorAll('.animated-block');
    
    const observerOptions = {
        root: null,
        rootMargin: '100px 0px', // Важное изменение! 
        // Это говорит Observer'у "начинай срабатывать на 100px раньше сверху"
        threshold: 0 // Минимальный порог видимости
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedBlocks.forEach(block => {
        observer.observe(block);
    });
});