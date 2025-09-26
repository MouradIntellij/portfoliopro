// components/ContactForm.js
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    console.log("Form data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
    alert("Thank you for your message! I'll get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-4xl font-bold text-center mb-4 text-white"
          data-aos="fade-up"
        >
          Get In Touch
        </h2>
        <p
          className="text-lg text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Have a project in mind or want to chat? Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <motion.div data-aos="fade-up" data-aos-delay="300">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name *
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div data-aos="fade-up" data-aos-delay="400">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email *
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div data-aos="fade-up" data-aos-delay="500">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message *
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              rows="5"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-vertical"
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-center"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
