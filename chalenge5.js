var chandler = ['duck', 'monica', 'undefined job', 'shut-up', 'tecnhology' ]

function friendsTvShow(friends) {
    return friends[1];
}

console.log(friendsTvShow(chandler))

function myfunction2(arr , index){
    return arr[ index ];

}

var monica = ['organizer', 'chandler', 'cook', 7, ['wedding', 'May, 15th'] ]

console.log(myfunction2(monica, 0))
console.log(myfunction2(monica, 1))
console.log(myfunction2(monica, 2))
console.log(myfunction2(monica, 3))
console.log(myfunction2(monica, 4))

function book(bookName){
    var allBooks = {
        'Misthborn': {
            pages: 300,
            author: 'Sanderson',
            editor: 'bla'
        },
        'Nome do Vento': {
            pages: 400,
            author: 'Patrick',
            editor: 'bla1'
        } ,
        'Milagre da manhã': {
            pages: 600,
            author: 'Hall',
            editor: 'bla2'
        }
    };

    // if(!bookName){
    //     return allBooks;
    // }

    // return allBooks[bookName]

    return !bookName ? allBooks : allBooks[bookName];

}

console.log(book())
var booksName = 'Nome do Vento'
console.log(`O  livro ${booksName} tem ${book(booksName).pages} páginas`)
console.log(`O autor do ${booksName} é ${book(booksName).author}`)
console.log(`A editora do ${booksName} é ${book(booksName).editor}`)

console.log(book())
