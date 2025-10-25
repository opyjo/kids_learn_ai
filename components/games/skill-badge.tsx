interface SkillBadgeProps {
  skill: string;
  variant?: "default" | "white";
}

export const SkillBadge = ({ skill, variant = "default" }: SkillBadgeProps) => {
  const variantClasses = {
    default: "bg-blue-50 text-blue-700 border-blue-200",
    white: "bg-white text-blue-700 border-blue-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm border ${variantClasses[variant]}`}
    >
      {skill}
    </span>
  );
};
