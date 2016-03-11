var app = angular.module('JeanApp', []);
app.controller('homeController', function () {
    var leftNav = [
        {
            link: "#",
            id: "websTag",
            name: " Websites"
                },
        {
            link: "#",
            id: "blogTag",
            name: " Blog"
                },
        {
            link: "#",
            id: "aboutTag",
            name: " About"
                }
            ];

    this.leftNav = leftNav;

    var rightNav = [
        {
            link: "https://evolutioncode.files.wordpress.com/2016/03/jean-gonzacc81lez-c-v.pdf",
            id: "resumeTag",
            name: " CV/Resume"
                }
            ];

    this.rightNav = rightNav;

    var carousel = [
        {
            type: "item active",
            image: "images/phoenix.png",
            name: "",
            description: "",
            link: "/websites/phoenix/index.html"
        },
        {
            type: "item",
            image: "images/blog.png",
            name: "",
            description: "",
            link: "https://evolutioncode.wordpress.com/"
        },
        {
            type: "item",
            image: "images/more-projects.jpg",
            name: "More Projects",
            description: "",
            link: "https://evolutioncode.wordpress.com/github-page/"
        }
    ];

    this.carousel = carousel;

    var homeBoxes = [
        {
            image: 'images/investing.png',
            description: "Investment Briefs",
            comment: "Learn more",
            link: "https://evolutioncode.wordpress.com/investment-briefs/"
                },
        {
            image: 'images/github.png',
            description: "GitHub Repositories",
            comment: "Learn more",
            link: "https://github.com/Jean13?tab=repositories"
                },
        {
            image: 'images/me.jpg',
            description: "About Me",
            comment: "Learn more",
            link: "https://evolutioncode.wordpress.com/about-me/"
                }
            ];

    this.homeBoxes = homeBoxes;

});