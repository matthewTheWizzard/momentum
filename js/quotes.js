const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote')

async function getQuotes(){
    let quotes = './quotes.json'
    let res = await fetch(quotes)
    let data = await res.json();
    let quoteNumber = getRandomNum(50)

    quote.textContent = data[quoteNumber].q;
    author.textContent = data[quoteNumber].a;
}

getQuotes();
changeQuote.addEventListener('click', getQuotes)



