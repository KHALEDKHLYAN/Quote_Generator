// Select the button and quote/person elements on the page
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// Create an array of quotes with associated authors
const quotes = [{
    quote: ` "If one notices how some individuals know how to treat their experiences (their insignificant everyday experiences) so that these become a plot of ground that bears fruit three times a year; while others (and how many of them!) are driven through the waves of the most exciting turns of fate, of the most varied currents of their time or nation, and yet always stay lightly on the surface, like cork: then one is finally tempted to divide mankind into a minority (minimality) of those people who know how to make much out of little and a majority of those who know how to make a little out of much; indeed, one meets those perverse wizards who, instead of creating the world out of nothing, create nothing out of the world."`,
    person: ` Friedrich Nietzsche`
 }, {
    quote: ` "If what you are doing is not moving you towards your goals, then it’s moving you away from your goals."`,
    person: `Brian Tracy`
 }, {
    quote: `"It is time you understand that true spirituality means that you yourself become the living expression of the divine teaching you follow." `,
    person: `Omraam Mikhaël Aïvanhov`
 }, {
    quote:` "Having knowledge but lacking the power to express it clearly is no better than never having any ideas at all." `,
    person: `Pericles`
 }, {
    quote: ` "Shedding one’s skin. The snake that cannot shed its skin perishes. So do the spirits who are prevented from changing their opinions; they cease to be spirit." `,
    person: `Nietzsche`
 }, {
    quote: ` "He who cannot rest, cannot work; he who cannot let go, cannot hold on; he who cannot find footing, cannot go forward." `,
    person: `Harry Emerson Fosdick, 1878 - 1969`
 }];

// Listen for a click event on the button and update the quote and person elements with a randomly selected quote
btn.addEventListener('click', function(){
    // Generate a random number between 0 and the length of the quotes array
    let random = Math.floor(Math.random() * quotes.length);

    // Update the text of the quote and person elements with the quote and author from the randomly selected object in the array
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
