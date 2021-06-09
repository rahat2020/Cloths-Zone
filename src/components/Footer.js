import React from 'react';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {


    return (
        <div>
            <div class="footer-2 bg-gray-800 pt-6 md:pt-12">
                <div class="container px-4 mx-auto">

                    <div class="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">

                        <div class="footer-info lg:w-1/3 md:px-4">
                            <h4 class="text-white text-2xl mb-4">19K users are buying cloths from this site.</h4>
                            <p class="text-gray-400">We have carefully crafted the cloths to suit to everyone's need.</p>
                            <div class="mt-4">
                                <button class=" bg-red-700 font-bold  py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                                    <FontAwesomeIcon className="text-white" icon={faYoutube} /> Follow on YouTube  </button>

                                <button class="bg-blue-500 font-bold rounded-96 py-2  mt-2 px-4 hover:bg-green-300 transition duration-300 ease-in-out text-white">
                                    <FontAwesomeIcon className="text-white" icon={faFacebook} /> Follow CLotheZone </button>
                            </div>
                        </div>

                        <div class="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
                            <div class="sm:flex">
                                <div class="sm:flex-1">
                                    <h6 class="text-base font-medium text-white uppercase mb-2">About</h6>
                                    <div>
                                        <a href="#" class="text-gray-400 py-1 block hover:underline">Ladies Cloths</a>
                                        <a href="#" class="text-gray-400 py-1 block hover:underline">Gents Cltohs</a>
                                        <a href="#" class="text-gray-400 py-1 block hover:underline">Latest Products</a>
                                        <a href="#" class="text-gray-400 py-1 block hover:underline">Everyone's Cloths</a>
                                    </div>
                                </div>
                                <div class="sm:flex-1 mt-4 sm:mt-0">
                                    <h6 class="text-base font-medium text-white uppercase mb-2">What we offer</h6>
                                    <div>
                                        <a href="#" class="text-gray-400 py-1 block hover:underline">Blogs</a>
                                        <a href="#" class="text-gray-400 py-1 block hover:underline">Resources</a>
                                        <a href="#" class="text-gray-400 py-1 block hover:underline">Newletters</a>
                                        <a href="#" class="text-gray-400 py-1 block hover:underline">Terms & Return Policy</a>
                                        <a href="#" class="text-gray-400 py-1 block hover:underline"></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
                            <h5 class="text-lg text-white font-medium mb-4">Explore our site</h5>
                            <button class="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">Explore</button>
                        </div>

                    </div>

                </div>

                <div class="border-t border-solid border-gray-900 mt-4 py-4">
                    <div class="container px-4 mx-auto">

                        <div class="md:flex md:-mx-4 md:items-center">
                            <div class="md:flex-1 md:px-4 text-center md:text-left">
                                <p class="text-white">&copy; <strong>ClothZone</strong></p>
                            </div>
                            <div class="md:flex-1 md:px-4 text-center md:text-right">
                                <a href="#" class="py-2 px-4 text-white inline-block hover:underline">Terms of Service</a>
                                <a href="#" class="py-2 px-4 text-white inline-block hover:underline">Privacy Policy</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;