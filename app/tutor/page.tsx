import { ChatInterface } from "@/components/chat/chat-interface";
import { MainLayout } from "@/components/layouts/main-layout";

export const metadata = {
  title: "AI Tutor - BrightByte | KidsLearn AI",
  description:
    "Get personalized Python programming help from BrightByte, your friendly AI tutor.",
};

const TutorPage = () => {
  return (
    <MainLayout>
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col items-center justify-center gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold sm:text-4xl">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Meet BrightByte 🐍
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            Your personal Python programming tutor! Ask questions, get help
            debugging, or learn new concepts. BrightByte is here to guide you on
            your coding journey.
          </p>
        </div>

        <ChatInterface />
      </div>
    </MainLayout>
  );
};

export default TutorPage;
