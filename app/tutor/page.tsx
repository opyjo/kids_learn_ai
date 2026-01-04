"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DEFAULT_TUTOR_ID } from "@/lib/constants/tutor-characters";

const TutorPage = () => {
	const router = useRouter();

	// Redirect directly to BrightByte tutor page
	useEffect(() => {
		router.push(`/tutor/${DEFAULT_TUTOR_ID}`);
	}, [router]);

	return null;
};

export default TutorPage;
