"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrinketPreview } from "@/components/dashboard/trinket-preview";
import {
  FileCode,
  Search,
  Eye,
  MessageSquare,
  Clock,
  CheckCircle,
  Award,
  Loader2,
  RefreshCw,
  Filter,
} from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

interface Submission {
  id: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  lessonId: string;
  lessonTitle: string;
  lessonOrderIndex: number;
  trinketUrl: string;
  status: "submitted" | "reviewed" | "graded";
  feedback: string | null;
  grade: string | null;
  reviewedAt: string | null;
  submittedAt: string;
}

interface Lesson {
  id: string;
  title: string;
  order_index: number;
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "graded":
      return (
        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
          <Award className="h-3 w-3 mr-1" />
          Graded
        </Badge>
      );
    case "reviewed":
      return (
        <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
          <MessageSquare className="h-3 w-3 mr-1" />
          Reviewed
        </Badge>
      );
    default:
      return (
        <Badge variant="secondary">
          <Clock className="h-3 w-3 mr-1" />
          Pending
        </Badge>
      );
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const SubmissionsTab = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLesson, setFilterLesson] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [grade, setGrade] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const fetchSubmissions = async () => {
    setIsLoading(true);
    try {
      const supabase = getSupabaseBrowserClient();

      // Fetch all submissions with student and lesson info
      const { data, error } = await supabase
        .from("trinket_submissions")
        .select(
          `
          id,
          student_id,
          lesson_id,
          trinket_url,
          status,
          feedback,
          grade,
          reviewed_at,
          submitted_at,
          profiles!trinket_submissions_student_id_fkey (
            full_name,
            email
          ),
          lessons (
            id,
            title,
            order_index
          )
        `
        )
        .order("submitted_at", { ascending: false });

      if (error) throw error;

      const transformedSubmissions: Submission[] = (data || []).map(
        (sub: any) => ({
          id: sub.id,
          studentId: sub.student_id,
          studentName: sub.profiles?.full_name || "Unknown Student",
          studentEmail: sub.profiles?.email || "",
          lessonId: sub.lesson_id,
          lessonTitle: sub.lessons?.title || "Unknown Lesson",
          lessonOrderIndex: sub.lessons?.order_index || 0,
          trinketUrl: sub.trinket_url,
          status: sub.status,
          feedback: sub.feedback,
          grade: sub.grade,
          reviewedAt: sub.reviewed_at,
          submittedAt: sub.submitted_at,
        })
      );

      setSubmissions(transformedSubmissions);

      // Fetch lessons for filter dropdown
      const { data: lessonsData } = await supabase
        .from("lessons")
        .select("id, title, order_index")
        .order("order_index", { ascending: true });

      setLessons(lessonsData || []);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleOpenReview = (submission: Submission) => {
    setSelectedSubmission(submission);
    setFeedback(submission.feedback || "");
    setGrade(submission.grade || "");
    setIsReviewOpen(true);
  };

  const handleSaveFeedback = async () => {
    if (!selectedSubmission) return;

    setIsSaving(true);
    try {
      const supabase = getSupabaseBrowserClient();
      const { data: { user } } = await supabase.auth.getUser();

      const newStatus = grade ? "graded" : feedback ? "reviewed" : "submitted";

      const { error } = await supabase
        .from("trinket_submissions")
        .update({
          feedback: feedback || null,
          grade: grade || null,
          status: newStatus,
          reviewed_by: user?.id,
          reviewed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", selectedSubmission.id);

      if (error) throw error;

      // Refresh submissions
      await fetchSubmissions();
      setIsReviewOpen(false);
    } catch (error) {
      console.error("Error saving feedback:", error);
    } finally {
      setIsSaving(false);
    }
  };

  // Filter submissions
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch =
      searchTerm === "" ||
      sub.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.studentEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.lessonTitle.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLesson =
      filterLesson === "all" || sub.lessonId === filterLesson;

    const matchesStatus =
      filterStatus === "all" || sub.status === filterStatus;

    return matchesSearch && matchesLesson && matchesStatus;
  });

  // Stats
  const pendingCount = submissions.filter((s) => s.status === "submitted").length;
  const reviewedCount = submissions.filter((s) => s.status === "reviewed").length;
  const gradedCount = submissions.filter((s) => s.status === "graded").length;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">Student Submissions</h3>
        <Button variant="outline" onClick={fetchSubmissions} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Review</p>
                <p className="text-2xl font-bold text-orange-600">{pendingCount}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Reviewed</p>
                <p className="text-2xl font-bold text-blue-600">{reviewedCount}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Graded</p>
                <p className="text-2xl font-bold text-green-600">{gradedCount}</p>
              </div>
              <Award className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by student name or lesson..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <Select value={filterLesson} onValueChange={setFilterLesson}>
              <SelectTrigger className="w-[200px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by lesson" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Lessons</SelectItem>
                {lessons.map((lesson) => (
                  <SelectItem key={lesson.id} value={lesson.id}>
                    {lesson.order_index}. {lesson.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="submitted">Pending</SelectItem>
                <SelectItem value="reviewed">Reviewed</SelectItem>
                <SelectItem value="graded">Graded</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Submissions List */}
      <Card>
        <CardHeader>
          <CardTitle>All Submissions</CardTitle>
          <CardDescription>
            {filteredSubmissions.length} submission
            {filteredSubmissions.length !== 1 ? "s" : ""} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <FileCode className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No submissions found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredSubmissions.map((submission) => (
                <div
                  key={submission.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{submission.studentName}</h4>
                      {getStatusBadge(submission.status)}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {submission.studentEmail}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {submission.lessonTitle}
                      </span>
                      <span>•</span>
                      <span>{formatDate(submission.submittedAt)}</span>
                      {submission.grade && (
                        <>
                          <span>•</span>
                          <span className="font-medium text-green-600">
                            Grade: {submission.grade}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenReview(submission)}
                    className="gap-2 ml-4"
                  >
                    <Eye className="h-4 w-4" />
                    Review
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Review Dialog */}
      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Review Submission</DialogTitle>
            <DialogDescription>
              {selectedSubmission?.studentName} • {selectedSubmission?.lessonTitle}
            </DialogDescription>
          </DialogHeader>

          {selectedSubmission && (
            <div className="space-y-6">
              {/* Student Info */}
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">{selectedSubmission.studentName}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedSubmission.studentEmail}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Submitted</p>
                  <p className="text-sm font-medium">
                    {formatDate(selectedSubmission.submittedAt)}
                  </p>
                </div>
              </div>

              {/* Trinket Preview */}
              <TrinketPreview
                trinketUrl={selectedSubmission.trinketUrl}
                title="Student Code"
              />

              {/* Feedback Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="feedback">Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Write your feedback for the student..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                  />
                  <p className="text-xs text-muted-foreground">
                    Provide constructive feedback to help the student improve
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Grade (optional)</Label>
                  <Input
                    id="grade"
                    placeholder="e.g., A, B+, 95, Complete"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="max-w-[200px]"
                  />
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsReviewOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveFeedback} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Save Feedback
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

