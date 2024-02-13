const menuIcon = document.getElementById('menuicon');
const mobileMenu = document.getElementById('mobilemenu');

menuIcon.addEventListener('click', function() {
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'flex';
    } else {
        mobileMenu.style.display = 'none';
    }
});