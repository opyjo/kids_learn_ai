import { ImageResponse } from "next/og";

export const alt =
	"Kids Learn AI — live online Python and responsible AI classes for Canadian kids ages 9 to 13";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				position: "relative",
				overflow: "hidden",
				background:
					"linear-gradient(135deg, rgb(238, 246, 255) 0%, rgb(250, 245, 255) 48%, rgb(255, 246, 230) 100%)",
				color: "rgb(24, 31, 51)",
				padding: "72px 84px",
				fontFamily: "sans-serif",
			}}
		>
			<div
				style={{
					position: "absolute",
					width: 460,
					height: 460,
					borderRadius: 999,
					right: -90,
					top: -100,
					background: "rgba(80, 105, 255, 0.18)",
				}}
			/>
			<div
				style={{
					position: "absolute",
					width: 360,
					height: 360,
					borderRadius: 999,
					right: 100,
					bottom: -210,
					background: "rgba(255, 155, 65, 0.2)",
				}}
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					width: "100%",
					zIndex: 1,
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						fontSize: 30,
						fontWeight: 700,
						color: "rgb(68, 76, 220)",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: 54,
							height: 54,
							borderRadius: 16,
							marginRight: 18,
							background: "rgb(68, 76, 220)",
							color: "white",
							fontSize: 30,
						}}
					>
						{"</>"}
					</div>
					Kids Learn AI
				</div>
				<div
					style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}
				>
					<div
						style={{
							display: "flex",
							fontSize: 68,
							lineHeight: 1.06,
							fontWeight: 800,
							letterSpacing: -2,
						}}
					>
						Live Python & responsible AI classes.
					</div>
					<div
						style={{
							display: "flex",
							marginTop: 28,
							fontSize: 30,
							lineHeight: 1.35,
							color: "rgb(73, 82, 108)",
						}}
					>
						Canadian kids ages 9–13 · Small groups · Real projects · First class
						free
					</div>
				</div>
				<div
					style={{
						display: "flex",
						fontSize: 24,
						color: "rgb(73, 82, 108)",
					}}
				>
					www.kidslearnai.ca
				</div>
			</div>
		</div>,
		size,
	);
}
