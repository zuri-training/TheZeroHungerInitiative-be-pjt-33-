const express = require("express");

const { createDonation, getAllDonation, deleteDonation, updateDonation, getDonation, myDonation, attachDispatchRiders, verifyPickedUp } = require ("../controllers/donationController");
const auth = require ("../controllers/authController");

 class DonationRouter {
   constructor(router) {
     this.router = router;
   }
   
   apiRoute() {
     // all route from here are authenticated
     this.router.use(auth.authenticate());
     
     // Logged in user donation
     this.router
      .route("/my-donations")
      .get(auth.authorize("volunteer", "donor"), myDonation);
      
     this.router
      .route("/dispatch-rider")
      .patch(auth.authorize("admin"), attachDispatchRiders);
      
     this.router
      .route("/verify-picked-up")
      .patch(auth.authorize("admin", "dispatch rider"), verifyPickedUp);
     
     this.router
      .route("/")
      .post(auth.authorize("admin", "volunteer", "donor"), createDonation)
      .get(auth.authorize("admin"), getAllDonation);
      
      this.router
      .route("/:id")
      .get(getDonation)
      .patch(updateDonation)
      .delete(deleteDonation);
      
    return this.router;
   }
 }
 
  module.exports = new DonationRouter(express.Router()).apiRoute();
 