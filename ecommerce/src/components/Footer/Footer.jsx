import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
        
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +1234567890</p>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li><a href="#"><i className="fab fa-facebook text-xl"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter text-xl"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram text-xl"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer