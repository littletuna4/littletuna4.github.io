'use client';
/**
 * Functional Requirements:
 * - Render an interactive force-layout graph of Reqlan blog post concepts
 * - Reuse BaseGraph for drag, theme, and layout behavior
 * - Support light and dark mode via ThemeProvider
 * - Client-side only rendering to prevent SSR issues with Sigma.js
 * - Fill a parent with an explicit height so Sigma.js gets a non-zero pixel box on mobile
 */

import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from '@/components/providers/ThemeProvider';
import { getReqlanIdeasGraphologyGraph } from './data/getReqlanIdeasGraph';
import type { ForceLayoutConfig } from '@/components/Industries/BaseGraph';

const BaseGraph = dynamic(() => import('@/components/Industries/BaseGraph'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full min-h-[400px] relative flex items-center justify-center bg-background">
      <div className="text-foreground">Loading Reqlan ideas graph...</div>
    </div>
  ),
});

interface ReqlanBlogPostIdeasGraphProps {
  minHeight?: string;
}

const ReqlanBlogPostIdeasGraph: React.FC<ReqlanBlogPostIdeasGraphProps> = ({
  minHeight = '480px',
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [isMounted, setIsMounted] = useState(false);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const reqlanIdeasGraphForceLayoutConfiguration: ForceLayoutConfig = {
    attraction: 0.006,
    repulsion: 1.2,
    gravity: 0.001,
    inertia: 1,
    maxMove: 200,
    scalingRatio: 1,
    nodeScaling: true,
    nodeProperty: 'size',
  };

  const reqlanIdeasGraphData = useMemo(() => {
    return getReqlanIdeasGraphologyGraph(isDark, 800, 480);
  }, [isDark]);

  if (!isMounted) {
    return (
      <div
        className="h-full w-full relative flex items-center justify-center bg-background"
        style={{ minHeight }}
      >
        <div className="text-foreground">Loading Reqlan ideas graph...</div>
      </div>
    );
  }

  return (
    <BaseGraph
      graphData={reqlanIdeasGraphData}
      layout="force"
      isLayoutRunning={true}
      dragMode={true}
      draggedNode={draggedNode}
      setDraggedNode={setDraggedNode}
      dragLockMode="fixed"
      forceConfig={reqlanIdeasGraphForceLayoutConfiguration}
      minHeight={minHeight}
      className="h-full w-full relative bg-background"
    />
  );
};

export { ReqlanBlogPostIdeasGraph };
export default ReqlanBlogPostIdeasGraph;
