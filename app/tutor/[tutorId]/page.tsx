"use client";

import { GripVertical } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { getInitialMessage } from "@/components/chat/chat-data";
import {
	ChatInterface,
	type ChatInterfaceRef,
} from "@/components/chat/chat-interface";
import { PythonEditor } from "@/components/code/python-editor";
import { TutorWorkspaceShell } from "@/components/tutor/tutor-workspace-shell";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useTutorThreads } from "@/hooks/use-tutor-threads";
import {
	DEFAULT_TUTOR_ID,
	getTutorById,
	type TutorId,
} from "@/lib/constants/tutor-characters";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const LARGE_WORKSPACE_QUERY = "(min-width: 1536px)";

const TutorChatPage = () => {
	const params = useParams();
	const router = useRouter();
	const rawTutorId = params?.tutorId;
	const parsedTutorId = (
		Array.isArray(rawTutorId) ? rawTutorId[0] : rawTutorId
	) as TutorId | undefined;
	const tutorId = parsedTutorId ?? DEFAULT_TUTOR_ID;
	const tutor = getTutorById(DEFAULT_TUTOR_ID);

	const [isCheckingAccess, setIsCheckingAccess] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [code, setCode] = useState("");
	const [isEditorOpen, setIsEditorOpen] = useState(false);
	const [isLargeWorkspace, setIsLargeWorkspace] = useState(false);
	const chatInterfaceRef = useRef<ChatInterfaceRef | null>(null);

	const {
		activeThread,
		isHydrated,
		createNewThread,
		updateActiveMessages,
		clearActiveThread,
	} = useTutorThreads(DEFAULT_TUTOR_ID);

	const activeMessages = useMemo(
		() => activeThread?.messages ?? [getInitialMessage(tutor)],
		[activeThread, tutor],
	);

	useEffect(() => {
		const checkAuth = async () => {
			const supabase = getSupabaseBrowserClient();
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (!user) {
				router.push("/login");
				return;
			}

			setIsAuthenticated(true);
			setIsCheckingAccess(false);
		};

		checkAuth();
	}, [router]);

	useEffect(() => {
		if (tutorId !== DEFAULT_TUTOR_ID) {
			router.push(`/tutor/${DEFAULT_TUTOR_ID}`);
		}
	}, [tutorId, router]);

	useEffect(() => {
		const mediaQuery = window.matchMedia(LARGE_WORKSPACE_QUERY);
		const syncLayout = (event: MediaQueryListEvent | MediaQueryList) => {
			setIsLargeWorkspace(event.matches);
		};

		syncLayout(mediaQuery);
		mediaQuery.addEventListener("change", syncLayout);
		return () => mediaQuery.removeEventListener("change", syncLayout);
	}, []);

	useEffect(() => {
		const savedCode = localStorage.getItem("tutor-playground-code");
		if (savedCode) {
			setCode(savedCode);
			return;
		}

		setCode(`# Welcome to the Python Playground!
# Write your code here and test it alongside your AI Tutor 🐍

print("Hello, ${tutor.name}!")

# Try some Python basics
name = "Coder"
print(f"Happy coding, {name}!")
`);
	}, [tutor.name]);

	useEffect(() => {
		const handleNewChatShortcut = (event: KeyboardEvent) => {
			if (
				(event.metaKey || event.ctrlKey) &&
				event.shiftKey &&
				event.key.toLowerCase() === "n"
			) {
				event.preventDefault();
				createNewThread();
			}
		};

		window.addEventListener("keydown", handleNewChatShortcut);
		return () => window.removeEventListener("keydown", handleNewChatShortcut);
	}, [createNewThread]);

	const handleCodeChange = (newCode: string) => {
		setCode(newCode);
		localStorage.setItem("tutor-playground-code", newCode);
	};

	const handleAskAboutCode = () => {
		if (!code.trim() || !chatInterfaceRef.current) return;
		const message = `Can you help me with this code?\n\n\`\`\`python\n${code}\n\`\`\``;
		chatInterfaceRef.current.sendMessage(message);
		if (!isLargeWorkspace) {
			setIsEditorOpen(false);
		}
	};

	if (isCheckingAccess || !isHydrated) {
		return (
			<div className="flex min-h-dvh items-center justify-center bg-background">
				<div className="text-center">
					<div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-b-2 border-primary" />
					<p className="text-sm text-muted-foreground">Loading workspace...</p>
				</div>
			</div>
		);
	}

	if (!isAuthenticated) {
		return null;
	}

	return (
		<TutorWorkspaceShell>
			<div
				className={`mx-auto h-full min-h-0 w-full p-2 sm:p-3 ${
					isEditorOpen && isLargeWorkspace ? "max-w-7xl" : "max-w-5xl"
				}`}
			>
				{isEditorOpen && isLargeWorkspace ? (
					<PanelGroup direction="horizontal" className="h-full min-h-0">
						<Panel id="chat-panel" defaultSize={60} minSize={35}>
							<div className="h-full min-h-0 pr-1.5">
								<ChatInterface
									ref={chatInterfaceRef}
									tutorId={DEFAULT_TUTOR_ID}
									messages={activeMessages}
									onMessagesChange={updateActiveMessages}
									onClearChat={clearActiveThread}
								/>
							</div>
						</Panel>

						<PanelResizeHandle className="group relative w-2">
							<div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-border transition-colors group-hover:bg-primary" />
							<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-border bg-background p-1 transition-colors group-hover:border-primary">
								<GripVertical className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
							</div>
						</PanelResizeHandle>

						<Panel id="editor-panel" defaultSize={40} minSize={30}>
							<div className="h-full min-h-0 pl-1.5">
								<PythonEditor
									initialCode={code}
									onCodeChange={handleCodeChange}
									onRunComplete={(output, isSuccess) => {
										console.log("Code execution:", { output, isSuccess });
									}}
									onAskAboutCode={handleAskAboutCode}
									className="h-full"
								/>
							</div>
						</Panel>
					</PanelGroup>
				) : (
					<ChatInterface
						ref={chatInterfaceRef}
						tutorId={DEFAULT_TUTOR_ID}
						messages={activeMessages}
						onMessagesChange={updateActiveMessages}
						onClearChat={clearActiveThread}
					/>
				)}
			</div>

			<Sheet
				open={isEditorOpen && !isLargeWorkspace}
				onOpenChange={(open) => setIsEditorOpen(open)}
			>
				<SheetContent side="right" className="w-full p-0 sm:max-w-2xl">
					<div className="h-full min-h-0 p-3">
						<PythonEditor
							initialCode={code}
							onCodeChange={handleCodeChange}
							onRunComplete={(output, isSuccess) => {
								console.log("Code execution:", { output, isSuccess });
							}}
							onAskAboutCode={handleAskAboutCode}
							className="h-full"
						/>
					</div>
				</SheetContent>
			</Sheet>
		</TutorWorkspaceShell>
	);
};

export default TutorChatPage;
