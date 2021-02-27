// PERSON REVIEW ARRAY

let reviews = [
    {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// Set current item

let currentItem = 0;

// Select elements from markup
let personName = document.getElementById("person-name");
let personImage = document.getElementById("person-image");
let jobTitle = document.getElementById("job-title");
let textReview = document.getElementById("text-review");




// Show next review after click

function showNextReview() {
    let item = reviews[currentItem];

    personImage.src = item.img;
    personName.textContent = item.name;
    jobTitle.textContent = item.job;
    textReview.textContent = item.text;

    currentItem++;


};


// Select buttons
let buttonRight = document.getElementById("button-right");
buttonRight.addEventListener("click",showNextReview);



