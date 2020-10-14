document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
			  console.log("is interactive");
        const toggleButton = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];
        const liarray = document.getElementsByClassName('navbarli');
        // console.log(navbarLinks);
        // console.log(liarray);
        toggleButton.addEventListener('click', () => {
           navbarLinks.classList.toggle('active1'); // added or removed class
        });
        for (let i = 0; i < liarray.length; i++) {
            liarray[i].addEventListener('click', function (e) {
                // e.preventDefault();
                liarray[i].classList.add('bgcolor');
                for (let j = 0; j < liarray.length; j++) {
                    if (j !== i) {
                        liarray[j].classList.remove('bgcolor');
                    }
                }
            });
        }
    }
};