// Deze code werd geschreven met behulp van AI omdat ik dit nog niet geleerd heb.
// Ik begrijp ze wel en heb ook de nodige aanpassingen moeten maken omdat niet alles klopte.
// Het leek me gewoon een leuke toevoeging aan de website.

document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addPlantButton');
    const bestelgegevens = document.getElementById('bestelgegevens');
    const resetButton = document.querySelector('input[type="reset"]');

    let addedSectionsCount = 0;

    addButton.addEventListener('click', function () {
        const plantSection = document.querySelector('.plant-section');
        const newPlantSection = plantSection.cloneNode(true);
        newPlantSection.classList.add('added-section');
        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.addEventListener('click', function () {
            bestelgegevens.removeChild(newPlantSection);
            addedSectionsCount--;
        });
        newPlantSection.appendChild(removeButton);
        bestelgegevens.appendChild(newPlantSection);
        addedSectionsCount++;
    });

    resetButton.addEventListener('click', function () {
        const addedSections = document.querySelectorAll('.added-section');
        addedSections.forEach(function (section) {
            bestelgegevens.removeChild(section);
        });

        addedSectionsCount = 0;
    });
});
