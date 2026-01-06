"use client";

import { Eye, EyeOff, Lock } from "lucide-react";
import { forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface PasswordInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	showIcon?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ className, showIcon = true, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState(false);

		const handleTogglePassword = () => {
			setShowPassword((prev) => !prev);
		};

		return (
			<div className="relative">
				{showIcon && (
					<Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
				)}
				<Input
					type={showPassword ? "text" : "password"}
					className={cn(showIcon ? "pl-10 pr-10" : "pr-10", className)}
					ref={ref}
					{...props}
				/>
				<Button
					type="button"
					variant="ghost"
					size="sm"
					className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
					onClick={handleTogglePassword}
					aria-label={showPassword ? "Hide password" : "Show password"}
					tabIndex={-1}
				>
					{showPassword ? (
						<EyeOff className="h-4 w-4 text-gray-400" aria-hidden="true" />
					) : (
						<Eye className="h-4 w-4 text-gray-400" aria-hidden="true" />
					)}
				</Button>
			</div>
		);
	},
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
