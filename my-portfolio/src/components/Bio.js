import React from "react";
import bioImage from "../images/bio-image.jpeg";

const Bio = () => {
  return (
    <section id="bio" className="container py-5">
      <h2 className="text-center">Bio</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <img
            src={bioImage}
            alt="Ryan Golder"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "200px" }}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          <p className="text-center">
            Ryan Golder is an aspiring Software Engineer with a passion for
            using innovative technology to solve complex problems. With an
            extensive career in Professional Services, his experience in dealing
            with clients with unique problems has grown his skills for
            simplifying difficult problems. Ryan constantly looks to source a
            simple solution to difficult problems and avoids getting stuck in
            the detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
