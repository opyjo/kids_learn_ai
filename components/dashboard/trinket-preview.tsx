"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Maximize2, Minimize2 } from "lucide-react";

interface TrinketPreviewProps {
  trinketUrl: string;
  title?: string;
  className?: string;
}

const extractEmbedUrl = (url: string): string => {
  // Handle various Trinket URL formats
  // https://trinket.io/python/abc123 -> https://trinket.io/embed/python/abc123
  // https://trinket.io/embed/python/abc123 -> keep as is
  // https://trinket.io/library/trinkets/abc123 -> https://trinket.io/embed/python/abc123
  
  if (!url) return "";
  
  // Already an embed URL
  if (url.includes("/embed/")) {
    return url;
  }
  
  // Convert regular Trinket URL to embed
  const trinketMatch = url.match(/trinket\.io\/(python3?|html|blocks)\/([a-zA-Z0-9]+)/);
  if (trinketMatch) {
    const [, language, id] = trinketMatch;
    return `https://trinket.io/embed/${language}/${id}`;
  }
  
  // Try library format
  const libraryMatch = url.match(/trinket\.io\/library\/trinkets\/([a-zA-Z0-9]+)/);
  if (libraryMatch) {
    return `https://trinket.io/embed/python/${libraryMatch[1]}`;
  }
  
  return url;
};

export const TrinketPreview = ({
  trinketUrl,
  title,
  className = "",
}: TrinketPreviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const embedUrl = extractEmbedUrl(trinketUrl);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOpenExternal = () => {
    // Convert embed URL back to regular URL for external viewing
    const externalUrl = embedUrl.replace("/embed/", "/");
    window.open(externalUrl, "_blank", "noopener,noreferrer");
  };

  if (!embedUrl) {
    return (
      <Card className={className}>
        <CardContent className="flex items-center justify-center h-[300px] text-muted-foreground">
          No Trinket URL provided
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`overflow-hidden ${className}`}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b">
          <span className="text-sm font-medium">{title}</span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleToggleExpand}
              className="h-8 w-8 p-0"
              aria-label={isExpanded ? "Minimize preview" : "Expand preview"}
            >
              {isExpanded ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleOpenExternal}
              className="h-8 w-8 p-0"
              aria-label="Open in Trinket"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      <CardContent className="p-0">
        <iframe
          src={embedUrl}
          width="100%"
          height={isExpanded ? "600" : "400"}
          frameBorder="0"
          marginWidth={0}
          marginHeight={0}
          allowFullScreen
          className="transition-all duration-300"
          title={title || "Trinket Code Preview"}
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </CardContent>
    </Card>
  );
};

export { extractEmbedUrl };

