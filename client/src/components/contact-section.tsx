import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-syntax-orange">Get</span> <span className="text-white">In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-code-accent to-terminal-green mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'm always excited to work on innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="bg-code-secondary/50 backdrop-blur-lg p-8 rounded-2xl border border-code-accent/20">
              <div className="font-mono text-terminal-green mb-6">
                <span className="text-syntax-orange">// </span>Contact Information
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-code-accent/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-code-accent"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 font-mono text-sm">Email</p>
                    <p className="text-white">kishansingh98337@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-terminal-green/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-phone text-terminal-green"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 font-mono text-sm">Phone</p>
                    <p className="text-white">+91 7400220853</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-syntax-purple/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-syntax-purple"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 font-mono text-sm">Location</p>
                    <p className="text-white">Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-code-accent/20">
                <p className="text-gray-400 font-mono text-sm mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-code-accent/20 rounded-lg flex items-center justify-center text-code-accent hover:bg-code-accent hover:text-code-bg transition-all duration-300">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-syntax-blue/20 rounded-lg flex items-center justify-center text-syntax-blue hover:bg-syntax-blue hover:text-white transition-all duration-300">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="mailto:kishansingh98337@gmail.com" className="w-10 h-10 bg-terminal-green/20 rounded-lg flex items-center justify-center text-terminal-green hover:bg-terminal-green hover:text-code-bg transition-all duration-300">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-code-secondary/50 backdrop-blur-lg p-8 rounded-2xl border border-code-accent/20">
              <div className="font-mono text-terminal-green mb-6">
                <span className="text-syntax-orange">// </span>Send Message
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-gray-400 font-mono text-sm mb-2">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-code-bg/80 border border-code-accent/30 rounded-lg px-4 py-3 text-white font-mono focus:border-code-accent focus:outline-none focus:ring-2 focus:ring-code-accent/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-gray-400 font-mono text-sm mb-2">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-code-bg/80 border border-code-accent/30 rounded-lg px-4 py-3 text-white font-mono focus:border-code-accent focus:outline-none focus:ring-2 focus:ring-code-accent/20 transition-all duration-300"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="block text-gray-400 font-mono text-sm mb-2">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-code-bg/80 border border-code-accent/30 rounded-lg px-4 py-3 text-white font-mono focus:border-code-accent focus:outline-none focus:ring-2 focus:ring-code-accent/20 transition-all duration-300"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-gray-400 font-mono text-sm mb-2">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-code-bg/80 border border-code-accent/30 rounded-lg px-4 py-3 text-white font-mono focus:border-code-accent focus:outline-none focus:ring-2 focus:ring-code-accent/20 transition-all duration-300 resize-none"
                    placeholder="Let's discuss your project..."
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-code-accent to-terminal-green text-code-bg font-mono font-semibold py-3 px-6 rounded-lg hover:from-terminal-green hover:to-code-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-code-accent/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
