"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Brain, Crown, Rocket, Clock, X, User, Mail, Phone, Building, Lightbulb, Star, Check, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ProgramsPage() {
  useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBootcampModalOpen, setIsBootcampModalOpen] = useState(false);
  const [isCohort2ModalOpen, setIsCohort2ModalOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen || isBootcampModalOpen || isCohort2ModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isBootcampModalOpen, isCohort2ModalOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Create data object
    const data = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      contactNumber: formData.get('contactNumber') as string,
      currentRole: formData.get('currentRole') as string,
      currentOrganization: formData.get('currentOrganization') as string,
      programInterest: formData.get('programInterest') as string,
      plannedKPIs: formData.get('plannedKPIs') as string,
    };

    try {
      const response = await fetch('/api/program-design', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Close modal on success
        setIsModalOpen(false);
      } else {
        console.error('Program design application error:', result);
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting program design application:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <main key="programs">
      {/* Hero section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
        {/* Background image with subtle opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.15]"
          style={{ backgroundImage: "url('/bootcamp2.webp')" }}
          aria-hidden
        />
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat'
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div data-animate className="scroll-fade-up">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium uppercase tracking-widest mb-8 bg-maroon/10 text-maroon border border-maroon/20">
              Professional Development
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal mb-8 leading-tight">
              Transformational <br /> Programs
            </h1>
            <p className="font-sans font-light text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Accelerate your career with intensive, hands-on training programs designed for healthcare
              professionals. From leadership excellence to AI mastery and startup success.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                asChild
                className="bg-maroon hover:bg-maroon-dark text-cream px-8 py-4 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Link href="#programs">
                  Explore Programs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                className="border-2 border-maroon text-maroon hover:bg-maroon hover:text-cream px-8 py-4 text-base font-semibold rounded-full transition-all duration-300"
              >
                Let&apos;s Design a Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section key="programs-section" id="programs" className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p data-animate className="scroll-fade-up text-xs font-medium uppercase tracking-widest text-maroon mb-4">
              OUR CURRICULUM
            </p>
            <h2 data-animate className="scroll-fade-up font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Three Transformative Programs
            </h2>
            <p data-animate className="scroll-fade-up font-sans font-light text-lg text-gray-600 leading-relaxed">
              Choose the program that aligns with your career goals and transform your healthcare expertise.
            </p>
          </div>

          <div data-animate className="scroll-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leadership Program */}
            <div className="bg-cream rounded-2xl border border-gray-200 p-10 shadow-soft hover:shadow-dramatic hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-maroon" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">Healthcare Leadership Bootcamp</h3>
              <p className="font-sans font-medium text-maroon mb-2">The 48 Hour Leadership Sprint</p>
              <span className="inline-block px-3 py-1 bg-maroon/10 text-maroon text-xs rounded-full font-semibold uppercase tracking-wider mb-6">
                Cohort 2
              </span>

              <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-8">
                <Clock className="w-4 h-4 text-maroon" />
                <span>2 Days</span>
              </div>

              <div className="mt-auto">
                <Button
                  onClick={() => setIsCohort2ModalOpen(true)}
                  className="bg-maroon hover:bg-maroon-dark text-cream rounded-full px-6"
                >
                  Registrations Open
                </Button>
              </div>
            </div>

            {/* Healthcare AI Leadership Fellowship */}
            <div className="bg-cream rounded-2xl border border-gray-200 p-10 shadow-soft hover:shadow-dramatic hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-maroon" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">Healthcare AI Leadership Fellowship</h3>
              <p className="font-sans font-medium text-maroon mb-6">Lead AI Innovation in Healthcare</p>

              <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-8">
                <Clock className="w-4 h-4 text-maroon" />
                <span>8 Weeks</span>
              </div>

              <div className="mt-auto">
                <span className="inline-block bg-white text-gray-600 font-medium px-6 py-2 rounded-full border border-gray-200 text-sm">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Idea to MVP Program */}
            <div className="bg-cream rounded-2xl border border-gray-200 p-10 shadow-soft hover:shadow-dramatic hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-maroon" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-2">Idea to MVP Program</h3>
              <p className="font-sans font-medium text-maroon mb-6">Build Your Startup</p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-maroon" />
                  <span>5 Days</span>
                </div>
                <span className="px-3 py-1 bg-maroon/10 text-maroon text-xs rounded-full font-medium">Hybrid</span>
              </div>

              <div className="mt-auto">
                <span className="inline-block bg-white text-gray-600 font-medium px-6 py-2 rounded-full border border-gray-200 text-sm">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="bg-cream py-20 md:py-32">
        <div key="success-story" className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 data-animate className="scroll-fade-up font-serif text-3xl md:text-4xl text-charcoal mb-6">Success Story</h2>
            <p data-animate className="scroll-fade-up text-lg text-gray-600 font-light leading-relaxed">
              Real impact from our transformational programs
            </p>
          </div>

          <div data-animate className="scroll-fade-up max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-dramatic p-10 md:p-14 text-center">
            {/* 5 Stars */}
            <div className="flex items-center justify-center mb-8 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <div className="flex items-center justify-center mb-6">
              <Image
                src="/gvon1.webp"
                alt="GVON"
                className="h-20 w-auto object-contain"
                width={140}
                height={80}
              />
            </div>
            <p className="text-sm font-medium text-maroon uppercase tracking-widest mb-8">
              In collaboration with Global Village Oncology Network
            </p>

            {/* Description */}
            <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed italic">
              &quot;Sehatlings successfully facilitated <span className="text-maroon not-italic font-semibold">7 workshops</span> on the essential skills that a doctor possesses to develop leadership skills, hosted at the Aga Khan University Hospital.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-maroon-dark to-maroon py-32 md:py-40">
        <div key="call-to-action" data-animate className="scroll-fade-up mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="font-sans font-light text-xl text-cream/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Join hundreds of healthcare professionals who have accelerated their careers through our intensive programs.
          </p>

          <div className="flex justify-center">
            <Button
              asChild
              className="bg-cream text-maroon hover:bg-cream/90 px-6 py-3 text-sm font-semibold rounded-full shadow-dramatic transition-all duration-300"
            >
              <a href="tel:+923362844276">
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Bootcamp Details Modal - Keeping content but restyling */}
      {isBootcampModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="px-8 pt-10 pb-6 border-b border-gray-100 relative text-center">
              <button
                onClick={() => setIsBootcampModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-charcoal"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="font-serif text-3xl font-bold text-maroon mb-2">
                THE 48-HOUR LEADERSHIP SPRINT
              </h2>
              <p className="text-lg text-charcoal/80 font-medium">
                Building a Framework to transform of Physician Burnout to Systemic Change
              </p>
            </div>

            {/* Modal Body */}
            <div className="px-8 py-8 space-y-8">
              {/* Day 1 Section */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-charcoal">
                  Day 1: The Applied Leadership Lab
                </h3>
                <div className="space-y-2 bg-cream p-6 rounded-xl border border-gray-100">
                  <p className="text-gray-700">
                    <span className="font-semibold text-maroon">Theme:</span> Leadership Traits in Action & Foundational Resilience
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-maroon">Goal:</span> Practice all identified traits through high-stakes, time-pressured activities.
                  </p>
                </div>
              </div>

              {/* Day 2 Section */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl text-charcoal">
                  Day 2: The Systemic Change Lab
                </h3>
                <div className="space-y-2 bg-cream p-6 rounded-xl border border-gray-100">
                  <p className="text-gray-700">
                    <span className="font-semibold text-maroon">Theme:</span> Medical Training, Legacy, and Debatable Dialogue
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-maroon">Goal:</span> Apply leadership skills to real medical scenarios with observation, critique, and high-stakes debate.
                  </p>
                </div>
              </div>

              {/* Event Details */}
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="font-serif text-xl font-bold text-charcoal mb-2">Event Details</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <p className="text-gray-700">
                    <span className="font-semibold text-maroon block mb-1">Venue:</span> Auditorium, National Incubation Center Karachi, NED University
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-maroon block mb-1">Time:</span> 10:30 am to 4:30 pm
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-maroon block mb-1">Date:</span> 27 & 28 November
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-maroon block mb-1">Includes:</span> Lunch, Certificate, Group Photography
                  </p>
                </div>
              </div>

              {/* Register Button */}
              <div className="pt-4 text-center">
                <Button
                  asChild
                  className="bg-maroon hover:bg-maroon-dark text-cream w-full md:w-auto px-12 py-6 text-lg rounded-full"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeAx9hL2XcsOosc1yD0lfsTmW9Tg-EU1UXXwrf1xuBXnCpi-Q/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Professional Development Program Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="px-8 pt-10 pb-6 border-b border-gray-100 flex items-start justify-between">
              <div>
                <h2 className="font-serif text-2xl font-bold text-charcoal">Professional Development Program</h2>
                <p className="text-gray-600 mt-1">Register to enhance your skills and advance your career.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-charcoal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body - Using raw HTML form for simplicity with existing logic */}
            <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
              {/* Personal Information Section */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-maroon mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
                    <div className="relative mt-1">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="pl-10 border-gray-200 focus:border-maroon focus:ring-maroon/20"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                    <div className="relative mt-1">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="pl-10 border-gray-200 focus:border-maroon focus:ring-maroon/20"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contactNumber" className="text-gray-700">Contact Number</Label>
                    <div className="relative mt-1">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        required
                        className="pl-10 border-gray-200 focus:border-maroon focus:ring-maroon/20"
                        placeholder="Enter your contact number"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information Section */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-maroon mb-4">Professional Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentRole" className="text-gray-700">Current Role/Title</Label>
                    <div className="relative mt-1">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="text"
                        id="currentRole"
                        name="currentRole"
                        required
                        className="pl-10 border-gray-200 focus:border-maroon focus:ring-maroon/20"
                        placeholder="e.g., Healthcare Manager, Doctor"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="currentOrganization" className="text-gray-700">Current Organization</Label>
                    <div className="relative mt-1">
                      <Building className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="text"
                        id="currentOrganization"
                        name="currentOrganization"
                        required
                        className="pl-10 border-gray-200 focus:border-maroon focus:ring-maroon/20"
                        placeholder="Enter your organization name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="programInterest" className="text-gray-700">Program Interest</Label>
                    <div className="relative mt-1">
                      <Lightbulb className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        type="text"
                        id="programInterest"
                        name="programInterest"
                        required
                        className="pl-10 border-gray-200 focus:border-maroon focus:ring-maroon/20"
                        placeholder="e.g., Startup Ideation"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="plannedKPIs" className="text-gray-700">Planned KPIs</Label>
                    <Textarea
                      id="plannedKPIs"
                      name="plannedKPIs"
                      required
                      rows={4}
                      className="mt-1 border-gray-200 focus:border-maroon focus:ring-maroon/20 resize-none"
                      placeholder="Describe your specific KPIs and goals..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-maroon hover:bg-maroon-dark text-cream py-6 text-lg rounded-full font-semibold"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Cohort 2 Workshop Details Modal */}
      {isCohort2ModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-[10000] p-0 sm:p-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-w-3xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="px-5 sm:px-8 pt-6 sm:pt-10 pb-4 sm:pb-6 border-b border-gray-100 relative text-center">
              {/* Drag indicator for mobile */}
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden" />
              <button
                onClick={() => setIsCohort2ModalOpen(false)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-charcoal"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-maroon mb-1 sm:mb-2 pr-8 sm:pr-0">
                Workshop Details
              </h2>
              <p className="text-sm sm:text-lg text-charcoal/80 font-medium">
                The 48-Hour Leadership Sprint &mdash; Cohort 2
              </p>
            </div>

            {/* Modal Body */}
            <div className="px-5 sm:px-8 py-5 sm:py-8 space-y-5 sm:space-y-8">
              {/* What is it about */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal">
                  What is it about?
                </h3>
                <div className="space-y-4 bg-cream p-4 sm:p-6 rounded-xl border border-gray-100">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    The bootcamp specifically addresses the <span className="font-semibold text-maroon">&quot;BAD Framework&quot;</span> &mdash; <span className="font-semibold">Blame, Accuse, and Demand</span> &mdash; prevalent in traditional healthcare settings. Participants learn collaborative leadership approaches that foster trust, open communication, and shared problem-solving to create more effective and supportive healthcare environments.
                  </p>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                    <div className="bg-white rounded-lg p-2.5 sm:p-4 border border-gray-100 text-center">
                      <p className="text-xs sm:text-sm text-gray-500 line-through mb-1">Blame</p>
                      <p className="font-semibold text-maroon text-xs sm:text-sm">Accountability &amp; Support</p>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 sm:p-4 border border-gray-100 text-center">
                      <p className="text-xs sm:text-sm text-gray-500 line-through mb-1">Accuse</p>
                      <p className="font-semibold text-maroon text-xs sm:text-sm">Trust &amp; Understanding</p>
                    </div>
                    <div className="bg-white rounded-lg p-2.5 sm:p-4 border border-gray-100 text-center">
                      <p className="text-xs sm:text-sm text-gray-500 line-through mb-1">Demand</p>
                      <p className="font-semibold text-maroon text-xs sm:text-sm">Collaboration &amp; Dialogue</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 1 Section */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal">
                  Day 1: The Applied Leadership Lab
                </h3>
                <div className="bg-cream p-4 sm:p-6 rounded-xl border border-gray-100">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Led by <span className="font-semibold text-maroon">Dr. Azeem Qureshi</span> from Institute of Business Management (IoBM), participants engage in intensive strategic thinking sessions. The day culminates in an engaging <span className="font-semibold">LEGO Activity</span> that demonstrates collaborative problem-solving and innovative thinking in action.
                  </p>
                </div>
              </div>

              {/* Day 2 Section */}
              <div className="space-y-2 sm:space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal">
                  Day 2: The Systematic Change Lab
                </h3>
                <div className="bg-cream p-4 sm:p-6 rounded-xl border border-gray-100">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Features an expert panel from Aga Khan University Hospital including <span className="font-semibold text-maroon">Prof. Dr. Ahmed Nadeem Abbasi</span> and <span className="font-semibold text-maroon">Dr. Maria Tariq</span>, who share invaluable insights on healthcare leadership, clinical excellence, and building collaborative healthcare environments.
                  </p>
                </div>
              </div>

              {/* Event Details */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-3">Event Details</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
                  <p className="text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-maroon shrink-0" />
                    <span><span className="font-semibold text-maroon">Date:</span> 25th &ndash; 26th March</span>
                  </p>
                  <p className="text-gray-700 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-maroon shrink-0" />
                    <span><span className="font-semibold text-maroon">Timings:</span> 1:30 PM &ndash; 6:00 PM</span>
                  </p>
                </div>
              </div>

              {/* Register Button */}
              <div className="pt-2 sm:pt-4 pb-2 sm:pb-0 text-center">
                <Button
                  asChild
                  className="bg-maroon hover:bg-maroon-dark text-cream w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg rounded-full"
                >
                  <a
                    href="https://forms.gle/bQW3Ws7RRCWJsnCe7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}
