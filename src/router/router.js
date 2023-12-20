import * as VueRouter from "vue-router";

import PageRegistration from "@/pages/PageRegistration";
import PageLoginUser from "@/pages/PageLoginUser";
import PageHomeUser from "@/pages/PageHomeUser";
import PagePersonalData from "@/pages/PagePersonalData";

import PageSearchTours from "@/pages/PageSearchTours";
import PageViewTour from "@/pages/PageViewTour"
import PageSearchHotels from "@/pages/PageSearchHotels";

import PageMakePurchase from "@/pages/PageMakePurchase";
import PageBuyTour from "@/pages/PageBuyTour";
import PageUserPurchases from "@/pages/PageUserPurchases";


import PageLoginAdmin from "@/pages/PageLoginAdmin";
import PageHomeAdmin from "@/pages/PageHomeAdmin";
import PageChangePassword from "@/pages/PageChangePassword";

import PageTourEdit from "@/pages/PageTourEdit";
import PageToursAdmin from "@/pages/PageToursAdmin";

import PageHotelEdit from "@/pages/PageHotelEdit";
import PageHotelsAdmin from "@/pages/PageHotelsAdmin";
import PageBindHotels from "@/pages/PageBindHotels";

import PageReport from "@/pages/PageReport";

const routes = [
    { path: "/home", component: PageHomeUser, name: "home", alias: "/" },
    { path: "/auth", component: PageLoginUser, name: "login" },
    { path: "/registration", component: PageRegistration, name: "registration" },
    { path: "/edit-profile", component: PagePersonalData, name: "personal-data" },

    { path: "/tours", component: PageSearchTours, name: "tours" },
    { path: "/tour/:id", component: PageViewTour, name: "view-tour" },
    { path: "/hotels", component: PageSearchHotels, name: "hotels" },

    { path: "/make-purchase", component: PageMakePurchase, name: "make-purchase" },
    { path: "/buy-tour", component: PageBuyTour, name: "buy-tour" },
    { path: "/purchases", component: PageUserPurchases, name: "purchases" },

    { path: "/admin/auth", component: PageLoginAdmin, name: "login-admin", alias: "/admin" },
    { path: "/admin/home", component: PageHomeAdmin, name: "home-admin" },
    { path: "/admin/change-password", component: PageChangePassword, name: "change-password" },

    { path: "/admin/tours", component: PageToursAdmin, name: "tours-admin" },
    { path: "/admin/tour/:id/edit", component: PageTourEdit, name: "edit-tour" },

    { path: "/admin/hotels", component: PageHotelsAdmin, name: "hotels-admin" },
    { path: "/admin/hotel/:id/edit", component: PageHotelEdit, name: "edit-hotel" },
    { path: "/admin/bind-hotels", component: PageBindHotels, name: "bind-hotels" },

    { path: "/admin/report", component: PageReport, name: "report" },

];

let router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;
