
const firebaseConfig = {
    apiKey: "AIzaSyDUMzqCwcrtg2VR_CzQVF4tYvdm_5JOI3U",
    authDomain: "siyadriving-51555.firebaseapp.com",
    projectId: "siyadriving-51555",
    storageBucket: "siyadriving-51555.appspot.com",
    messagingSenderId: "172154393818",
    appId: "1:172154393818:web:c973f34c752e33a08641e3",
    measurementId: "G-5XFRN4F84C"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Function to book a coder
function bookCoder(bookingDetails) {
    console.log("Booking Details:", bookingDetails); // Log booking details

    firebase.database().ref('bookings/').push(bookingDetails)
        .then(() => {
            console.log("Booking successfully created:", bookingDetails);
            alert('Booking successful!');
        })
        .catch((error) => {
            console.error("Error creating booking:", error);
            alert('Booking failed. Please try again.');
        });
}

// Attach event listener to the form
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const bookingData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        codeType: document.getElementById('codeType').value
    };

    bookCoder(bookingData); // Call the booking function
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.header .nav-bar .hamburger');
    const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
    const menuItems = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('#header');

    // Log when the DOM is fully loaded
    console.log('DOM fully loaded and parsed');

    hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked'); // Log hamburger click
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        console.log('Hamburger active state:', hamburger.classList.contains('active')); // Log hamburger state
        console.log('Mobile menu active state:', mobileMenu.classList.contains('active')); // Log mobile menu state
    });

    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        console.log('Scroll position:', scroll_position); // Log scroll position
        if (scroll_position > 250) {
            header.style.backgroundColor = '#29323c';
            console.log('Header background changed to dark'); // Log background change
        } else {
            header.style.backgroundColor = 'transparent';
            console.log('Header background changed to transparent'); // Log background change
        }
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log('Menu item clicked:', item.textContent); // Log clicked menu item
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            console.log('Hamburger active state after menu click:', hamburger.classList.contains('active')); // Log state after menu click
            console.log('Mobile menu active state after menu click:', mobileMenu.classList.contains('active')); // Log state after menu click
        });
    });
});








