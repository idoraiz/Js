const book = {
  'book name' : 'The Hobbit',
  'written by': 'J.R Tolkin',
  published   : 1950,
  'number of pages' : 532
};

function getInfo (book) {
  return `The book "${book['book name']}" was written by ${book['written by']}, 
  it has ${book['number of pages']} pages, and was published in the ${book.published}'s.`
}

console.log(getInfo(book));