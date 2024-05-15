const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);









//-----------------------------------------------------------------------------------------------------------------------------------------






const initSliderUnique = () => {
    const imageListUnique = document.querySelector(".slider-wrapper2 .image-list2");
    const slideButtonsUnique = document.querySelectorAll(".slider-wrapper2 .slide-button2");
    const sliderScrollbarUnique = document.querySelector(".container2 .slider-scrollbar2");
    const scrollbarThumbUnique = sliderScrollbarUnique.querySelector(".scrollbar-thumb2");
    const maxScrollLeftUnique = imageListUnique.scrollWidth - imageListUnique.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumbUnique.addEventListener("mousedown", (e) => {
        const startXUnique = e.clientX;
        const thumbPositionUnique = scrollbarThumbUnique.offsetLeft;
        const maxThumbPositionUnique = sliderScrollbarUnique.getBoundingClientRect().width - scrollbarThumbUnique.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMoveUnique = (e) => {
            const deltaXUnique = e.clientX - startXUnique;
            const newThumbPositionUnique = thumbPositionUnique + deltaXUnique;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPositionUnique = Math.max(0, Math.min(maxThumbPositionUnique, newThumbPositionUnique));
            const scrollPositionUnique = (boundedPositionUnique / maxThumbPositionUnique) * maxScrollLeftUnique;
            
            scrollbarThumbUnique.style.left = `${boundedPositionUnique}px`;
            imageListUnique.scrollLeft = scrollPositionUnique;
        }

        // Remove event listeners on mouse up
        const handleMouseUpUnique = () => {
            document.removeEventListener("mousemove", handleMouseMoveUnique);
            document.removeEventListener("mouseup", handleMouseUpUnique);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMoveUnique);
        document.addEventListener("mouseup", handleMouseUpUnique);
    });

    // Slide images according to the slide button clicks
    slideButtonsUnique.forEach(button => {
        button.addEventListener("click", () => {
            const directionUnique = button.id === "prev-slide2" ? -1 : 1;
            const scrollAmountUnique = imageListUnique.clientWidth * directionUnique;
            imageListUnique.scrollBy({ left: scrollAmountUnique, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtonsUnique = () => {
        slideButtonsUnique[0].style.display = imageListUnique.scrollLeft <= 0 ? "none" : "flex";
        slideButtonsUnique[1].style.display = imageListUnique.scrollLeft >= maxScrollLeftUnique ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPositionUnique = () => {
        const scrollPositionUnique = imageListUnique.scrollLeft;
        const thumbPositionUnique = (scrollPositionUnique / maxScrollLeftUnique) * (sliderScrollbarUnique.clientWidth - scrollbarThumbUnique.offsetWidth);
        scrollbarThumbUnique.style.left = `${thumbPositionUnique}px`;
    }

    // Call these two functions when image list scrolls
    imageListUnique.addEventListener("scroll", () => {
        updateScrollThumbPositionUnique();
        handleSlideButtonsUnique();
    });
}

window.addEventListener("resize", initSliderUnique);
window.addEventListener("load", initSliderUnique);













 

//----------------------------------------------------------------------------------------
const initSlider3 = () => {
    const imageList3 = document.querySelector(".slider-wrapper3 .image-list3");
    const slideButtons3 = document.querySelectorAll(".slider-wrapper3 .slide-button3");
    const sliderScrollbar3 = document.querySelector(".container3 .slider-scrollbar3");
    const scrollbarThumb3 = sliderScrollbar3.querySelector(".scrollbar-thumb3");
    const maxScrollLeft3 = imageList3.scrollWidth - imageList3.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb3.addEventListener("mousedown", (e) => {
        const startX3 = e.clientX;
        const thumbPosition3 = scrollbarThumb3.offsetLeft;
        const maxThumbPosition3 = sliderScrollbar3.getBoundingClientRect().width - scrollbarThumb3.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove3 = (e) => {
            const deltaX3 = e.clientX - startX3;
            const newThumbPosition3 = thumbPosition3 + deltaX3;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition3 = Math.max(0, Math.min(maxThumbPosition3, newThumbPosition3));
            const scrollPosition3 = (boundedPosition3 / maxThumbPosition3) * maxScrollLeft3;
            
            scrollbarThumb3.style.left = `${boundedPosition3}px`;
            imageList3.scrollLeft = scrollPosition3;
        }

        // Remove event listeners on mouse up
        const handleMouseUp3 = () => {
            document.removeEventListener("mousemove", handleMouseMove3);
            document.removeEventListener("mouseup", handleMouseUp3);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove3);
        document.addEventListener("mouseup", handleMouseUp3);
    });

    // Slide images according to the slide button clicks
    slideButtons3.forEach(button => {
        button.addEventListener("click", () => {
            const direction3 = button.id === "prev-slide3" ? -1 : 1;
            const scrollAmount3 = imageList3.clientWidth * direction3;
            imageList3.scrollBy({ left: scrollAmount3, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons3 = () => {
        slideButtons3[0].style.display = imageList3.scrollLeft <= 0 ? "none" : "flex";
        slideButtons3[1].style.display = imageList3.scrollLeft >= maxScrollLeft3 ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition3 = () => {
        const scrollPosition3 = imageList3.scrollLeft;
        const thumbPosition3 = (scrollPosition3 / maxScrollLeft3) * (sliderScrollbar3.clientWidth - scrollbarThumb3.offsetWidth);
        scrollbarThumb3.style.left = `${thumbPosition3}px`;
    }

    // Call these two functions when image list scrolls
    imageList3.addEventListener("scroll", () => {
        updateScrollThumbPosition3();
        handleSlideButtons3();
    });
}

window.addEventListener("resize", initSlider3);
window.addEventListener("load", initSlider3);
