
import React, { useState, useRef, FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DirectChatBox() {
  const [messages, setMessages] = useState<{ text: string; sentByUser: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setMessages(prev => [...prev, { text: input, sentByUser: true }]);
    setInput("");
    setSent(true);
    setTimeout(() => setSent(false), 2000);
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { text: "Thank you for reaching out! Our team will reply as soon as possible.", sentByUser: false },
      ]);
    }, 800);
  };

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="max-w-md mx-auto my-10 bg-white dark:bg-gray-800/60 rounded-xl shadow-lg glass-morphism p-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="text-webiify-blue" />
        <h4 className="font-bold text-lg">Start a Live Chat</h4>
      </div>
      {!chatOpen ? (
        <Button 
          variant="secondary" 
          className="w-full animate-fade-in" 
          onClick={() => setChatOpen(true)}
        >
          Start Chat
        </Button>
      ) : (
        <div>
          <div className="h-32 overflow-y-auto px-2 mb-2 border rounded bg-white/70 dark:bg-gray-900/50 transition-colors">
            {messages.length === 0 && (
              <p className="text-muted-foreground text-sm mt-6 text-center">No messages yet. Say hello!</p>
            )}
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`mb-1 flex ${msg.sentByUser ? "justify-end" : "justify-start"}`}
              >
                <span
                  className={
                    "px-3 py-2 rounded-lg inline-block max-w-[80%] " +
                    (msg.sentByUser
                      ? "bg-webiify-blue text-white animate-fade-in"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 animate-fade-in")
                  }
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>
          <form className="flex gap-2 mt-2" onSubmit={handleSend}>
            <input
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-webiify-purple transition"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus
            />
            <Button type="submit" variant="default" className="p-0 w-10 h-10" aria-label="Send">
              <Send className="w-5 h-5" />
            </Button>
          </form>
          {sent && (
            <div className="text-green-600 mt-1 animate-fade-in text-sm text-center">
              Message sent!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
