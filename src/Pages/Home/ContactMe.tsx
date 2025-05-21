import { useState } from "react";

export default function ContactMe() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: "c8ced628-eea3-4082-b3b5-4910eee89085",
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phoneNumber,
                    message: formData.message,
                    subject: "New Contact Form Submission"
                })
            });
            
            const result = await response.json();
            if (result.success) {
                console.log("Form submitted successfully!", result);
                setIsSubmitted(true);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    message: ""
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="Contact" className="contact-section">
            <div>
              <h1 className="skills-section-heading">Get In Touch</h1>
            </div>
            
            {isSubmitted ? (
                <div className="success-message">
                    <h3>Thank you for your message!</h3>
                    <p>I'll get back to you as soon as possible.</p>
                    <button 
                        className="btn btn-primary" 
                        onClick={() => setIsSubmitted(false)}
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form className="contact-form-container" onSubmit={handleSubmit}>
                    <input 
                        type="hidden" 
                        name="access_key" 
                        value="c8ced628-eea3-4082-b3b5-4910eee89085" 
                    />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                    
                    <div className="container">
                        <label htmlFor="firstName" className="contact-label">
                            <span className="text-md">First Name</span>
                            <input
                                type="text"
                                className="contact-input text-md"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="lastName" className="contact-label">
                            <span className="text-md">Last Name</span>
                            <input
                                type="text"
                                className="contact-input text-md"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="email" className="contact-label">
                            <span className="text-md">Email</span>
                            <input
                                type="email"
                                className="contact-input text-md"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="phoneNumber" className="contact-label">
                            <span className="text-md">Phone Number</span>
                            <input
                                type="tel"
                                className="contact-input text-md"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <label htmlFor="message" className="contact-label">
                        <span className="text-md">Message</span>
                        <textarea
                            className="contact-input text-md"
                            id="message"
                            name="message"
                            rows={8}
                            placeholder="Type your message..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <div>
                        <button 
                            type="submit" 
                            className="btn btn-primary contact-form-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            )}
        </section>
    );
}