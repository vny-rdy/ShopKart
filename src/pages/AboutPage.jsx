import React from 'react';
import { Footer, Navbar } from "../components";


const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        {/* Heading Section */}
        <h1 className="text-center text-4xl font-semibold text-indigo-600 mb-6">About Us</h1>
        <hr className="border-t-2 border-indigo-600 w-1/3 mx-auto mb-6" />
        
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          <strong>Welcome to ShopKart!</strong><br />
          At ShopKart, we are revolutionizing the way you shop online. Our mission is to provide a seamless, enjoyable, and secure shopping experience for everyone, whether you are looking to purchase your favorite products or explore new ones.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">What We Do</h3>
        <ul className="list-disc pl-8 text-lg text-gray-700 mb-8">
          <li>Browse products across various categories.</li>
          <li>Read detailed product descriptions and reviews.</li>
          <li>Enjoy a smooth checkout experience.</li>
          <li>Get reliable customer support at every step.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-700 mb-8">
          Our vision is to be the go-to platform for all your shopping needs, offering a curated selection of high-quality products, backed by an excellent customer experience. We strive to create a marketplace that brings people together, making shopping accessible, efficient, and personalized.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Why Choose ShopKart?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-lg text-gray-700 text-black">
          <div className="flex items-start">
            <div className="bg-indigo-600  p-4 rounded-lg shadow-lg mr-4">
              <h4 className="font-semibold">Wide Range of Products</h4>
              <p>From fashion to electronics, home goods to beauty products, we have something for everyone.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-600  p-4 rounded-lg shadow-lg mr-4">
              <h4 className="font-semibold">Secure and Fast Payments</h4>
              <p>We offer multiple payment methods, ensuring your transactions are safe and fast.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-600  p-4 rounded-lg shadow-lg mr-4">
              <h4 className="font-semibold">Customer-Centric Approach</h4>
              <p>Our team is dedicated to providing top-notch customer service, ensuring you have the best shopping experience possible.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-600  p-4 rounded-lg shadow-lg mr-4">
              <h4 className="font-semibold">Affordable Prices</h4>
              <p>We believe in offering great products at prices you can afford, without compromising on quality.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center text-indigo-600 py-8">Our Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="w-full h-24 object-cover" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Men's Clothing" />
    <div className="card-body text-center py-4">
      <h5 className="card-title text-xl font-medium">Men's Clothing</h5>
    </div>
  </div>
  <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="w-full h-24 object-cover" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" />
    <div className="card-body text-center py-4">
      <h5 className="card-title text-xl font-medium">Women's Clothing</h5>
    </div>
  </div>
  <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="w-full h-24 object-cover" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelry" />
    <div className="card-body text-center py-4">
      <h5 className="card-title text-xl font-medium">Jewelry</h5>
    </div>
  </div>
  <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="w-full h-24 object-cover" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" />
    <div className="card-body text-center py-4">
      <h5 className="card-title text-xl font-medium">Electronics</h5>
    </div>
  </div>
</div>

      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
