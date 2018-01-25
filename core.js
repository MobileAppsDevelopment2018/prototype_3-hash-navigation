function navHashHistory(saveHash) {
    //Hash Hijack Method for SPA
    //for each new SPA partial view, add the hash to the URL bar
    var hashValue = location.hash;
    hashValue = hashValue.replace(/^#/, '');
    if (hashValue != saveHash) {
        window.history.pushState("", "", "#" + saveHash);
    } else {
        //Must be first initialise
        window.history.pushState("", "", "#" + saveHash);
    }

} //end navHashHistory



/*modify changeAppPage - adding function and what you want to add to the hash

case 'home':

    /*code above*/
    navHashHistory('home');

    break;
    
 */
