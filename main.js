var wrapper=document.getElementById('inputSVGWrapper');
var jar=document.querySelector('.layer');
var jarTop=document.getElementById('jar-top');
var star5=document.querySelector('.star-5')
var quoteFigure=document.querySelector('.quote-figure');
var quoteContainer=document.querySelector('.quote-container')
var blockquote=document.querySelector('blockquote');
var quoteFooter=document.querySelector('.blockquote-footer')
var resetBtn = document.getElementById('resetBtn');
var closeBtn=document.getElementById('closeBtn');

var quotesArray=[
    {
    blockQuote:"Be yourself; everyone else is already taken.",
    quoteFooter:"Oscar Wilde"
    },
    {
    blockQuote:"So many books, so little time.",
    quoteFooter:"Frank Zappa"
    },
    {
    blockQuote:"A room without books is like a body without a soul.",
    quoteFooter:"Marcus Tullius Cicero"
    },
    {
    blockQuote:"You only live once, but if you do it right, once is enough.",
    quoteFooter:"Mae West"
    },
    {
    blockQuote:"Always forgive your enemies; nothing annoys them so much.",
    quoteFooter:"Oscar Wilde"
    },
    {
    blockQuote:"A friend is someone who knows all about you and still loves you.",
    quoteFooter:"Elbert Hubbard"
    },
    {
    blockQuote:"We accept the love we think we deserve.",
    quoteFooter:"Stephen Chbosky"
    },
    {
    blockQuote:"Life isn't about finding yourself. Life is about creating yourself.",
    quoteFooter:"George Bernard Shaw"
    },
    {
    blockQuote:"Without music, life would be a mistake.",
    quoteFooter:"Friedrich Nietzsche"
    },
    {
    blockQuote:"Logic will get you from A to Z; imagination will get you everywhere.",
    quoteFooter:"Albert Einstein"
    },
    {
    blockQuote:"Do what you can, with what you have, where you are.",
    quoteFooter:"Theodore Roosevelt"
    },
    
]
function addClassJar (){
    wrapper.classList.add('jar-animation')
    jarTop.classList.add('jar-top-animation')
}
function addClassStar (){
    star5.classList.remove('default-star-animation');
    star5.classList.add('rotating-star');
    
}
function addClassQuote (){
    quoteFigure.classList.add('bounce-in-right');
}
function addClassReturn (){
    star5.classList.add('return-star');
}

function removeClassJar (){
    wrapper.classList.remove('jar-animation')
    jarTop.classList.remove('jar-top-animation')
}
function removeClassStar (){
    star5.classList.add('default-star-animation');
    star5.classList.remove('rotating-star');
    
}

function removeClassQuote (){
    quoteFigure.classList.remove('bounce-in-right');
}

function removeClassReturn (){
    star5.classList.remove('return-star');
}


var CopiedArray=quotesArray.slice();


function addQuote(){
    
var ind=Math.floor(Math.random()*(CopiedArray.length));
    
    blockquote.innerHTML=CopiedArray[ind].blockQuote;
    quoteFooter.innerHTML=CopiedArray[ind].quoteFooter;
    CopiedArray.splice(ind,1);

    if(CopiedArray.length == 0){
        CopiedArray=quotesArray.slice();
    }
    
}

jar.addEventListener('click' ,function (){
    addQuote();
    addClassJar ();
    addClassQuote ();
    setTimeout(removeClassJar, 2500);
    setTimeout(addClassStar, 850);
})

resetBtn.addEventListener('click',function (){
    addQuote();
})
closeBtn.addEventListener('click',function (){
    removeClassQuote();
    removeClassStar();
    addClassReturn();
    addClassJar ();
    setTimeout(removeClassReturn, 2000);
    setTimeout(removeClassJar, 2500);
})