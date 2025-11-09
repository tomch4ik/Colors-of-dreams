document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');    
    if (answer) {
        answer.style.display = 'none';
    }
    
    if (question) {
        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            document.querySelectorAll('.faq-icon').forEach(i => i.textContent = '+');   
            if (!isOpen) {
                answer.style.display = 'block';
                icon.textContent = '−';
            }
        });
    }
});

const contactForm = document.querySelector('.contact-form-wrapper form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();  
        alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
        e.target.reset(); 
    });
}

const textarea = document.getElementById('message');
const counter = document.getElementById('message-counter');
const hint = document.getElementById('message-hint');

if (textarea && counter && hint) {
    const minHeight = 150; 
    const maxHeight = 300; 
    const limit = 500;     

    textarea.style.height = `${minHeight}px`;

    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;

        if (currentLength >= limit) {
            counter.style.display = 'none';
            hint.style.display = 'block';
        } 
        else {
            counter.style.display = 'block';
            hint.style.display = 'none';
            counter.textContent = `${currentLength} / ${limit}`; 
        }

        textarea.style.height = 'auto';
        
        const newHeight = Math.max(minHeight, textarea.scrollHeight);

        if (newHeight > maxHeight) {
            textarea.style.height = `${maxHeight}px`;
            textarea.style.overflowY = 'auto'; 
        } 
        else {
            textarea.style.height = `${newHeight}px`;
            textarea.style.overflowY = 'hidden'; 
        }
    });
}