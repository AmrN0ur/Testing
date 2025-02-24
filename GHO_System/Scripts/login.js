document.querySelector('.lang').addEventListener('click', function() {
    const htmlElement = document.documentElement;
    const header = document.querySelector('h3');
    const labelUsername = document.querySelector('label[for="username"]');
    const labelPassword = document.querySelector('label[for="password"]');
    const submitButton = document.querySelector('button[type="submit"]');
    const langSwitch = this.querySelector('p');

    if (htmlElement.getAttribute('lang') === 'ar') {
        // تغيير للغة الإنجليزية
        htmlElement.setAttribute('lang', 'en');
        htmlElement.setAttribute('dir', 'ltr');
        document.title = 'GHO | Login';
        header.textContent = 'GHO | Login';
        labelUsername.textContent = 'Username';
        labelPassword.textContent = 'Password';
        submitButton.textContent = 'Login';
        langSwitch.textContent = 'ع';
    } else {
        // تغيير للغة العربية
        htmlElement.setAttribute('lang', 'ar');
        htmlElement.setAttribute('dir', 'rtl');
        document.title = 'GHO | تسجيل الدخول';
        header.textContent = 'تسجيل الدخول';
        labelUsername.textContent = 'اسم المستخدم';
        labelPassword.textContent = 'كلمة المرور';
        submitButton.textContent = 'تسجيل الدخول';
        langSwitch.textContent = 'EN';
    }
});