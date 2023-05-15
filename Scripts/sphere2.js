var entries = [ 
   
    { image: 'Images/Icons/SVG/java.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/selenium.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/cucumber.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/testng.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/maven.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/jenkins.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/jira.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/javascript.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/html-5.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/css-3.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/git.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/mysql.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/adobe-photoshop.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/adobe-illustrator.svg', width: '50', height: '50'},
    { image: 'Images/Icons/SVG/figma.svg', width: '50', height: '50'},



];

var settings = {

    entries: entries,
    width: 480,
    height: 480,
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: 'none',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: .5,
    

};

$( '#tagcloud' ).svg3DTagCloud( settings );