var app = angular.module('tokugawaApp', []);
app.controller('homeController', function () {
    var homeBoxes = [
        {
            description: "This is a sample restaurant website. Only the Home and Information pages are active. Thank you for looking at my work!",
            comment: "News"
                }
            ];

    this.homeBoxes = homeBoxes;

    var footerBoxes = [
        {
            image: '/websites/tokugawa/images/foot1.png',
            link: '#'
                },
        {
            image: '/websites/tokugawa/images/foot2.png',
            link: '#'
                },
        {
            image: '/websites/tokugawa/images/foot3.png',
            link: "http://jean13.github.io/"
                }
            ];

    this.footerBoxes = footerBoxes;

    var rightNav = [
        {
            link: "/websites/tokugawa/pages/index.html",
            id: "homeTag",
            name: " Home"
                },
        {
            link: "/websites/tokugawa/pages/introduction.html",
            id: "introTag",
            name: " Introduction"
                },
        {
            link: "#",
            id: "newsTag",
            name: " News"
                },
        {
            link: "#",
            id: "infoTag",
            name: " Information"
                },
        {
            link: "#",
            id: "reserveTag",
            name: " Reservation"
                },
        {
            link: "#",
            id: "accessTag",
            name: " Access"
                }
            ];

    this.rightNav = rightNav;

    var leftNav = [
        {
            link: "/websites/tokugawa/pages/index.html",
            id: "tokugawaTag",
            name: " 徳川 | TOKUGAWA"
                }
            ];

    this.leftNav = leftNav;

    var carousel = [
        {
            type: "item active",
            image: "/websites/tokugawa/images/dish1.jpg",
            name: "",
            description: ""
        },
        {
            type: "item",
            image: "/websites/tokugawa/images/dish2.jpg",
            name: "",
            description: ""
        },
        {
            type: "item",
            image: "/websites/tokugawa/images/dish3.jpg",
            name: "",
            description: ""
        },
        {
            type: "item",
            image: "/websites/tokugawa/images/dish4.jpg",
            name: "",
            description: ""
        }
    ];

    this.carousel = carousel;

    this.tab = 1;

    this.filtText = '';

    var dishes = [
        {
            name: "春のタコ | Spring's Octopus",
            image: '/websites/tokugawa/images/dish1.jpg',
            category: 'mainDish',
            description: " A gift from the sea, served with the highest quality tea and our family's secret sauce.",
            comment: ''
                        },
        {
            name: "秋のサケ | Autumn's Salmon",
            image: '/websites/tokugawa/images/dish2.jpg',
            category: 'mainDish',
            description: 'Our secret and celebrated salmon dish with a touch of the seasons.',
            comment: ''
                        },
        {
            name: "冬の贈り物 | Winter's Gift",
            image: '/websites/tokugawa/images/dish3.jpg',
            category: 'secDish',
            description: "A deepfried specialty perfect for the winter.",
            comment: ''
                        },
        {
            name: "地球の贈り物 | Gift of the Earth",
            image: '/websites/tokugawa/images/dish4.jpg',
            category: 'mainDish',
            description: "Fresh vegetables from the best lands in Japan, Kobe beef and the family's secret sauce.",
            comment: ''
                        },
        {
            name: "夏の果物 | Summer's Fruits",
            image: '/websites/tokugawa/images/dish5.jpg',
            category: 'dessert',
            description: "Garden grown, directly from the plant to the table.",
            comment: ''
                        }
                        ];

    this.dishes = dishes;

    this.select = function (setTab) {
        this.tab = setTab;

        if (setTab === 2)
            this.filtText = "mainDish";
        else if (setTab === 3)
            this.filtText = "secDish";
        else if (setTab === 4)
            this.filtText = "dessert";
        else
            this.filtText = "";
    }

    this.isSelected = function (checkTab) {
        return (this.tab === checkTab);
    }

});