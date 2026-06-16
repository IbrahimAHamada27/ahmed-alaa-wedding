// Set the date we're counting down  to
// July 18, 2026 18:00:00 (6:00 PM)
const countDownDate = new Date("Jul 18, 2026 18:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the corresponding elements
    // Add leading zero if less than 10
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<div style='font-size: 1.5rem; font-weight: bold; color: var(--gold); padding: 15px 0;'><span class='en'>It's time for the wedding! 💍🎉</span><span class='ar'>حان موعد الفرح! 💍🎉</span></div>";
    }
}, 1000);

// Envelope Animation Logic
document.getElementById('envelope').addEventListener('click', function() {
    // Open the flap
    this.classList.add('open');
    
    // After flap opens, hide the envelope screen
    setTimeout(() => {
        document.getElementById('envelope-screen').classList.add('hide');
        
        // After envelope screen fades out, show the main card
        setTimeout(() => {
            const mainCard = document.getElementById('main-card');
            mainCard.style.display = 'block';
            
            // Trigger reflow to ensure CSS animation plays
            void mainCard.offsetWidth; 
            
            mainCard.classList.add('fade-in');
        }, 600); // Wait for envelope to fade down
    }, 800); // Wait for flap rotation
});

// Language Toggle Logic
const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        const htmlTag = document.documentElement;
        if (htmlTag.getAttribute('lang') === 'en') {
            htmlTag.setAttribute('lang', 'ar');
            htmlTag.setAttribute('dir', 'rtl');
        } else {
            htmlTag.setAttribute('lang', 'en');
            htmlTag.setAttribute('dir', 'ltr');
        }
    });
}
