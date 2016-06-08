import { Router } from "meteor/iron:router"
import "../ui/layout/layout.js"
import "../ui/navbar/navbar.js"
import "../ui/home/home.js"



Router.configure({
    layoutTemplate:"layout"
});

Router.route('/',function () {
    this.render('home');
});

// Router.route('/',function(){
//     this.render("megarokr");    
// });