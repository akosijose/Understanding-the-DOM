const banner = document.querySelector("#page-banner");
console.log("#page-banner node type is:", banner.nodeType); //should return 1
console.log("#page-banner node name is:", banner.nodeName); // should return DIV
console.log("#page-banner has child node:", banner.hasChildNodes()); //should return TRUE

const bannerCloned = banner.cloneNode(true);
console.log(bannerCloned);
