document.addEventListener('DOMContentLoaded', () => {
    const speakerCards = document.querySelectorAll('.speaker__card');
    const modal = document.getElementById('speakerModal');
    const modalClose = document.getElementById('modalClose');
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalRole = document.getElementById('modalRole');
    const modalCompany = document.getElementById('modalCompany');
    const speakersSlider = document.getElementById('speakersSlider');
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');

    let currentPage = 0;
    const speakersPerPage = 4;

    // Speaker details
    const speakers = {
        1: { name: "John Doe", role: "Chief Marketing Officer", company: "Acme Corp", image: "assets/images/speaker1.jpg" },
        2: { name: "Jane Smith", role: "Chief Engagement Officer", company: "Acquia", image: "assets/images/speaker2.jpg" },
        3: { name: "John Doe", role: "Chief Technical Developer", company: "Pantheon", image: "assets/images/speaker3.jpg" },
        4: { name: "Jane Smith", role: "Chief Marketing Officer", company: "Specbee", image: "assets/images/speaker4.jpg" },
        // Add more speakers as needed
    };

    // Open modal on card click
    speakerCards.forEach(card => {
        card.addEventListener('click', () => {
            const speaker = card.dataset.speaker;
            const speakerData = speakers[speaker];

            modalImage.src = speakerData.image;
            modalName.textContent = speakerData.name;
            modalRole.textContent = speakerData.role;
            modalCompany.textContent = speakerData.company;

            modal.style.display = 'flex';
        });
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Slider functionality
    const totalSlides = Math.ceil(Object.keys(speakers).length / speakersPerPage);

    const updateSlider = () => {
        speakersSlider.style.transform = `translateX(-${currentPage * 100}%)`;
    };

    nextSlide.addEventListener('click', () => {
        if (currentPage < totalSlides - 1) {
            currentPage++;
            updateSlider();
        }
    });

    prevSlide.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateSlider();
        }
    });
});
