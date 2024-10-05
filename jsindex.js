function copyToClipboard() {
    const text = 'irm https://get.activated.win | iex';
    navigator.clipboard.writeText(text).then(() => {
        alert('Comando para activar Windows y Office copiado al portapapeles.');
    }).catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
    });
}

function WinrarCopy() {
    const text = 'iwr -useb https://naeembolchhi.github.io/WinRAR-Activator/WRA.ps1 | iex';
    navigator.clipboard.writeText(text).then(() => {
        alert('Comando para activar WinRAR copiado al portapapeles.');
    }).catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
    });
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');

    const h1h2Elements = document.querySelectorAll('h1, h2');
    h1h2Elements.forEach(element => {
        element.style.backgroundColor = isLight ? 'var(--button-background-light)' : 'var(--button-background-dark)';
        element.style.color = 'var(--highlight-color)';
    });

    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => {
        button.style.backgroundColor = isLight ? 'var(--button-background-light)' : 'var(--button-background-dark)';
        button.style.color = isLight ? 'var(--button-text-color-light)' : 'var(--button-text-color-dark)';
    });
}

function toggleContent(id) {
    const content = document.getElementById(id);
    content.classList.toggle('visible');
}
