import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Menu, PencilIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";
import BotAIImage from "@/assets/bot.png";
import { useTranslations } from "use-intl";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  // Translations
  const t = useTranslations();

  // State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  void isLoading;
  void setIsLoading;

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  // Functions
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      const text = result.response.text();

      const newBotMessage: Message = {
        role: "assistant",
        content: text,
      };

      setMessages((prev) => [...prev, newBotMessage]);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInput(event.target.value);
  }

  return (
    <div className="font-baloo">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 z-50"
        >
          {!isChatOpen && (
            <div className="w-[200px] cursor-pointer rounded-xl p-2" onClick={toggleChat}>
              <img src={BotAIImage} alt="AI Bot" className="mx-auto mb-2" />

              <h1 className="text-center bg-flame-orange-500 text-white rounded-full py-2 px-4 font-bold shadow-[0_0_15px_#FF5E00] transition-transform hover:scale-105">
                {t("hey-ask-me")}
              </h1>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="fixed -bottom-5 -right-5 z-50 w-[95%] md:w-[500px]"
          >
            <div className="w-[200px] mx-auto cursor-pointer rounded-xl p-2" onClick={toggleChat}>
              <img src={BotAIImage} alt="AI Bot" className="mx-auto mb-2" />

              <h1 className="text-center bg-[#FF5E00] text-white rounded-full py-2 px-4 font-bold shadow-[0_0_15px_#FF5E00] transition-transform hover:scale-105">
                {t("tap-to-close")}
              </h1>
            </div>{" "}
            <Card className="m-10 mt-1 chat-image font-baloo">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-lg font-bold text-white">{t("smart-coach")}</CardTitle>
                <Button onClick={toggleChat} size="sm" variant="ghost" className="px-2 py-0">
                  <Menu className="size-10 text-flame-orange-500" />
                  <span className="sr-only">{t("close-chat")}</span>
                </Button>
              </CardHeader>

              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  {messages.length === 0 && (
                    <div className="w-full mt-32 text-gray-500 items-center justify-center flex gap-3">
                      {t("no-messages-yet")}.
                    </div>
                  )}
                  {messages.map((message, index) => {
                    return (
                      <div
                        key={index}
                        className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}
                      >
                        <div
                          className={`inline-block rounded-lg px-4 py-2 ${
                            message.role === "user"
                              ? "bg-flame-orange-400 text-white"
                              : "bg-[#00000040] text-white"
                          }`}
                        >
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({ children }) => <p className="mb-0">{children}</p>,
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      </div>
                    );
                  })}
                </ScrollArea>
              </CardContent>

              <CardFooter>
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="relative">
                    {/* Icon */}
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PencilIcon className="h-5 w-5 text-orange-500" />
                    </div>

                    {/* Input */}
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      className="w-full pl-10 bg-inherit placeholder:text-white text-white" // Add padding-left for icon space
                      placeholder={t("ask-me-anything")}
                    />
                  </div>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
