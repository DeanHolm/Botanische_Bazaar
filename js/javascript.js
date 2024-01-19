// Deze JS-code werd geschreven met behulp van AI omdat ik dit nog niet geleerd heb.
// Ik begrijp ze wel en heb ook de nodige aanpassingen moeten maken omdat niet alles klopte.
// Het leek me gewoon een leuke toevoeging aan de website.


// Om te kunnen filteren in de shop.

$(document).ready(function () {
    function updateDisplay() {
        var categoryFilters = $('input[type="checkbox"]:checked').map(function () {
            return $(this).attr('id').replace('checkbox', '');
        }).get();

        var lightFilter = $('input[name="S"]:checked').attr('id').replace('radio', '');
        var waterFilter = $('input[name="W"]:checked').attr('id').replace('radio', '');

        $('.item').hide();

        categoryFilters.forEach(function (category) {
            $('.item[soort="' + category + '"]').each(function () {
                var lightAttr = $(this).attr('light');
                var waterAttr = $(this).attr('water');

                if ((lightFilter === 'None' || lightFilter === lightAttr) &&
                    (waterFilter === 'None' || waterFilter === waterAttr)) {
                    $(this).show();
                }
            });
        });
    }
    $('input[type="checkbox"]').change(updateDisplay);
    $('input[type="radio"]').change(updateDisplay);
});


// Om extra planten te kunnen toevoegen aan het bestelformulier of verwijderen.

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addPlantButton');
    const bestelgegevens = document.getElementById('bestelgegevens');
    const resetButton = document.querySelector('input[type="reset"]');

    let addedSectionsCount = 0;

    addButton.addEventListener('click', function () {
        const plantSection = document.querySelector('.plant-section');
        const newPlantSection = plantSection.cloneNode(true);
        newPlantSection.classList.add('added-section');
        const quantityInput = newPlantSection.querySelector('input[name="aantal"]');
        if (quantityInput) {
            quantityInput.value = 1;
        }

        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.id = 'removePlantButton';
        removeButton.addEventListener('click', function () {
            bestelgegevens.removeChild(newPlantSection);
            addedSectionsCount--;
        });

        const aantalDiv = newPlantSection.querySelector('#aantal');
        aantalDiv.insertAdjacentElement('afterend', removeButton);

        bestelgegevens.appendChild(newPlantSection);
        addedSectionsCount++;
    });

    resetButton.addEventListener('click', function () {
        const addedSections = document.querySelectorAll('.added-section');
        addedSections.forEach(function (section) {
            bestelgegevens.removeChild(section);
        });

        const removeButtons = document.querySelectorAll('.added-section button');
        removeButtons.forEach(function (button) {
            button.parentNode.removeChild(button);
        });

        addedSectionsCount = 0;
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     var navigationBar = document.querySelector('.not-active .underline');
//     navigationBar.style.animationPlayState = 'running';
//     var navigationBar = document.querySelector('.not-active .overline');
//     navigationBar.style.animationPlayState = 'running';
// });

