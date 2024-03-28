window.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary div element
            const tempDiv = document.createElement('div');
            // Set the HTML content of the temporary div with fetched HTML
            tempDiv.innerHTML = html;
            // Get the header content from the temporary div
            const headerContent = tempDiv.querySelector('header').innerHTML;
            // Insert the header content into the #header element
            document.getElementById('header').innerHTML = headerContent;
        });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {
    // home banner slider
    $('.banner-slider-module').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false
    });

    // $('.nav.nav-tabs').slick({
    //     dots: false,
    //     slidesToShow: 1,
    //     arrows: true
    // });

    $('.team-slider-module').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        arrows: true,
        prevArrow: '<img class="custom-arrow custom-prev" src="../images/prev-icon.png">',
        nextArrow: '<img class="custom-arrow custom-next" src="../images/nex-icon.png">',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });

    // Home tabs section
    $('.panel .nav-tabs').on('click', '.tab-title', function (e) {
        var tab = $(this).parent(),
            tabIndex = tab.index(),
            tabPanel = $(this).closest('.panel'),
            tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
        tabPanel.find('.active').removeClass('active');
        tab.addClass('active');
        tabPane.addClass('active');
    });


    // Counter Section
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

// accordion
// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'accordion-item'
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Iterate over each accordion item
    accordionItems.forEach(item => {
        // Find the header and content elements within the current item
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        // Add a click event listener to the header
        header.addEventListener('click', () => {
            // Iterate over each accordion item again to close others
            accordionItems.forEach(otherItem => {
                // Check if the current item is not the clicked one
                if (otherItem !== item) {
                    // Remove the 'active' class from other item's content
                    otherItem.querySelector('.accordion-content').classList.remove('active');
                    otherItem.querySelector('.accordion-header').classList.remove('active');
                }
            });

            // Toggle the 'active' class for the content of the clicked item
            content.classList.toggle('active');
            header.classList.toggle('active');
        });
    });
});


