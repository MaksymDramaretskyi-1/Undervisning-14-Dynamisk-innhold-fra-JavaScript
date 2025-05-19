const text = document.createElement('p');
const main = document.querySelector('#op');

text.textContent = 'Creating new page';
text.classList.add('dynamic');
main.appendChild(text);

/*
Oppgave: Skap et <button> element med tekst innhold "Klikk meg!", og påfør den en klasse med navn "btn-style". Til slutt, legg dette elementet til som barn av en <section> i HTML dokumentet.

Ekstra info: Dere må opprette <section> tag i HTML som skal brukes for oppgaven. I CSS må dere også opprette klassen <btn-style> og gjøre at den legger til bakgrunnsfargen, tekst størrelsen og tekst farge til knappen. Dere skal også endre størrelsen på knappen (padding).

Bonus utfordring: Legg også til skygge, i tillegg til å endre kant tjukkelse og border radius på knappen.

Bonus BONUS utfordring: Legg til en :hover effekt, som gjør knappen større når musen er over elementet.
*/

const button = document.createElement('button');
const section = document.querySelector('#section');

button.textContent = 'Klikk meg!';
button.classList.add('btn-style');

section.appendChild(button);

const nyOverskrift = document.createElement("h2");
nyOverskrift.textContent = "Dynamisk overskrift!";
nyOverskrift.classList.add("tittel");
document.body.appendChild(nyOverskrift);