var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener('click', function() {
    /* Toggle between adding and removing the 'active' class,
    to highlight the button that controls the panel */
    this.classList.toggle('active');

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
    panel.style.display = 'none';
    } else {
    panel.style.display = 'block';
    }
});
}

fetch('audios.json')
    .then(response => response.json())
    .then(data => {
        function showInfo(name, table) {
            const tbody = document.querySelector(`#${table} tbody`);

            data[name].sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            })
            data[name].forEach(item => {
                const row = document.createElement('tr');
                row.classList.add('data-row');

                if (item.gifting === 'req')
                    row.classList.add('gift-on-req')
                else if (item.gifting === 'ng')
                    row.classList.add('never-gift')

                if (item.amount == 'partial')
                    row.classList.add('partial')
                else if (item.amount == 'highlights')
                    row.classList.add('highlights')

                row.innerHTML = `
                    <td>${item.tour}</td>
                    <td>${item.date}</td>
                    <td>${item.time}</td>
                    <td>${item.master}</td>
                    <td><div class='scroll'>${item.cast}</div></td>
                    <td><div class='scroll'>${item.notes}</div></td>
                    <td>${item.format}</td>
                    <td>${item.size}</td>
                `;
                tbody.appendChild(row)
            })
        }
        showInfo('Cabaret', 'cabaret')
        showInfo('Dear Evan Hansen', 'deh')
        showInfo('The Great Gatsby', 'greatgatsby')
        showInfo('Hadestown', 'hadestown')
        showInfo('Hell\'s Kitchen', 'hellskitchen')
        showInfo('Into the Woods', 'intothewoods')
        showInfo('Legally Blonde', 'lb')
        showInfo('Les Mis\u00e9rables', 'lesmis')
        showInfo('Monty Python\'s Spamalot', 'spamalot')
        showInfo('Next to Normal', 'nexttonormal')
        showInfo('Oh, Mary!', 'ohmary')
        showInfo('The Outsiders', 'outsiders')
        showInfo('Reefer Madness', 'reefer')
        showInfo('Waitress', 'waitress')
        showInfo('Wicked', 'wicked')
    })
    .catch(error => console.error('Error fetching JSON:', error));