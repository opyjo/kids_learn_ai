declare module "ml5" {
	export interface HandPoseKeypoint {
		x: number;
		y: number;
		name?: string;
		confidence?: number;
	}

	export interface HandPosePrediction {
		confidence?: number;
		handedness?: string;
		keypoints: HandPoseKeypoint[];
	}

	export interface HandPoseModel {
		ready: Promise<unknown>;
		detectStart(
			media: HTMLVideoElement | HTMLCanvasElement | HTMLImageElement,
			callback: (predictions: HandPosePrediction[]) => void,
		): void;
		detectStop(): void;
	}

	export interface Ml5Api {
		handPose(options?: {
			maxHands?: number;
			flipped?: boolean;
			runtime?: "tfjs" | "mediapipe";
			modelType?: "lite" | "full";
		}): HandPoseModel;
	}

	const ml5: Ml5Api;
	export default ml5;
}
