export default function ContactUsPage() {
  return (
    <section id="contact" className="w-[500px] mx-auto my-8 bg-white relative">
      {/* Shadow effect */}
      <div className="after:content-[''] after:block after:h-8 after:w-[90%] after:left-[5%] after:bottom-0 after:absolute after:shadow-lg after:rounded-full after:-z-10"></div>
      
      <div className="sectionheader">
        <h1 className="bg-[#F2385A] font-oswald text-2xl py-3 px-4 text-white shadow-[0_0.06em_0_#424242] relative">CONTACT</h1>
      </div>
      
      <article className="p-4">
        <p className="mb-4">Yoda soon you will call me master Governor Tarkin. A new hope Boba Fett bantha forest moon. Tusken raider Master Yoda do or do not never tell me the odds.</p>
        
        {/* Toggle button for contact form */}
        <label htmlFor="checkcontact" className="contactbutton block w-full h-12 bg-[#F2385A] shadow-[1px_1px_0_0_#832032,2px_2px_0_0_#832032,3px_3px_0_0_#832032] text-center mt-5 mb-0.5 cursor-pointer hover:shadow-[1px_1px_0_0_#832032] hover:mt-6 hover:ml-0.5 hover:mb-0 transition-all duration-250">
          <div className="mail inline-block mt-3 text-sm relative">
            <div className="border-t-[2em] border-t-transparent border-l-[2.6em] border-l-[#832032] h-0 w-0 relative">
              <div className="before:content-[''] before:block before:absolute before:-top-10 before:-left-[2.95em] before:border-t-[1.2em] before:border-t-[#832032] before:border-l-[1.6em] before:border-l-transparent before:border-r-[1.6em] before:border-r-transparent before:border-b-[1em] before:border-b-transparent"></div>
              <div className="after:content-[''] after:block after:absolute after:border-t-[2em] after:border-t-transparent after:border-r-[2.6em] after:border-r-[#832032] after:h-0 after:w-0 after:-left-[2.18em] after:bottom-0"></div>
            </div>
          </div>
        </label>
        
        <input id="checkcontact" type="checkbox" className="absolute -left-[9999px]" />
        
        {/* Contact form - hidden by default */}
        <form action="" method="post" className="contactform overflow-hidden max-h-0 transition-all duration-300 ease-linear">
          {/* Name field */}
          <p className="input_wrapper relative mt-4">
            <input 
              type="text" 
              name="contact_nom" 
              id="contact_nom" 
              className="mt-4 block w-full bg-white border border-gray-300 shadow-sm py-4 px-4 transition-all duration-250 ease-in-out text-gray-600 indent-[15%] focus:bg-[rgba(242,56,90,0.05)] focus:shadow-inner focus:shadow-gray-300 focus:outline-none focus:indent-0" 
            />
            <label htmlFor="contact_nom" className="absolute left-0 top-0 h-full bg-[#F2385A] text-white font-oswald w-[15%] text-center leading-[2.8em] transition-all duration-250 ease-in-out">NAME</label>
          </p>
          
          {/* Email field */}
          <p className="input_wrapper relative mt-4">
            <input 
              type="text" 
              name="contact_email" 
              id="contact_email" 
              className="mt-4 block w-full bg-white border border-gray-300 shadow-sm py-4 px-4 transition-all duration-250 ease-in-out text-gray-600 indent-[15%] focus:bg-[rgba(242,56,90,0.05)] focus:shadow-inner focus:shadow-gray-300 focus:outline-none focus:indent-0" 
            />
            <label htmlFor="contact_email" className="absolute left-0 top-0 h-full bg-[#F2385A] text-white font-oswald w-[15%] text-center leading-[2.8em] transition-all duration-250 ease-in-out">EMAIL</label>
          </p>
          
          {/* Subject field */}
          <p className="input_wrapper relative mt-4">
            <input 
              type="text" 
              name="contact_sujet" 
              id="contact_sujet" 
              className="mt-4 block w-full bg-white border border-gray-300 shadow-sm py-4 px-4 transition-all duration-250 ease-in-out text-gray-600 indent-[15%] focus:bg-[rgba(242,56,90,0.05)] focus:shadow-inner focus:shadow-gray-300 focus:outline-none focus:indent-0" 
            />
            <label htmlFor="contact_sujet" className="absolute left-0 top-0 h-full bg-[#F2385A] text-white font-oswald w-[15%] text-center leading-[2.8em] transition-all duration-250 ease-in-out">SUBJECT</label>
          </p>
          
          {/* Message field */}
          <p className="textarea_wrapper mt-5">
            <textarea 
              name="contact_message" 
              id="contact_message" 
              className="block w-full bg-white border border-gray-300 shadow-sm p-4 transition-all duration-250 ease-in-out text-gray-600 min-h-[150px] focus:bg-[rgba(242,56,90,0.05)] focus:shadow-inner focus:shadow-gray-300 focus:outline-none"
            ></textarea>
          </p>
          
          {/* Submit button */}
          <p className="submit_wrapper text-center mt-4">
            <input 
              type="submit" 
              value="ENVOYER" 
              className="inline-block w-[40%] h-12 mt-4 mb-1.5 cursor-pointer bg-[#F2385A] text-white font-oswald text-base border-none shadow-[1px_1px_0_0_#832032,2px_2px_0_0_#832032,3px_3px_0_0_#832032] appearance-none transition-all duration-250 ease-in-out hover:shadow-[1px_1px_0_0_#832032] hover:mt-5 hover:ml-0.5 hover:mb-0" 
            />
          </p>
        </form>
      </article>
    </section>
  );
}