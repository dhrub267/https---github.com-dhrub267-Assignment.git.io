document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".title", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
    gsap.from(".subtitle", { opacity: 0, y: 50, duration: 1, delay: 0.3, ease: "power3.out" });
    gsap.from(".hero-image", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.3, ease: "power3.out" });
});

document.querySelectorAll(".hero-image").forEach(img => {
    img.addEventListener("mouseover", () => {
        gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });

    img.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = img.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 30;
        const y = ((e.clientY - top) / height - 0.5) * 30;
        gsap.to(img, { x, y, duration: 0.3, ease: "power2.out" });
    });

    img.addEventListener("mouseleave", () => {
        gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
    });
});
