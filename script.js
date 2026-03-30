document.addEventListener('DOMContentLoaded', () => {

    // 1. Navbar blur & shadow on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all others
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                answerDiv.style.maxHeight = answerDiv.scrollHeight + 'px';
            }
        });
    });

    // 3. Form Submission Handling with Premium Feeling
    const form = document.getElementById('natalForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const loader = submitBtn.querySelector('.loader');
    const formSuccess = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simulate API call and loading state
            submitBtn.style.pointerEvents = 'none';
            btnText.style.display = 'none';
            loader.style.display = 'block';

            setTimeout(() => {
                // Hide form inputs and show success message
                const fields = form.querySelectorAll('.form-group, .form-row');
                fields.forEach(f => f.style.display = 'none');
                
                submitBtn.style.display = 'none';
                formSuccess.style.display = 'block';

                // Reset after 4 seconds to simulate redirect
                setTimeout(() => {
                    fields.forEach(f => f.style.display = 'block');
                    form.reset();
                    submitBtn.style.display = 'inline-flex';
                    submitBtn.style.pointerEvents = 'auto';
                    btnText.style.display = 'block';
                    loader.style.display = 'none';
                    formSuccess.style.display = 'none';
                    // Optional: scroll back to top of form section
                    // document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
                }, 4000);

            }, 1500);
        });
    }
});
