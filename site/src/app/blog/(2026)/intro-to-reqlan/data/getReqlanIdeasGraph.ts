/**
 * Functional Requirements:
 * - Build a graphology graph from Reqlan blog post idea nodes and edges
 * - Apply theme-aware node colors from reqlanIdeasGraphData category settings
 * - Seed random positions within configurable canvas bounds for force layout
 */

import Graph from 'graphology';
import { palette } from '@/styles/palette';
import {
  reqlanIdeasGraphEdges,
  reqlanIdeasGraphNodes,
  type ReqlanIdeasGraphEdgeDefinition,
  type ReqlanIdeasGraphNodeDefinition,
} from './reqlanIdeasGraphData';

export interface ReqlanIdeasGraphBuildConfiguration {
  width: number;
  height: number;
  isDark: boolean;
}

export const defaultReqlanIdeasGraphBuildConfiguration: ReqlanIdeasGraphBuildConfiguration =
  {
    width: 800,
    height: 600,
    isDark: false,
  };

export function createReqlanIdeasGraphologyGraph(
  configuration: ReqlanIdeasGraphBuildConfiguration = defaultReqlanIdeasGraphBuildConfiguration
): Graph {
  const graph = new Graph();
  const { width, height, isDark } = configuration;

  reqlanIdeasGraphNodes.forEach((nodeDefinition: ReqlanIdeasGraphNodeDefinition) => {
    const x = Math.random() * (width - 100) + 50;
    const y = Math.random() * (height - 100) + 50;

    graph.addNode(nodeDefinition.id, {
      label: nodeDefinition.label,
      size: nodeDefinition.category.size,
      color: isDark
        ? nodeDefinition.category.color.dark
        : nodeDefinition.category.color.light,
      labelColor: {
        attribute: isDark ? palette.dark.foreground : palette.light.foreground,
      },
      x,
      y,
      highlighted: false,
      fixed: false,
      pinned: false,
      category: nodeDefinition.category,
      baseSize: nodeDefinition.category.size,
      scaleFactor: Math.max(
        0.5,
        Math.min(3, nodeDefinition.category.size / 15)
      ),
    });
  });

  reqlanIdeasGraphEdges.forEach((edgeDefinition: ReqlanIdeasGraphEdgeDefinition) => {
    if (
      graph.hasNode(edgeDefinition.source) &&
      graph.hasNode(edgeDefinition.target)
    ) {
      graph.addEdge(edgeDefinition.source, edgeDefinition.target, {
        color: isDark ? palette.dark.foreground : palette.light.foreground,
        size: 2,
        weight: 1,
      });
    }
  });

  return graph;
}

export function getReqlanIdeasGraphologyGraph(
  isDark: boolean = false,
  width: number = 800,
  height: number = 600
): Graph {
  return createReqlanIdeasGraphologyGraph({
    width,
    height,
    isDark,
  });
}
