var app = angular.module('corApp', []);
app.controller('homeController', function () {

    var rightNav = [
        {
            link: "#",
            id: "productTag",
            name: " Managed Services",
            sub: "ms"
        },
        {
            link: "#",
            id: "modelTag",
            name: " Solutions",
            sub: "sol"
        },
        {
            link: "destroyer.html",
            id: "destroyerTag",
            name: " Careers",
            sub: "car"
        },
        {
            link: "#",
            id: "powerTag",
            name: " About Us",
            sub: "ab"
        }
    ];

    this.rightNav = rightNav;

    this.tab = 1;

    this.filtText = '';
    
    var dropColumns = [
        {
            contact: "Contact",
            address: "CYRE Corporation | 404 Street | Network, WW 0.0.0.0",
            email: "- Contact Us -",
            link: "mailto:#",
            presence: "Global Presence",
            office1: "CYRE New York",
            office2: "CYRE London",
            office3: "CYRE Tokyo",
            office4: "CYRE Dubai"
        },
        {
            contact: "Managed Services",
            office1: "Cyber Security Testing",
            link1: "#",
            office2: "Cyber Security Advisory",
            link2: "#",
            office3: "Intelligence Gathering and Analysis",
            link3: "#",
            office4: "Incident Detection and Response",
            link4: "#",
            office5: "Offensive Operations",
            link: "#"
        },
        {
            contact: "Solutions",
            office1: "Offensive Tooling",
            link1: "#",
            office2: "Defensive Tooling",
            link2: "#",
            office3: "Intelligence Management",
            link3: "#",
            office4: "Network Management",
            link4: "#",
            office5: "Vulnerability Research Package",
            link: "#"   
        },
        {
            careers: "Careers",
            link1: "#",
            about: "About Us",
            link2: "../pages/about.html"
        }
        
        
        
    ];
    
    this.dropColumns = dropColumns;
    
    
    

    var appliances = [
        {
            name: 'Identify Threats in Real Time',
            image: 'images/analytics.png',
            category: 'analytics',
            description: ' Test, characterize and conduct forensic examinations on next-generation cyber attacks by simulating their execution path with a virtual machine technology.',
            comment: ''
                },
        {
            name: 'Keeping Data Organized',
            image: 'images/cns.jpg',
            category: 'cns',
            description: 'Unify reporting and configuration, while monitoring and correlating attacks that simultaneously cross multiple vectors of the network - increasing the efficacy of the platform.',
            comment: ''
                },
        {
            name: 'A Free-Flying Microgravity Weapon',
            image: 'images/pod.jpg',
            category: 'pod',
            description: "Address critical vectors of attack: Web, email, file, endpoint and mobile. Enable rapid identification and remediation of attacks that have penetrated and are residing on an organization's endpoints.",
            comment: ''
                }
                ];

    this.appliances = appliances;

    this.select = function (setTab) {
        this.tab = setTab;

        if (setTab === 2)
            this.filtText = "analytics";
        else if (setTab === 3)
            this.filtText = "cns";
        else if (setTab === 4)
            this.filtText = "pod";
        else
            this.filtText = "";
    }

    this.isSelected = function (checkTab) {
        return (this.tab === checkTab);
    }

    var destroyerBoxes = [
        {
            image: 'images/box4.jpg',
            date: "January 6, 2016",
            name: "Space station system is live",
            description: "Space Station system is live and functional.",
            comment: "Read more"
        },
        {
            image: 'images/box5.jpg',
            date: "February 14, 2016",
            name: "Rocket defense test",
            description: "Destroyer II completes rocket defense test.",
            comment: "Read more"
        },
        {
            image: 'images/box6.jpg',
            date: "March 5, 2016",
            name: "Destroyer ii is in orbit",
            description: 'Destroyer II is fully functional in orbit.',
            comment: "Read more"
        }
    ];

    this.destroyerBoxes = destroyerBoxes;

});