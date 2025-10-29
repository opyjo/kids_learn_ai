"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PythonEditor } from "@/components/code/python-editor";
import { Save, Eye, AlertCircle } from "lucide-react";

interface LessonData {
  title: string;
  description: string;
  content: string;
  difficulty: string;
  orderIndex: number;
  isPremium: boolean;
  starterCode: string;
  solutionCode: string;
}

export function LessonEditor() {
  const [lesson, setLesson] = useState<LessonData>({
    title: "",
    description: "",
    content: "",
    difficulty: "beginner",
    orderIndex: 1,
    isPremium: false,
    starterCode: "# Write your Python code here\n",
    solutionCode: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setSaving(true);
    setError("");

    try {
      // Validate required fields
      if (!lesson.title || !lesson.description || !lesson.content) {
        throw new Error("Please fill in all required fields");
      }

      console.log("[v0] Saving lesson:", lesson);

      // TODO: Replace with actual API call to save lesson
      const response = await fetch("/api/admin/lessons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lesson),
      });

      if (!response.ok) {
        throw new Error("Failed to save lesson");
      }

      // Success - could redirect or show success message
      console.log("[v0] Lesson saved successfully");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setSaving(false);
    }
  };

  const handlePreview = () => {
    // Open preview in new tab
    const previewData = encodeURIComponent(JSON.stringify(lesson));
    window.open(`/admin/lessons/preview?data=${previewData}`, "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create New Lesson
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Design an engaging Python lesson for students
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Lesson
              </>
            )}
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="basic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        {/* Basic Info Tab */}
        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Details</CardTitle>
              <CardDescription>
                Basic information about the lesson
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Lesson Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Hello, Python!"
                    value={lesson.title}
                    onChange={(e) =>
                      setLesson({ ...lesson, title: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="orderIndex">Order Index</Label>
                  <Input
                    id="orderIndex"
                    type="number"
                    min="1"
                    value={lesson.orderIndex}
                    onChange={(e) =>
                      setLesson({
                        ...lesson,
                        orderIndex: Number.parseInt(e.target.value),
                      })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Brief description of what students will learn..."
                  value={lesson.description}
                  onChange={(e) =>
                    setLesson({ ...lesson, description: e.target.value })
                  }
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select
                    value={lesson.difficulty}
                    onValueChange={(value) =>
                      setLesson({ ...lesson, difficulty: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="premium"
                    checked={lesson.isPremium}
                    onCheckedChange={(checked) =>
                      setLesson({ ...lesson, isPremium: checked })
                    }
                  />
                  <Label htmlFor="premium">Premium Lesson</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Tab */}
        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Content</CardTitle>
              <CardDescription>
                Write the lesson content in Markdown format
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="content">Content (Markdown) *</Label>
                <Textarea
                  id="content"
                  placeholder="# Welcome to Python!

                    In this lesson, you'll learn...

                    ## Your Task
                    Write a program that...

                    ## Example
                    ```python
                    print('Hello, World!')
                    ```"
                  value={lesson.content}
                  onChange={(e) =>
                    setLesson({ ...lesson, content: e.target.value })
                  }
                  rows={20}
                  className="font-mono text-sm"
                />
              </div>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-medium mb-2">Markdown Tips:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Use # for main headings, ## for subheadings</li>
                  <li>• Wrap code in `backticks` for inline code</li>
                  <li>• Use ```python for code blocks</li>
                  <li>• Use **bold** and *italic* for emphasis</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Code Tab */}
        <TabsContent value="code">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Starter Code</CardTitle>
                <CardDescription>
                  Initial code that students will see
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <PythonEditor
                  initialCode={lesson.starterCode}
                  onCodeChange={(code) =>
                    setLesson({ ...lesson, starterCode: code })
                  }
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Solution Code</CardTitle>
                <CardDescription>
                  Expected solution (for reference)
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <PythonEditor
                  initialCode={lesson.solutionCode}
                  onCodeChange={(code) =>
                    setLesson({ ...lesson, solutionCode: code })
                  }
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
