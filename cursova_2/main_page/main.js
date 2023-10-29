const nav = document.querySelector(".nav"),
 search_icon = document.querySelector("#search_icon");

search_icon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    if(nav.classList.contains("openSearch")){
        search_icon.classList.replace("search-outline","")
    }
})