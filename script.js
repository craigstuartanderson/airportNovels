

const bookStore = {};

// data resources : arrays x 6 
bookStore.titleLabel = [
    'Omega',
    'Delta',
    'Azure',
    'Crimson',
    'Exodus',
    'Aries',
    'Zodiac',
    'Royal',
    'Elegant',
    'Prague',
    'Stockholm',
    'Casablanca',
    'Forbidden',
    'Delicate',
    'Sequestered',
    'Celestial',
    'Guilded',
    'Trans-Atlantic',
    'Beethoven',
    'Zurich'

];

bookStore.titleLabelDev = [
    'Javascript',
    'Anti-Virus',
    'Viral',
    'D.R.Y.',
    'Concatenated',
    'First-Child',
    'Unregistered Domain',
    'Dedicated Server',
    'Responsive',
    'Psuedo',
    'ECMA Script',
    'Cloud-Based',
    'Bluetooth',
    'Crytpo-Currency',
    'Solid-State',
    'AppleCare',
    

];

bookStore.titleNoun = [
    'Bureaucracy',
    'Settlement',
    'Papers',
    'Paralell',
    'Embargo',
    'Waltz',
    'Diamond',
    'Recipe',
    'Sunset',
    'Castle',
    'Dagger',
    'Stalemate',
    'Jury',
    'Arbitration',
    'Objective',
    'Balance',
    'Tapes',
    'Agenda',
    'Moratorium',
    'Orbit',
    'Trap'


];

bookStore.titleNounDev = [
    'Redundancy',
    'Hard-Reset',
    'App-Store-Review',
    'Floating Point Number',
    'Crome Extension',
    'Method',
    'Function',
    'Device Width',
    'Free Trial',
    'Syntax Error',
    'Semantic Element',
    'Use Case',
    'Algorithm',
    'Template Literal',
    'Dongle',
    'Compiler',
    '.gif',
    'Slackbot',
    'Processor',
    'Retina Display'

];

bookStore.authorFirst = [
    'Craig',
    'Chelsea',
    'Dylan',
    'Meghan',
    'Manish',
    'Gaby',
    'Jen',
    'Justine',
    'Pat',
    'Eugenia',
    'Adriano',
    'Nik',
    'Daryl',
    'Candice',
    'Eileen',
    'Amber',
    'Gilbert',
    'Amie',
    'Kara',
    'Kitty',
    'Amanda',
    'Barnabus',
    'Katie',
    'Gage',
    'Vinh',
    'Geoffrey',
    'Sarah',
    'Yvone',
    'Sam',
    'Kaumil',
    'Simon'
];

bookStore.authorLast = [
    'Anderson',
    'Roman',
    'On',
    'Hebel',
    'Sabharwal',
    'Kupfer',
    'Saxena',
    'Nguyen',
    'Johnston',
    'Lau',
    'Boin',
    'Howley',
    'Amodan',
    'Mayes',
    'Choi',
    'Lahav',
    'Jose',
    'Everett',
    'Barleta',
    'Yau',
    'Silberberg',
    'Chun',
    'D\'angelo',
    'Wanger',
    'Luu',
    'Leung',
    'Simpson',
    'Huynh',
    'Janosik',
    'Manzoor',
    'Keeley',
    'Steer'
];

bookStore.stars = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five'
];

bookStore.coversTech = [
    {
        name: 'desk',
        url: 'images/techBoringDesk.jpeg'
    },
    {
        name: 'circuit board',
        url: 'images/techCircuitBoard.jpeg'
    },
    {
        name: 'code block',
        url: 'images/techCodeBlock.png'
    },
    {
        name: 'server',
        url: 'images/techServer.jpeg'
    },
    {
        name: 'vr',
        url: 'images/techVrWalk.jpeg'

    }
];

bookStore.coversThriller = [
    {
        name: 'car',
        url: 'images/spookyCar.jpeg'
    },
    {
        name: 'face',
        url: 'images/spookyFace.jpeg'
    },
    {
        name: 'house',
        url: 'images/spookyHouse.jpeg'
    },
    {
        name: 'spy',
        url: 'images/spookyspyStation.jpeg'
    },
    {
        name: 'windmills',
        url: 'images/spookyWindmills.jpeg'
    },
    {
        name: 'woods',
        url: 'images/spookyWoods.jpeg'
    }
];

// This array is the other two cover arrays merged.
bookStore.coversMix = bookStore.coversTech.concat(bookStore.coversThriller);

// User enters data in a form by 
// selecting level of relaxation from 3 radio buttons

// User SUBMITS form

// METHODS

bookStore.randomInArray = function (yourArray) {
    const randomIndex = Math.floor(Math.random() * yourArray.length);
    return yourArray[randomIndex];
}
bookStore.titlePicker = function(){
    const relaxChoice = $('input[name=relaxLevel]:checked').val();
    if (relaxChoice === 'fullRelax') {
        // go and get a random item from titleLable and save as variable
        // go and get a random item from titleNoun and save as variable
        let titleOne = bookStore.randomInArray(bookStore.titleLabel);
        let titleTwo = bookStore.randomInArray(bookStore.titleNoun);
        let outputTitle =  `The ${titleOne} ${titleTwo}`;
        return outputTitle;
    } else if (relaxChoice === 'noRelax') {
        let titleOne = bookStore.randomInArray(bookStore.titleLabelDev);
        let titleTwo = bookStore.randomInArray(bookStore.titleNounDev);
        let outputTitle = `The ${titleOne} ${titleTwo}`;
        return outputTitle;
    } else if (relaxChoice === 'mixedRelax') {
        let outputTitle = bookStore.randomTitleOrder();
        return outputTitle;
    }
     else {
        alert('Think you don\'t need a book? What if the in-flight entertainment is out of order? What then?')
    }
};

bookStore.randomTitleOrder = function(){
    if (Math.floor(Math.random() * 2) === 0) {
        let titleOne = bookStore.randomInArray(bookStore.titleLabelDev);
        let titleTwo = bookStore.randomInArray(bookStore.titleNoun);
        let outputTitle = `The ${titleOne} ${titleTwo}`;
        return outputTitle;
    
    } else {
        let titleOne = bookStore.randomInArray(bookStore.titleLabel);
        let titleTwo = bookStore.randomInArray(bookStore.titleNounDev);
        let outputTitle = `The ${titleOne} ${titleTwo}`;
        return outputTitle;
    }
};

bookStore.authorPicker = function(){
    let authorOne = bookStore.randomInArray(bookStore.authorFirst);
    let authorTwo = bookStore.randomInArray(bookStore.authorLast);
    let outputAuthor = `${authorOne} ${authorTwo}`;
    return outputAuthor
};

bookStore.coverPicker = function () {
    const relaxChoice = $('input[name=relaxLevel]:checked').val();
    console.log(relaxChoice);
    if (relaxChoice === 'fullRelax') {
        let randomCover = bookStore.randomInArray(bookStore.coversThriller);
        return randomCover.url;
    } else if (relaxChoice === 'noRelax') {
        let randomCover = bookStore.randomInArray(bookStore.coversTech);
        return randomCover.url;
        console.log(randomCover.url);
    } else if (relaxChoice === 'mixedRelax') {
        let randomCover = bookStore.randomInArray(bookStore.coversMix)
        return randomCover.url;
    }

};

bookStore.displayNovel = function(){
    $('.output__novel h2').html(bookStore.titlePicker());
    $('.output__novel h4').html(bookStore.authorPicker());
    $('.output__novel').css('background-image', `url(${bookStore.coverPicker()})`);
};

bookStore.submitChoice = function(){
    $('form').on('submit', function (e) {
        e.preventDefault();
        const checkCheck = $('input[name=relaxLevel]:checked').val();
        if (checkCheck === undefined) {
            alert('Think you don\'t need a book? What if the in-flight entertainment is out of order? What then?')
        } else {
            // event.preventDefault();
            $('.hidden').fadeIn('slow');
            $('.userInterface').addClass('hidden');
            bookStore.displayNovel();
        }
    });
};

bookStore.resetForm = function(){
    $('.reset').on('click', function () {
        $('.output__novel').fadeOut('slow');
        $('.userInterface').removeClass('hidden');
    });
}

bookStore.events = function(){
    bookStore.submitChoice();
    bookStore.resetForm();
};

bookStore.init = function(){
    bookStore.events();
};

$(document).ready(function(){
    bookStore.init();
});