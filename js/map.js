// Interactive Map JavaScript

// Route information data for EXISTING and PLANNED lines
const routeInfo = {
    'A': {
        title: 'Line A',
        route: 'Tukwila to Federal Way',
        description: 'First RapidRide line (2010). Connects light rail to Federal Way Transit Center.'
    },
    'B': {
        title: 'Line B',
        route: 'Redmond to Bellevue',
        description: 'Launched 2011. Serves Overlake and Crossroads on the Eastside.'
    },
    'C': {
        title: 'Line C',
        route: 'West Seattle to South Lake Union',
        description: 'Launched 2012. Connects West Seattle and Downtown Seattle.'
    },
    'D': {
        title: 'Line D',
        route: 'Ballard to Downtown Seattle',
        description: 'Launched 2012. Connects Ballard and Downtown Seattle.'
    },
    'E': {
        title: 'Line E',
        route: 'Shoreline to Downtown Seattle',
        description: 'Launched 2014. Consistently the busiest RapidRide route and replaced the Route 358 - which had previously been renamed already due to a passenger shooting the driver in the head and careening the bus over the Aurora Bridge.'
    },
    'F': {
        title: 'Line F',
        route: 'Burien to Renton',
        description: 'Launched 2014. Connects southside communities and Boeing Renton facility.'
    },
    'G': {
        title: 'Line G',
        route: 'Madison Valley to Downtown Seattle',
        description: 'Launched 2024. First line with center island boarding stations.'
    },
    'H': {
        title: 'Line H',
        route: 'Burien to Downtown Seattle',
        description: 'Launched 2023. Connects Downtown Seattle with Burien.'
    },
    'I': {
        title: 'Line I (Planned)',
        route: 'Renton to Auburn via Kent',
        description: 'Opening 2027. Will replace Route 160 with 27 new transit signal priority lights.'
    },
    'J': {
        title: 'Line J (Planned)',
        route: 'Downtown Seattle to U District',
        description: 'Opening 2027. Will replace Route 70 with 2 miles of bus priority lanes.'
    },
    'K': {
        title: 'Line K (Planned)',
        route: 'Totem Lake to Downtown Bellevue',
        description: 'In planning. Will connect Kirkland with Bellevue and the 2-line to Seattle.'
    },
    'R': {
        title: 'Line R (Planned)',
        route: 'Downtown Seattle to Rainier Beach',
        description: 'In early design. Will replace Route 7 along Rainier Avenue corridor.'
    }
};

// Get all route markers and info box elements
const markers = document.querySelectorAll('.route-marker');
const infoBox = document.getElementById('infoBox');
const infoTitle = document.getElementById('infoTitle');
const infoRoute = document.getElementById('infoRoute');
const infoDescription = document.getElementById('infoDescription');

// Add event listeners to each marker
markers.forEach(marker => {
    // Show info box on hover
    marker.addEventListener('mouseenter', function(e) {
        const line = this.getAttribute('data-line');
        const info = routeInfo[line];
        
        // Update info box content
        infoTitle.textContent = info.title;
        infoRoute.textContent = info.route;
        infoDescription.textContent = info.description;
        
        // Position info box near the marker
        const rect = this.getBoundingClientRect();
        const containerRect = this.parentElement.getBoundingClientRect();
        
        // Calculate position (offset to the right and slightly up)
        let leftPos = rect.left - containerRect.left + 50;
        let topPos = rect.top - containerRect.top - 10;
        
        // Adjust if info box would go off screen
        if (leftPos + 250 > containerRect.width) {
            leftPos = rect.left - containerRect.left - 260;
        }
        
        infoBox.style.left = leftPos + 'px';
        infoBox.style.top = topPos + 'px';
        
        // Show info box
        infoBox.classList.add('active');
    });

    // Hide info box when mouse leaves
    marker.addEventListener('mouseleave', function() {
        infoBox.classList.remove('active');
    });

    // Click to navigate to detailed page for that line
    marker.addEventListener('click', function() {
        const line = this.getAttribute('data-line');
        
        // Check if it's a planned line (I, J, K, R) or existing line
        if (line === 'I' || line === 'J' || line === 'K' || line === 'R') {
            // Redirect to planned service page
            window.location.href = 'plserv.html#line-' + line;
        } else {
            // Redirect to existing service page
            window.location.href = 'exserv.html#line-' + line;
        }
    });
});

