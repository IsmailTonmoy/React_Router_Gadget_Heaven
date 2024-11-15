import { Helmet } from "react-helmet-async";


const About = () => {
  return (
    <div className="p-6 bg-gray-100">
      <Helmet>
        <title>Policy</title>
        <link rel="icon" type="image/png" href="/src/picture/favicon-16x16.png" />
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center mb-6">About Us</h1>
        <p className="w-10/12 text-center mx-auto font-semibold pb-6">Welcome to Gadget Haven, your one-stop online store for the latest and most innovative gadgets!
        Our mission is to bring cutting-edge technology right to your fingertips, offering a curated selection of high-quality gadgets that make life easier, more fun, and more connected.</p>
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4 mx-auto text-center">Contact Us</h2>
            <p className="font-semibold text-center">
            We’d love to hear from you! Reach out to us <br />
            </p>
            <p className="text-center">
Email: support@gadgethaven.com <br />
Phone: +1-800-123-4567 (Mon-Fri, 9 AM - 6 PM EST)<br />
Mailing Address:
Gadget Haven
123 Tech Boulevard
Silicon City, CA 94043
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 mx-auto text-center">Payment Methods</h2>
            <p></p>
            <p className="font-semibold text-center">
            At Gadget Haven, we offer secure and flexible payment options to make your shopping experience as convenient as possible. <br />
            </p>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 mx-auto text-center pt-4">
            <div>
              <h3 className="font-bold">Credit & Debit Cards</h3>


            <ul>
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
                
              </ul>
            </div>

            
        <div>
              <h3 className="font-bold">Digital Wallets</h3>
              <ul>
                <li>Bekash</li>
                <li>Rocket</li>
                <li>Nagad</li>
              </ul>
        </div>
            
        <div>
              <h3 className="font-bold">Bank Transfers</h3>
              <ul>
                <li>City Bank</li>
                <li>DBBL</li>
                <li>One Bank</li>
              </ul>
            </div>
          </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 mx-auto text-center">Warranty Claims</h2>
            <p className="font-semibold text-center text-green-500">
            We stand by the quality of our products. Most gadgets sold on Gadget 
            Haven come with a 1-Year Manufacturer Warranty (unless stated otherwise). <br />
            </p>
            <p className="text-center py-4 ">
            1. Ensure your product is eligible under the manufacturer’s warranty. <br />
            2. Contact us via email at <span className="text-blue-400">warranty@gadgethaven.com</span> with Proof of purchase (order number or receipt).<br />
            3. Our team will assess your claim and guide you through the next steps.
            </p>

            <p className="text-red-500 font-bold text-center">Please note: Warranty claims are processed directly with the manufacturer for certain products.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 mx-auto text-center">Return Policy</h2>
            <p className="font-semibold text-center ">
            We want you to be satisfied with your purchase! <br />
            </p>
            <p className="text-center py-4 ">
            1. Items can be returned within 30 days of delivery <br />
            2. Products must be in original condition, with all packaging and accessories.<br />
            3. Products damaged due to misuse non-Returnable.
            </p>

            
          </div>
              </div>
            </div>
          </div>
          
        

       
  );
};

export default About;
