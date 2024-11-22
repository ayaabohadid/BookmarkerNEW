



function randomQuote(){
    var quote=[
{quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
writter:"― Maya Angelou"},
        {quote:"“Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .”",
            writter:"― C.S. Lewis, The Four Loves"  
        },
        {quote:"“A friend is someone who knows all about you and still loves you.”",
            writter:"― Elbert Hubbard"  
        },
        {quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",
            writter:"― Oscar Wilde"  
        },
        {quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
            writter:"― Mahatma Gandhi"  
        },
        {quote:"“We accept the love we think we deserve.”",
            writter:"― Stephen Chbosky, The Perks of Being a Wallflower"  
        },
        {quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
            writter:"― Andre Gide, Autumn Leaves"  
        },
        {quote:"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
            writter:"― Mark Twain"  
        },
        {quote:"“It does not do to dwell on dreams and forget to live.”",
            writter:"― J.K. Rowling, Harry Potter and the Sorcerer's Stone"  
        },
        {quote:"“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
            writter:"― John Green, The Fault in Our Stars"  
        }
    ]
   var y=Math.floor(Math.random()*10)
   
        document.getElementById("demo").innerHTML=quote[y].quote;
    document.getElementById("demo-2").innerHTML=quote[y].writter;
}
