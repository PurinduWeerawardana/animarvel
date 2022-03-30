const navigation_bar = document.querySelector(".navigation-bar-ul");
const navigation_toggle = document.querySelector(".navigation-toggle");

// when the user click navigation_toggle this will run
navigation_toggle.addEventListener("click", function(){
    const visibility_of_nav = navigation_bar.getAttribute("data-visible");
    // console.log(visibility_of_nav);
    if(visibility_of_nav === "false"){
        navigation_bar.setAttribute("data-visible",true);
        navigation_toggle.setAttribute("aria-expanded",true);
    }else if ( visibility_of_nav === "true"){
        navigation_bar.setAttribute("data-visible",false)
        navigation_toggle.setAttribute("aria-expanded",false);
    }
});