import { useState } from "react";

export default function Contact({endpoint}: {endpoint: string}) { ///
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Failed to send message.");
      }

      setTimeout(() => setStatus(""), 5000);
    } catch {
      setStatus("Error sending message.");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Get in <span className="text-pink-900 dark:text-pink-400">Touch</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 sm:mb-12 text-sm sm:text-base">
          Have a question, opportunity, or just want to say hi? Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">

          <div>
            <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full rounded-xl px-4 py-3
                bg-white dark:bg-slate-900
                border border-slate-300 dark:border-slate-700
                text-slate-900 dark:text-slate-100
                placeholder:text-slate-400 dark:placeholder:text-slate-500
                focus:outline-none focus:ring-2 focus:ring-pink-500
                sm:text-sm sm:px-3 sm:py-2"
              required
            />
          </div>


          <div>
            <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@gmail.com"
              className="w-full rounded-xl px-4 py-3
                bg-white dark:bg-slate-900
                border border-slate-300 dark:border-slate-700
                text-slate-900 dark:text-slate-100
                placeholder:text-slate-400 dark:placeholder:text-slate-500
                focus:outline-none focus:ring-2 focus:ring-pink-500
                sm:text-sm sm:px-3 sm:py-2"
              required
            />
          </div>


          <div>
            <label className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Your message..."
              className="w-full rounded-xl px-4 py-3
                bg-white dark:bg-slate-900
                border border-slate-300 dark:border-slate-700
                text-slate-900 dark:text-slate-100
                placeholder:text-slate-400 dark:placeholder:text-slate-500
                focus:outline-none focus:ring-2 focus:ring-pink-500
                sm:text-sm sm:px-3 sm:py-2"
              required
            />
          </div>


          <button
            type="submit"
            className="w-full sm:w-auto flex justify-center items-center gap-2
              px-8 py-3 rounded-full
              bg-pink-900 dark:bg-pink-600
              text-white font-medium
              transition-all
              hover:opacity-90 hover:scale-[1.03]
              focus:ring-2 focus:ring-pink-500"
          >
            Send Message <span>→</span>
          </button>

        
          {status && (
            <p className="mt-2 text-sm text-pink-900 dark:text-pink-400 text-center sm:text-left">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
