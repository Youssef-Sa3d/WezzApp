"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

function ChatBox() {
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [errors, setErrors] = useState<{ phone?: string; message?: string }>({});
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    const newErrors: { phone?: string; message?: string } = {};
    
    if (!receiver.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(receiver.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSending(true);
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Add reply message
    const replyMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: "We apologize, but we're currently working on technical features and cannot send messages at this time. Please check back later! 🙏",
      isUser: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, replyMessage]);
    setIsSending(false);
  };

  return (
    <>
      <main className="flex-1 whatsapp-card p-6 flex flex-col justify-between">
        {/* Receiver Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">
            Receiver Phone Number
          </label>
          <input
            type="tel"
            placeholder="+201xxxxxxxxx"
            value={receiver}
            onChange={(e) => {
              setReceiver(e.target.value);
              if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
            }}
            className={`whatsapp-input w-full ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
          />
          {errors.phone && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors.phone}
            </motion.p>
          )}
        </div>

        {/* Message Box */}
        <div className="flex-1 border border-[var(--border-color)] rounded-lg p-4 mb-4 overflow-y-auto bg-[var(--bg-secondary)]">
          {messages.length === 0 ? (
            <p className="text-center text-[var(--text-secondary)] mt-8">
              Start sending anonymous messages 🚀
            </p>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.isUser
                          ? 'bg-[#25d366] text-white rounded-br-none'
                          : 'bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.isUser ? 'text-white/70' : 'text-[var(--text-secondary)]'
                      }`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isSending && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg rounded-bl-none px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-[var(--text-secondary)] rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-[var(--text-secondary)] rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-[var(--text-secondary)] rounded-full"
                        />
                      </div>
                      <span className="text-xs text-[var(--text-secondary)]">Typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="flex-1">
            <input
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
              }}
              placeholder="Type your message..."
              className={`whatsapp-input w-full ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.message}
              </motion.p>
            )}
          </div>
          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whatsapp-button disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Send"}
          </motion.button>
        </form>
      </main>
    </>
  );
}

export default ChatBox;
