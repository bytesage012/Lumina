import React, { useState, useEffect, useRef } from "react";
import {
  Smartphone,
  Zap,
  Shield,
  BarChart3,
  Users,
  Globe,
  Star,
  ChevronRight,
  Menu,
  X,
  Quote,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  // Mock data
  const appData = {
    name: "Lumina",
    tagline: "The future of productivity, reimagined",
    description:
      "Transform how you work with our AI-powered mobile app that adapts to your workflow and boosts your efficiency by 3x.",
    features: [
      {
        icon: Zap,
        title: "Lightning Fast",
        description:
          "Experience blazing performance with our optimized architecture",
      },
      {
        icon: Shield,
        title: "Secure & Private",
        description: "Enterprise-grade security with end-to-end encryption",
      },
      {
        icon: BarChart3,
        title: "Smart Analytics",
        description: "Get insights into your productivity patterns and habits",
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description: "Seamlessly work with your team in real-time",
      },
      {
        icon: Globe,
        title: "Cross-Platform",
        description: "Sync across all your devices instantly",
      },
      {
        icon: Smartphone,
        title: "Mobile First",
        description: "Designed specifically for mobile productivity",
      },
    ],
    testimonials: [
      {
        name: "Sarah Chen",
        role: "Product Manager",
        company: "TechFlow",
        content:
          "This app completely transformed how our team collaborates. We've seen a 40% increase in productivity since switching.",
        rating: 5,
      },
      {
        name: "Marcus Rodriguez",
        role: "Freelance Designer",
        company: "Self-Employed",
        content:
          "The intuitive interface and powerful features make this the only app I need for my daily workflow. Absolutely brilliant!",
        rating: 5,
      },
      {
        name: "Jessica Kim",
        role: "Startup Founder",
        company: "Nova Labs",
        content:
          "Finally, an app that understands what mobile professionals actually need. The analytics alone are worth the price.",
        rating: 4,
      },
    ],
    appStores: [
      { name: "App Store", bg: "bg-black", text: "text-white" },
      { name: "Google Play", bg: "bg-gray-900", text: "text-white" },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === appData.testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAFAFA] via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                {appData.name}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Features", "Testimonials"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Download Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {["Features", "Testimonials"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-purple-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold">
                  Download Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                    {appData.name}
                  </span>
                  <br />
                  <span className="text-gray-900">{appData.tagline}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {appData.description}
                </p>
              </div>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row gap-4">
                {appData.appStores.map((store, index) => (
                  <button
                    key={store.name}
                    className={`${store.bg} ${store.text} px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <div className="text-left">
                      <div className="text-xs opacity-80">Download on</div>
                      <div className="text-lg">{store.name}</div>
                    </div>
                    <ChevronRight size={20} />
                  </button>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { value: "4.9", label: "App Store" },
                  { value: "50K+", label: "Downloads" },
                  { value: "98%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                {/* Device Mockup */}
                <div className="bg-gray-800 rounded-[3rem] p-6 shadow-2xl mx-auto w-80">
                  <div className="bg-black rounded-2xl aspect-[9/19] relative overflow-hidden">
                    {/* App Interface Preview */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/20 backdrop-blur-sm">
                      <div className="p-6 space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                          <div className="w-20 h-4 bg-white/20 rounded-full backdrop-blur-sm"></div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <div className="w-3/4 h-6 bg-white/30 rounded-full backdrop-blur-sm"></div>
                          <div className="w-full h-4 bg-white/20 rounded-full backdrop-blur-sm"></div>
                          <div className="w-5/6 h-4 bg-white/20 rounded-full backdrop-blur-sm"></div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 pt-8">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="bg-white/10 rounded-xl p-3 backdrop-blur-sm"
                            >
                              <div className="w-6 h-6 bg-white/30 rounded-lg mx-auto mb-2"></div>
                              <div className="w-full h-3 bg-white/20 rounded-full"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to supercharge your productivity and
              collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appData.features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-purple-200/50"
              >
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-purple-50/30 rounded-3xl backdrop-blur-sm"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our users are saying about their experience with{" "}
              {appData.name}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative h-96">
              {appData.testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`absolute inset-0 transition-all duration-500 transform ${
                    index === activeTestimonial
                      ? "opacity-100 translate-x-0"
                      : index < activeTestimonial
                        ? "opacity-0 -translate-x-8"
                        : "opacity-0 translate-x-8"
                  }`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
                    <Quote className="text-purple-600/20 mb-4" size={48} />

                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-3 mt-8">
              {appData.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-purple-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using {appData.name}{" "}
            to achieve more in less time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {appData.appStores.map((store, index) => (
              <button
                key={store.name}
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on</div>
                  <div className="text-lg">{store.name}</div>
                </div>
                <ChevronRight size={20} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="text-white" size={20} />
                </div>
                <span className="text-xl font-extrabold text-white">
                  {appData.name}
                </span>
              </div>
              <p className="text-gray-400">
                The future of productivity, reimagined for mobile professionals.
              </p>
            </div>

            {/* Links */}
            {["Product", "Company", "Resources", "Legal"].map((category) => (
              <div key={category}>
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-2">
                  {["Link One", "Link Two", "Link Three", "Link Four"].map(
                    (link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 {appData.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
