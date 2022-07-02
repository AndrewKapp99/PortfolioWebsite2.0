let quotes = [];
let sources = [];

let newQuote;
let source;

quotes[0] = "The Cycle Ends Here. We must be Better than this.";
sources[0] = "Kratos (God of War) by Christopher Judge";

quotes[1] = "Don't be Sorry, Be better.";
sources[1] = "Kratos (God of War) by Christopher Judge";

quotes[2] = "In the direction of Deer";
sources[2] = "Kratos (God of War) by Christopher Judge";

quotes[3] = "The Strength To Stand Alone, Aloy, Is The Strength To Make A Stand. To Serve A Purpose Greater Than Yourself. That Is The Lesson You Must Learn.";
sources[3] = "Rost (Horizon Zero Dawn) by JB Blanc";

quotes[4] = "Being Smart Will Count For Nothing If You Don’t Make The World Better.";
sources[4] = "Elisabet Sobeck (Horizon Zero Dawn) by Ashly Burch";

quotes[5] = "Did you just refer to the knife as the people opener?";
sources[5] = "Aloy (Horizon Zero Dawn) by Ashly Burch";

quotes[6] = "Indeed.";
sources[6] = "Commander Zavala (Destiny) by Lance Reddick";

quotes[7] = "You're Not Brave. You've Merely Forgotten The Fear Of Death. Allow Me To Reacquaint You.";
sources[7] = "Dominus Ghaul (Destiny 2) by Neil Kaplan";

quotes[8] = "I tried standing under a falling Warsat once. Good thing I have a Ghost.";
sources[8] = "Cayde-6 (Destiny) by Nathan Fillion";

quotes[9] = "This world doesn't like those who are different, Markus. Don't let anyone tell you who you should be.";
sources[9] = "Carl Manfred (Detroit: Become Human) by Lance Henriksen"

quotes[10] = "Painting is not about replicating the world. Its about interpreting it, improving on it, showing something you see.";
sources[10] = "Carl Manfred (Detroit: Become Human) by Lance Henriksen";

window.setInterval(getQuote, 15000);

function getQuote() {
    newQuote = document.getElementById("quote");
    source = document.getElementById("source");

    let i = Math.floor(Math.random()*quotes.length);

    newQuote.innerHTML = quotes[i];
    source.innerHTML = sources[i];

    $("#quote").textillate({
        minDisplayTime: 12500,
        maxDisplayTime: 13500,
    in: {
        effect: "fadeInDownBig",
        sync: true
    },
    out:{
        effect: "fadeOutDownBig",
        sync: true
        
    }
    });
}

function startAnim(){
    
}



