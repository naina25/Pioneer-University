// selecting elememts from webpage

const trainers = document.querySelectorAll(".trainers .member h4");
const campusImg = document.querySelector(".campusImg img");

//box shadow effect on image 

// moveover listener
campusImg.addEventListener('mouseover',function(){
    this.classList.add('campus');
})
// mouseout listener
campusImg.addEventListener('mouseout',function(){
    this.classList.remove('campus');
})

// trainers section animation effect

// moveover listener
trainers.forEach(function(card)
{
    card.addEventListener("mouseover", function()
    {
        this.classList.add("shade");
    });
});

// moveout listener
trainers.forEach(function(card)
{
    card.addEventListener("mouseout", function()
    {
        this.classList.remove("shade");
    });
});