import Home from "../views/Home.js";
import About from "../views/About.js";

const routes = {
    '/': Home,
    '/about': About
};

const router = async () => {
    const content = null || document.querySelector('#content');
    console.log(location.pathname);
    const current = new routes[location.pathname];
    console.log(current);
    
    content.innerHTML = await current.render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);