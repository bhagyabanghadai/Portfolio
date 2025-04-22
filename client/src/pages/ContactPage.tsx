import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { apiRequest } from "@/lib/queryClient";
import TechBg3 from "@/assets/TechBg3";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon.",
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen p-6 md:p-10 section-appear">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-syntax-blue">Contact Me</h2>
        
        {/* Background element */}
        <div className="absolute top-20 right-0 opacity-5 pointer-events-none z-0">
          <TechBg3 />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div>
            <Card className="bg-editor-bg border border-comment/30 rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-syntax-green">Get In Touch</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-comment">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="w-full bg-editor-bg border border-comment/30 text-editor-text focus:border-syntax-blue" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-comment">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="w-full bg-editor-bg border border-comment/30 text-editor-text focus:border-syntax-blue" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-comment">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message" 
                              className="w-full bg-editor-bg border border-comment/30 text-editor-text focus:border-syntax-blue" 
                              rows={5} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="bg-syntax-blue hover:bg-opacity-80 text-editor-text py-2 px-6 transition-colors duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-editor-bg border border-comment/30 rounded-lg mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-syntax-green">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-syntax-red mt-1 mr-3" />
                    <div>
                      <p className="text-editor-text">Sioux Falls, SD</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-syntax-red mt-1 mr-3" />
                    <div>
                      <a 
                        href="mailto:bhagyaban30999@gmail.com" 
                        className="text-editor-text hover:text-syntax-blue transition-colors duration-200"
                      >
                        bhagyaban30999@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-syntax-red mt-1 mr-3" />
                    <div>
                      <a 
                        href="tel:+16053764900" 
                        className="text-editor-text hover:text-syntax-blue transition-colors duration-200"
                      >
                        +1 (605) 376-4900
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-editor-bg border border-comment/30 rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-syntax-green">Find Me Online</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaLinkedin className="text-syntax-blue mt-1 mr-3" />
                    <div>
                      <a 
                        href="https://linkedin.com/in/bhagyabanghadai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-editor-text hover:text-syntax-blue transition-colors duration-200"
                      >
                        linkedin.com/in/bhagyabanghadai
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaGithub className="text-syntax-blue mt-1 mr-3" />
                    <div>
                      <a 
                        href="https://github.com/bhagyabanghadai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-editor-text hover:text-syntax-blue transition-colors duration-200"
                      >
                        github.com/bhagyabanghadai
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
