const navigation_bar = document.querySelector(".navigation-bar-ul");
const navigation_toggle = document.querySelector(".navigation-toggle");

navigation_toggle.addEventListener("click", ()=> {
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