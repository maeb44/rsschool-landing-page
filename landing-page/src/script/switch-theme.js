function switchTheme() {
  const btnWrapper = document.querySelector('.header__theme-select');
  btnWrapper.addEventListener('click', (e) => {
    const lightTheme = e.target.closest('.icon--light');
    const darkTheme = e.target.closest('.icon--dark');
    if (lightTheme) {
      const theme = 'light';
      localStorage.setItem('theme', theme);
      document.documentElement.dataset.theme = theme;
    }
    if (darkTheme) {
      const theme = 'dark';
      localStorage.setItem('theme', theme);
      document.documentElement.dataset.theme = theme;
    }
  });
}

switchTheme();
