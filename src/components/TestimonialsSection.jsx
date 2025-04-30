"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Heart, Smile } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    position: "CEO at Company",
    quote:
      "Ayush delivered exceptional work on our project. His attention to detail and problem-solving skills are remarkable.",
    avatar: "",
    emoji: "🚀",
  },
  {
    name: "Jane Smith",
    position: "CTO at Company",
    quote: "Ayush's team worked seamlessly, and the project exceeded our expectations. Highly recommended!",
    emoji: "🔥",
  },
  {
    name: "John Doe",
    position: "CEO at Company",
    quote:
      "Ayush delivered exceptional work on our project. His attention to detail and problem-solving skills are remarkable.",
    emoji: "✨",
  },
]

// Fun emoji reactions that users can click
const reactions = [
  { emoji: "❤️", label: "Love it" },
  { emoji: "👍", label: "Great" },
  { emoji: "🎉", label: "Celebrate" },
  { emoji: "🤩", label: "Amazing" },
  { emoji: "👏", label: "Applause" },
]

export default function Testimonials() {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState([]); // Add this line

  const handleSend = async () => {
    if (!message.trim()) return;
    
    setIsSending(true);
    try {
      // Add new message to the list
      setMessages(prev => [...prev, {
        name: "You",
        position: "Client",
        quote: message,
        emoji: "💬"
      }]);
      
      // Reset input after sending
      setMessage('');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-16 relative" id="testimonials">
      
      {/* Header */}
      <div className="relative text-center mb-16">
        <h2 className="text-4xl pb-2 font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
          What People Say <span className="inline-block animate-bounce">🗣️</span>
        </h2>
        <p className="text-lg text-gray-600">Hear what our happy customers have to say (they can't stop smiling! 😁)</p>
      </div>

      {/* Chat-style Testimonials */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl p-6 border-4 border-orange-300 relative overflow-hidden">
          {/* Chat app header */}
          <div className="flex items-center justify-between pb-4 border-b border-orange-200 mb-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="text-orange-500" />
              <span className="font-bold text-orange-600">HappyClient Chat</span>
            </div>
            <div className="flex gap-2">
              <span className="h-3 w-3 bg-red-500 rounded-full"></span>
              <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-6">
            {testimonials.concat(messages).map((testimonial, index) => (
              <TestimonialMessage key={index} testimonial={testimonial} index={index} />
            ))}
          </div>

          {/* Chat input */}
          <div className="mt-8 flex items-center gap-2 border-t border-orange-200 pt-4">
            <div className="bg-orange-100 rounded-full p-2 flex-shrink-0">
              <Smile className="text-orange-500 h-5 w-5" />
            </div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-orange-50 rounded-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Share your experience with Ayush..."
              disabled={isSending}
            />
            <button
              onClick={handleSend}
              className="bg-orange-500 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!message.trim() || isSending}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialMessage({ testimonial, index }) {
  const [activeReaction, setActiveReaction] = useState(null);
  const [reactionCount, setReactionCount] = useState(0); // Initialize to 0
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    // Set initial values after component mounts
    setReactionCount(Math.floor(Math.random() * 50) + 10);
    setTimestamp(new Date(Date.now() - Math.random() * 10000000000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }));
  }, []);

  const handleReaction = (emoji) => {
    if (activeReaction === emoji) {
      setActiveReaction(null)
      setReactionCount((prev) => prev - 1)
    } else {
      if (activeReaction) setReactionCount((prev) => prev - 1)
      setActiveReaction(emoji)
      setReactionCount((prev) => prev + 1)
    }
  }

  // Alternate message alignment for chat-like feel
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`flex ${isEven ? "justify-start" : "justify-end"} mb-8`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      <div className={`max-w-[80%] ${isEven ? "order-last ml-3" : "order-first mr-3"}`}>
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-white text-xl font-bold overflow-hidden">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{testimonial.emoji}</span>
          )}
        </div>
      </div>

      <div className={`relative ${isEven ? "mr-auto" : "ml-auto"}`}>
        {/* Message bubble */}
        <div
          className={`relative p-4 rounded-2xl shadow-md 
            ${
              isEven
                ? "bg-white border-2 border-orange-200 text-gray-700 rounded-tl-none"
                : "bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-tr-none"
            }`}
        >
          Quote
          <p className="mb-3 relative">
            {testimonial.quote}
          </p>

          {/* Name and position */}
          <div className="flex items-center justify-between mt-2">
            <div>
              <h4 className={`font-bold ${!isEven && "text-white"}`}>{testimonial.name}</h4>
              <p className={`text-sm ${isEven ? "text-gray-500" : "text-orange-100"}`}>{testimonial.position}</p>
            </div>
            <div className={`text-2xl ${isEven ? "" : "text-orange-100"}`}>{testimonial.emoji}</div>
          </div>

          {/* Timestamp */}
          <div className={`text-xs mt-2 ${isEven ? "text-gray-400" : "text-orange-100"}`}>
            {timestamp}
          </div>

          {/* Reactions */}
          <div className="mt-3 flex flex-wrap gap-2">
            {reactions.map((reaction) => (
              <button
                key={reaction.emoji}
                onClick={() => handleReaction(reaction.emoji)}
                className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 transition-all
                  ${
                    activeReaction === reaction.emoji
                      ? "bg-orange-500 text-white scale-110"
                      : isEven
                        ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                        : "bg-orange-600 text-white hover:bg-orange-700"
                  }`}
              >
                <span>{reaction.emoji}</span>
                <span>{reaction.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Reaction counter */}
        <motion.div
          className={`absolute ${isEven ? "-right-2 -bottom-2" : "-left-2 -bottom-2"} 
            bg-white rounded-full shadow-md px-2 py-1 text-xs font-medium flex items-center gap-1
            border border-orange-200 text-orange-600`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Heart className="h-3 w-3 fill-orange-500 text-orange-500" />
          <span>{reactionCount}</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
