//Scripted By,
//    RinUO / {UnboundOrigins}
//        |©|UO Studios|©| -- Copyright


alert("Webpage in Development!");
var nav_home_button = document.getElementById("nav_home_button");
var nav_contact_button = document.getElementById("nav_contact_button");
var nav_support_us_button = document.getElementById("nav_support_us_button");
var nav_projects_button = document.getElementById("nav_projects_button");
var nav_updates_button = document.getElementById("nav_updates_button");
var nav_supporters_button = document.getElementById("nav_supporters_button");
var nav_links_button = document.getElementById("nav_links_button");
nav_home_button.addEventListener("click", link_page);
nav_contact_button.addEventListener("click", link_page);
nav_support_us_button.addEventListener("click", link_page);
nav_projects_button.addEventListener("click", link_page);
nav_updates_button.addEventListener("click", link_page);
nav_supporters_button.addEventListener("click", link_page);
nav_links_button.addEventListener("click", link_page);
    function link_page() {;
        if (this.attributes.Id.value === "nav_home_button") {;
            window.location = "../../index.html";
        } else if (this.attributes.Id.value === "nav_contact_button") {;
            window.location = "../pages/contact.html";
        } else if (this.attributes.Id.value === "nav_support_us_button") {;
            window.location = "../pages/support_us.html";
        } else if (this.attributes.Id.value === "nav_projects_button") {;
            window.location = "../pages/projects.html";
        } else if (this.attributes.Id.value === "nav_updates_button") {;
            window.location = "../pages/updates.html";
        } else if (this.attributes.Id.value === "nav_supporters_button") {;
            window.location = "../pages/supporters.html";
        } else if (this.attributes.Id.value === "nav_links_button") {;
            window.location = "../pages/links.html";
        };
    };