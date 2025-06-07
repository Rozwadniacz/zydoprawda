const startValue = 51000; // liczba początkowa
const startTimestamp = 1749320450;
const interval = 5; // licznik rośnie co 5 sekund

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
