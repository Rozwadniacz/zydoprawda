const startValue = 51400; // liczba początkowa
const startTimestamp = 1749320450;
const interval = 617; // licznik rośnie co 5 sekund

function aktualizujLicznik() {
    const now = Math.floor(Date.now() / 1000); // poprawione na 1000
    const elapsed = now - startTimestamp;
    const licznik = startValue + Math.floor(elapsed / interval);
    document.getElementById('counter').textContent = licznik;
}

window.onload = function() {
    aktualizujLicznik();
    setInterval(aktualizujLicznik, 5000);
};

function wczytajArtykuly() {
    fetch('articles.txt')
        .then(response => response.text())
        .then(text => {
            const articlesDiv = document.getElementById('articles');
            const articles = text.split('---').map(a => a.trim()).filter(a => a.length > 0);
            articlesDiv.innerHTML = articles.map(a => {
                const tytul = a.match(/Tytuł:\s*(.*)/)?.[1] || '';
                let tresc = a.match(/Treść:\s*([\s\S]*)/)?.[1] || '';
                if (tytul && tresc) {
                    // Pogrubienie, powiększenie i przeniesienie "Szacunkowe straty:" do nowej linii
                    tresc = tresc.replace(
                        /(Szacunkowe straty:[^\n]*)/g,
                        '<br><strong style="font-size:1.15em;">$1</strong>'
                    );
                    return `<article><h2>${tytul}</h2><p>${tresc.trim()}</p></article>`;
                }
                return '';
            }).join('');
        });
}
window.onload = function() {
    aktualizujLicznik();
    setInterval(aktualizujLicznik, 5000);
    wczytajArtykuly();
};