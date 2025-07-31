function ContactMain() {
  return (
    <div className="p-[30px] bg-pink-100">

      <div className="bg-white max-w-[1100px] mx-auto p-[30px] rounded-[10px] shadow-md">
        <h2 className="text-center text-pink-600 text-3xl font-bold mb-[30px]">
          Send Me a Message
        </h2>

        <form className="mx-auto max-w-[600px]">

          <div className="mb-[20px]">
            <label htmlFor="fullName" className="block font-bold mb-[5px]">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full p-[12px] border-2 border-gray-300 rounded-[5px]"
            />
          </div>

          <div className="mb-[20px]">
            <label htmlFor="email" className="block font-bold mb-[5px]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-[12px] border-2 border-gray-300 rounded-[5px]"
            />
          </div>

          <div className="mb-[20px]">
            <label htmlFor="phone" className="block font-bold mb-[5px]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-[12px] border-2 border-gray-300 rounded-[5px]"
            />
          </div>


          <div className="mb-[20px]">
            <label htmlFor="projectType" className="block font-bold mb-[5px]">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              className="w-full p-[12px] border-2 border-gray-300 rounded-[5px]"
            >
              <option value="">Select a project type</option>
              <option value="website">Website Development</option>
              <option value="mobile">Mobile App</option>
              <option value="ecommerce">E-commerce</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-[20px]">
            <label className="block font-bold mb-[5px]">Budget Range</label>
            <div className="flex gap-[15px] flex-wrap">
              <label><input type="radio" name="budget" value="1000-3000" /> $1,000 - $3,000</label>
              <label><input type="radio" name="budget" value="3000-5000" /> $3,000 - $5,000</label>
              <label><input type="radio" name="budget" value="5000+" /> $5,000+</label>
            </div>
          </div>


          <div className="mb-[20px]">
            <label className="block font-bold mb-[5px]">Additional Services</label>
            <div className="flex gap-[15px] flex-wrap">
              <label><input type="checkbox" name="services" value="seo" /> SEO Optimization</label>
              <label><input type="checkbox" name="services" value="maintenance" /> Maintenance</label>
              <label><input type="checkbox" name="services" value="hosting" /> Hosting Setup</label>
            </div>
          </div>

          <div className="mb-[20px]">
            <label htmlFor="projectDetails" className="block font-bold mb-[5px]">
              Project Details
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows="5"
              required
              className="w-full p-[12px] border-2 border-gray-300 rounded-[5px]"
            ></textarea>
          </div>


          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 text-white px-[30px] py-[12px] text-[16px] rounded-[5px] hover:bg-pink-900 hover:shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default ContactMain;