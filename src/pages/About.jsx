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
          {/* Accordion for Frequently Asked Questions */}
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
              </div>
            </div>
          </div>
        

       
  );
};

export default About;
