import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MainLayout } from "@/components/layouts/main-layout";

const GetThonnyPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-500/5 via-sky-500/5 to-orange-500/5 dark:from-blue-600/8 dark:via-sky-600/8 dark:to-orange-600/8">
        <main className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🚀 Get Started
            </div>
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Download Thonny
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Thonny is a beginner-friendly Python editor that makes coding fun
              and easy. Let's get it installed on your computer!
            </p>
          </div>

          {/* What is Thonny */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-purple-50 border-2">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🐍</div>
              <div>
                <h2 className="text-2xl font-bold mb-3">What is Thonny?</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Thonny is a special program that lets you write and run Python
                  code on your computer. It's designed just for beginners like
                  you, with helpful features that make learning to code easier
                  and more fun!
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-2xl mb-2">✨</div>
                    <div className="font-semibold mb-1">Easy to Use</div>
                    <div className="text-sm text-gray-600">
                      Simple interface perfect for beginners
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-2xl mb-2">🔍</div>
                    <div className="font-semibold mb-1">See Your Code Work</div>
                    <div className="text-sm text-gray-600">
                      Watch your code run step by step
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-2xl mb-2">💡</div>
                    <div className="font-semibold mb-1">Helpful Tips</div>
                    <div className="text-sm text-gray-600">
                      Get suggestions as you type
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Download Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              Choose Your Computer Type
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Windows */}
              <Card className="p-6 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-5xl mb-4">🪟</div>
                  <h3 className="text-xl font-bold mb-2">Windows</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    For Windows 10 or 11
                  </p>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <a
                      href="https://github.com/thonny/thonny/releases/latest/download/thonny-windows.exe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download for Windows
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Mac */}
              <Card className="p-6 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-5xl mb-4">🍎</div>
                  <h3 className="text-xl font-bold mb-2">Mac</h3>
                  <p className="text-gray-600 text-sm mb-6">For macOS</p>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <a
                      href="https://github.com/thonny/thonny/releases/latest/download/thonny-macos.pkg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download for Mac
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Linux */}
              <Card className="p-6 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-5xl mb-4">🐧</div>
                  <h3 className="text-xl font-bold mb-2">Linux</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    For Linux systems
                  </p>
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <a
                      href="https://thonny.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Thonny.org
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Installation Steps */}
          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              How to Install
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Download the File</h3>
                  <p className="text-gray-700">
                    Click the download button for your computer type above. The
                    file will save to your Downloads folder.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Find the Downloaded File
                  </h3>
                  <p className="text-gray-700">
                    Open your Downloads folder and look for the Thonny installer
                    file. It will have a name like "thonny-windows.exe" or
                    "thonny-macos.pkg".
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Run the Installer</h3>
                  <p className="text-gray-700">
                    Double-click the file to start installing. You might need to
                    ask a parent or teacher to help with this step!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Follow the Instructions
                  </h3>
                  <p className="text-gray-700">
                    Click "Next" or "Continue" when the installer asks. The
                    default settings work great for most people!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Start Coding!</h3>
                  <p className="text-gray-700">
                    Once installed, open Thonny from your applications or start
                    menu. You're ready to start building amazing projects!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Need Help Section */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-orange-50 to-pink-50 border-2">
            <div className="text-center">
              <div className="text-4xl mb-4">🤔</div>
              <h2 className="text-2xl font-bold mb-3">Need Help?</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                If you're having trouble installing Thonny, ask a parent,
                teacher, or guardian to help you. They can also visit the
                official Thonny website for more detailed instructions.
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://thonny.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Thonny.org for More Help
                </a>
              </Button>
            </div>
          </Card>

          {/* What's Next */}
          <Card className="p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold mb-4">What's Next?</h2>
              <p className="text-lg mb-6 text-blue-50 max-w-2xl mx-auto">
                Now that you have Thonny installed, you're ready to start
                building amazing projects! Head back to our lessons to learn
                Python and create cool games, apps, and more.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <Link href="/">Back to Home</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/signup">Start Learning</Link>
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </MainLayout>
  );
};

export default GetThonnyPage;
