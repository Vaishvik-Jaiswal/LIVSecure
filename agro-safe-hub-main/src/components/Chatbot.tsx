import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  MessageCircle,
  Send,
  X,
  Bot,
  User,
  Loader2,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const genAI = new GoogleGenerativeAI('AIzaSyA12owZ-1Ai2kUUzWhD-SaWjsBO12H2pKg');
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const chat = model.startChat({
        history: messages.slice(-10).map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        })),
      });

      const result = await chat.sendMessage(inputMessage);
      const response = await result.response;
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text(),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      console.log('Error details:', error);

      // Fallback mock responses for when API fails
      const mockResponses = [
        "I understand you're asking about livestock farming. While I'm experiencing some technical difficulties with the AI service right now, I can provide general guidance. Common topics include:\n\n• Animal health monitoring\n• Nutrition and feeding\n• Disease prevention\n• Breeding programs\n• Farm biosecurity\n\nCould you be more specific about what you'd like to know?",
        "I'm currently having connectivity issues with the AI service, but I can still help with farming questions! Here are some general tips:\n\n• Regular health checks are essential\n• Proper nutrition prevents many diseases\n• Clean water is crucial for livestock\n• Vaccination schedules should be followed\n\nWhat specific aspect of farming would you like guidance on?",
        "The AI service is temporarily unavailable, but I can provide general livestock farming advice:\n\n• Monitor animal behavior daily\n• Ensure proper ventilation in housing\n• Maintain hygiene to prevent disease spread\n• Keep detailed records of health and nutrition\n\nWhat specific question do you have about your livestock?"
      ];

      let errorText = mockResponses[Math.floor(Math.random() * mockResponses.length)];

      if (error instanceof Error) {
        if (error.message.includes('API_KEY')) {
          errorText = 'API key error. Please check the API key configuration.';
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorText = 'Network error. Please check your internet connection and try again.';
        } else if (error.message.includes('quota') || error.message.includes('limit')) {
          errorText = 'API quota exceeded. Please try again later.';
        }
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  const testChatbot = async () => {
    setIsLoading(true);
    try {
      const testMessage = "Hello, can you help me with livestock farming?";
      const result = await model.generateContent(testMessage);
      const response = await result.response;
      const botMessage: Message = {
        id: Date.now().toString(),
        text: response.text(),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([botMessage]);
    } catch (error) {
      console.error('Test error:', error);

      // Fallback mock response for testing
      const mockResponses = [
        "Hello! I'm here to help you with livestock farming. I can provide guidance on animal health, nutrition, breeding, and farm management. What specific question do you have?",
        "I can help you with various aspects of livestock management including disease prevention, feeding schedules, vaccination programs, and biosecurity measures. What would you like to know?",
        "As your AI farming assistant, I can provide information about cattle, poultry, pigs, and other livestock. I can help with health monitoring, nutrition planning, and farm optimization. How can I assist you today?"
      ];

      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const botMessage: Message = {
        id: Date.now().toString(),
        text: `${randomResponse}\n\n(Note: This is a mock response. The actual AI service may have connectivity issues.)`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg hover-lift-advanced animate-pulse-slow bg-gradient-to-r from-primary to-primary/80"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Badge className="absolute -top-2 -right-2 bg-success text-white text-xs px-2 py-1 rounded-full animate-bounce">
          AI
        </Badge>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
    }`}>
      <Card className="h-full shadow-2xl border-2 border-primary/20 bg-background/95 backdrop-blur-sm animate-fade-in">
        <CardHeader className="pb-3 border-b bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {t('chatbot.title')}
              </span>
            </CardTitle>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0 hover:bg-primary/10"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-destructive/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {t('chatbot.subtitle')}
          </p>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="p-0 flex-1 flex flex-col">
              <ScrollArea className="flex-1 p-4 h-[400px]">
                <div className="space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">{t('chatbot.welcomeMessage')}</p>
                      <p className="text-xs mt-2">{t('chatbot.helpText')}</p>
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {message.sender === 'bot' && (
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted border border-border'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                        {message.sender === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted border border-border p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm">{t('chatbot.typing')}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              <div className="p-4 border-t bg-background/50">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t('chatbot.placeholder')}
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    size="sm"
                    className="px-3"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearChat}
                      className="text-xs text-muted-foreground hover:text-destructive"
                    >
                      {t('chatbot.clearChat')}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={testChatbot}
                      className="text-xs text-blue-600 hover:text-blue-700"
                      disabled={isLoading}
                    >
                      Test AI
                    </Button>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {t('chatbot.poweredBy')}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default Chatbot;