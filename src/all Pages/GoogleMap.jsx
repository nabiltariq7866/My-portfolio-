import React from "react";

const GoogleMap = () => {
  return (
    
    <div className="max-w-[1350px] md:px-4  mx-auto mb-14 py-9">
    <div className="w-full flex justify-center items-center">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6815.957083630426!2d74.1022467957935!3d31.331965711463184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918566cbbc7d627%3A0x175ee391c9c32d7b!2sShamkay%20Bhattian%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738309452787!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
};

export default GoogleMap;
