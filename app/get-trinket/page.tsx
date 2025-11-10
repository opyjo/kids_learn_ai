import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MainLayout } from "@/components/layouts/main-layout";

const GetTrinketPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50">
        <main className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🌐 Online Coding
            </div>
            <h1 className="text-5xl font-bold mb-4 text-balance">
              Get Started with Trinket.io
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Trinket is a free online platform where you can write and run
              Python code right in your web browser. No downloads needed!
            </p>
          </div>

          {/* What is Trinket */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-green-50 to-blue-50 border-2">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🎯</div>
              <div>
                <h2 className="text-2xl font-bold mb-3">What is Trinket.io?</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Trinket.io is an amazing online tool that lets you code Python
                  directly in your web browser! It's perfect for students
                  because you can code from any computer with internet access -
                  at school, home, or the library.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-2xl mb-2">🌐</div>
                    <div className="font-semibold mb-1">Code Anywhere</div>
                    <div className="text-sm text-gray-600">
                      No installation needed - just open your browser
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-2xl mb-2">💾</div>
                    <div className="font-semibold mb-1">Save Your Work</div>
                    <div className="text-sm text-gray-600">
                      Keep all your projects in one place
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="font-semibold mb-1">Graphics & Turtle</div>
                    <div className="text-sm text-gray-600">
                      Create amazing drawings and games
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Why Use Trinket */}
          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Use Trinket for Our Lessons?
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="text-3xl">✨</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Perfect for Beginners
                  </h3>
                  <p className="text-gray-700">
                    Some of our advanced lessons use special Python libraries
                    for graphics and interactive projects that work best in
                    Trinket.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl">🎮</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Make Cool Projects</h3>
                  <p className="text-gray-700">
                    Create games, animations, and interactive art with Python's
                    Turtle graphics and other fun libraries.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-3xl">🔗</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Share Your Work</h3>
                  <p className="text-gray-700">
                    Easily share your projects with friends, family, and
                    teachers with a simple link.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* How to Create Account */}
          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              How to Create Your Trinket Account
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Visit Trinket.io</h3>
                  <p className="text-gray-700 mb-3">
                    Open your web browser and go to{" "}
                    <a
                      href="https://trinket.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-semibold underline"
                    >
                      trinket.io
                    </a>
                  </p>
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <a
                      href="https://trinket.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Go to Trinket.io →
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Click "Sign Up"</h3>
                  <p className="text-gray-700">
                    Look for the "Sign Up" button in the top right corner of the
                    website. Click it to start creating your account.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Fill in Your Information
                  </h3>
                  <p className="text-gray-700">You'll need to provide:</p>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1 ml-4">
                    <li>A username (this can be anything you like!)</li>
                    <li>Your email address</li>
                    <li>A password (make it strong and memorable)</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    <strong>Important:</strong> Ask your parent or guardian to
                    help you with this step, especially if you're under 13!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Verify Your Email</h3>
                  <p className="text-gray-700">
                    Check your email inbox for a message from Trinket. Click the
                    verification link to activate your account.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Start Coding!</h3>
                  <p className="text-gray-700">
                    Once your account is set up, you're ready to start creating
                    amazing Python projects! When you see a lesson that uses
                    Trinket, just click the embedded editor to start coding.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Free vs Paid */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-purple-50 border-2">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h2 className="text-2xl font-bold mb-3">Is Trinket Free?</h2>
              <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
                <strong>Yes!</strong> Trinket has a free account that works
                perfectly for all our lessons. You can write and run Python
                code, save your projects, and share them with others.
              </p>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                They also offer a paid version with extra features, but you
                don't need it for our courses. The free account has everything
                you need to learn and create!
              </p>
            </div>
          </Card>

          {/* Tips Section */}
          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Tips for Using Trinket
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3 items-start">
                <div className="text-2xl">💡</div>
                <div>
                  <h3 className="font-bold mb-1">Save Your Work Often</h3>
                  <p className="text-sm text-gray-600">
                    Make sure to save your projects regularly so you don't lose
                    your progress!
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-2xl">🔒</div>
                <div>
                  <h3 className="font-bold mb-1">Remember Your Password</h3>
                  <p className="text-sm text-gray-600">
                    Write down your password somewhere safe or ask a parent to
                    help you remember it.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-2xl">📱</div>
                <div>
                  <h3 className="font-bold mb-1">Works on Any Device</h3>
                  <p className="text-sm text-gray-600">
                    Trinket works on computers, tablets, and even phones! Code
                    wherever you are.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="text-2xl">🎨</div>
                <div>
                  <h3 className="font-bold mb-1">Explore and Experiment</h3>
                  <p className="text-sm text-gray-600">
                    Try changing the code to see what happens. That's the best
                    way to learn!
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
                If you're having trouble creating your Trinket account or using
                the platform, don't worry! Ask a parent, teacher, or guardian to
                help you. You can also check out Trinket's help center for
                guides and tutorials.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="outline" asChild>
                  <a
                    href="https://trinket.io/help"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Trinket Help Center
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/faq">Check Our FAQ</Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* What's Next */}
          <Card className="p-8 bg-gradient-to-br from-green-600 to-blue-600 text-white">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Coding?
              </h2>
              <p className="text-lg mb-6 text-green-50 max-w-2xl mx-auto">
                Now that you know how to set up your Trinket account, you're
                ready to tackle our advanced Python lessons! Create games, draw
                amazing graphics, and build interactive projects.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50"
                >
                  <Link href="/lessons?course=python-foundations">
                    Browse Lessons
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </Card>
        </main>
      </div>
    </MainLayout>
  );
};

export default GetTrinketPage;
