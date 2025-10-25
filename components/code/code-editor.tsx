"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language: string
  className?: string
}

export function CodeEditor({ value, onChange, language, className }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
    }
  }, [value])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault()
      const start = e.currentTarget.selectionStart
      const end = e.currentTarget.selectionEnd
      const newValue = value.substring(0, start) + "    " + value.substring(end)
      onChange(newValue)

      // Set cursor position after the inserted tab
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4
        }
      }, 0)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full h-full p-4 bg-gray-900 text-gray-100 font-mono text-sm resize-none border-0 outline-none"
        placeholder="Write your Python code here..."
        spellCheck={false}
        style={{
          minHeight: "200px",
          lineHeight: "1.5",
          tabSize: 4,
        }}
      />

      {/* Line numbers (optional enhancement) */}
      <div className="absolute left-0 top-0 p-4 text-gray-500 font-mono text-sm pointer-events-none select-none">
        {value.split("\n").map((_, index) => (
          <div key={index} style={{ lineHeight: "1.5" }}>
            {index + 1}
          </div>
        ))}
      </div>

      <style jsx>{`
        textarea {
          padding-left: ${value.split("\n").length.toString().length * 8 + 32}px;
        }
      `}</style>
    </div>
  )
}
