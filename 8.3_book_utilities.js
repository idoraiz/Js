const book1 = {
  name : 'kofiko',
  author : 'eldad',
  year : 1989
};

const book2 = {
  name : 'marko',
  author : 'haim',
  year : 1920
};

const bookUtils = {
  getFirstPublished : function(book1, book2) {
    if(book1.year > book2.year) {
      return book2.name ;
    }
    return book1.name;
  },
  setNewEdition : function(book, year) {
    book.latestEdition = year;
  },
  setLanguage : function(book, language) {
    book.language = language;
  },
  setTranslation : function(book, language, translator) {
    book.translation = {
       language,
       translator
    };
  },
  setPublisher : function(book, name, location) {
    book.publisher = { 
      name,
      location
    };
  },
  isSamePublisher : function(book1,book) {
    if()
  }

};

console.log(bookUtils.setLanguage(book1,'english'));
console.log(bookUtils.setTranslation(book1, 'english', 'hebrew'));