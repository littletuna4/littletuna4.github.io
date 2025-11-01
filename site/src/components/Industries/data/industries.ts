export interface IndustryEdge {
  source: string;
  target: string;
}

export interface CategorySettings {
  color: {
    light: string;
    dark: string;
  };
  size: number;
}

export interface IndustryNode {
  id: string;
  label: string;
  category: CategorySettings;
}

export const categoryInfo: Record<string, CategorySettings> = {
  industry: {
    size: 10,
    color: {
      light: '#059669', // emerald-600
      dark: '#10b981', // emerald-500
    },
  },
  discipline: {
    size: 9,
    color: {
      light: '#2563eb', // blue-600
      dark: '#3b82f6', // blue-500
    },
  },
  tool: {
    size: 5,
    color: {
      light: '#dc2626', // red-600
      dark: '#ef4444', // red-500
    },
  },
  topic: {
    size: 7,
    color: {
      light: '#ea580c', // orange-600
      dark: '#f97316', // orange-500
    },
  },
  challenge: {
    size: 6,
    color: {
      light: '#7c3aed', // violet-600
      dark: '#8b5cf6', // violet-500
    },
  },
} as const;

export const getCategoryInfo = (category: string) => {
  return (
    categoryInfo[category as keyof typeof categoryInfo] || categoryInfo.industry
  );
};

export const nodes: IndustryNode[] = [
  // Industries
  { id: 'energy', label: 'Energy', category: categoryInfo.industry },
  { id: 'mining', label: 'Mining', category: categoryInfo.industry },
  // {
  //   id: 'manufacturing',
  //   label: 'Manufacturing',
  //   category: categoryInfo.industry,
  // },
  { id: 'logistics', label: 'Logistics', category: categoryInfo.industry },
  { id: 'healthcare', label: 'Healthcare', category: categoryInfo.industry },
  { id: 'water', label: 'Water', category: categoryInfo.industry },
  { id: 'oil-and-gas', label: 'Oil and Gas', category: categoryInfo.industry },
  {
    id: 'pharmaceuticals',
    label: 'Pharmaceuticals',
    category: categoryInfo.industry,
  },
  { id: 'utilities', label: 'Utilities', category: categoryInfo.industry },
  { id: 'chemicals', label: 'Chemicals', category: categoryInfo.industry },
  {
    id: 'food-and-beverage',
    label: 'Food and Beverage',
    category: categoryInfo.industry,
  },
  { id: 'electronics', label: 'Electronics', category: categoryInfo.industry },
  { id: 'renewables', label: 'Renewables', category: categoryInfo.industry },

  // Disciplines
  {
    id: 'chemical-engineering',
    label: 'Chemical Engineering',
    category: categoryInfo.discipline,
  },
  {
    id: 'mechanical-engineering',
    label: 'Mechanical Engineering',
    category: categoryInfo.discipline,
  },
  {
    id: 'electrical-engineering',
    label: 'Electrical Engineering',
    category: categoryInfo.discipline,
  },
  {
    id: 'process-engineering',
    label: 'Process Engineering',
    category: categoryInfo.discipline,
  },
  {
    id: 'software-engineering',
    label: 'Software Engineering',
    category: categoryInfo.discipline,
  },
  {
    id: 'data-science',
    label: 'Data Science',
    category: categoryInfo.discipline,
  },
  { id: 'chemistry', label: 'Chemistry', category: categoryInfo.discipline },
  {
    id: 'industrial-design',
    label: 'Industrial Design',
    category: categoryInfo.discipline,
  },
  {
    id: 'systems-engineering',
    label: 'Systems Engineering',
    category: categoryInfo.discipline,
  },
  { id: 'statistics', label: 'Statistics', category: categoryInfo.discipline },
  // Tools
  // { id: 'python', label: 'Python', category: categoryInfo.tool },
  // { id: 'syscad', label: 'SysCAD', category: categoryInfo.tool },
  // { id: 'matlab', label: 'MATLAB', category: categoryInfo.tool },
  // { id: 'autocad', label: 'AutoCAD', category: categoryInfo.tool },
  { id: 'cloud', label: 'Cloud', category: categoryInfo.tool },
  {
    id: 'web-development',
    label: 'Web Development',
    category: categoryInfo.tool,
  },
  { id: 'excel', label: 'Excel', category: categoryInfo.tool },
  { id: 'docker', label: 'Docker', category: categoryInfo.tool },

  // Topics
  {
    id: 'carbon-capture',
    label: 'Carbon Capture',
    category: categoryInfo.topic,
  },
  { id: 'automation', label: 'Automation', category: categoryInfo.topic },
  { id: 'ai', label: 'Artificial Intelligence', category: categoryInfo.topic },
  { id: 'digital-twins', label: 'Digital Twins', category: categoryInfo.topic },
  {
    id: 'renewable-energy',
    label: 'Renewable Energy',
    category: categoryInfo.topic,
  },
  {
    id: 'process-optimization',
    label: 'Process Optimization',
    category: categoryInfo.topic,
  },
  {
    id: 'modelling',
    label: 'Modelling & Simulation',
    category: categoryInfo.topic,
  },
  {
    id: 'machine-learning',
    label: 'Machine Learning',
    category: categoryInfo.topic,
  },
  { id: 'iot', label: 'IoT', category: categoryInfo.topic },
  {
    id: 'maintenance',
    label: 'Maintenance',
    category: categoryInfo.topic,
  },
  {
    id: 'energy-storage',
    label: 'Energy Storage',
    category: categoryInfo.topic,
  },
  { id: 'biofuels', label: 'Biofuels', category: categoryInfo.topic },
];

// Create a Set of all present node IDs for efficient lookup
const presentNodeIds = new Set(nodes.map(node => node.id));

// Filter edges to only include those where both source and target nodes exist
const allEdges: IndustryEdge[] = [
  // Industry connections
  { source: 'energy', target: 'mining' },
  { source: 'energy', target: 'renewable-energy' },
  { source: 'mining', target: 'logistics' },
  { source: 'logistics', target: 'automotive' },
  { source: 'logistics', target: 'maritime' },
  { source: 'healthcare', target: 'pharmaceuticals' },
  { source: 'water', target: 'coastal-engineering' },
  { source: 'agriculture', target: 'water' },
  { source: 'agriculture', target: 'food-and-beverage' },
  { source: 'aviation', target: 'aerospace' },
  { source: 'defence', target: 'aerospace' },
  { source: 'oil-and-gas', target: 'energy' },
  { source: 'oil-and-gas', target: 'mining' },
  { source: 'pharmaceuticals', target: 'healthcare' },
  { source: 'automotive', target: 'logistics' },
  { source: 'utilities', target: 'energy' },
  { source: 'utilities', target: 'water' },
  { source: 'chemicals', target: 'agriculture' },
  { source: 'chemicals', target: 'pharmaceuticals' },
  { source: 'maritime', target: 'logistics' },
  { source: 'maritime', target: 'coastal-engineering' },
  { source: 'food-and-beverage', target: 'agriculture' },
  { source: 'electronics', target: 'automotive' },
  { source: 'renewables', target: 'energy' },
  { source: 'renewables', target: 'utilities' },

  // Discipline links - Chemical and Process Engineering as hubs
  { source: 'process-engineering', target: 'chemical-engineering' },
  { source: 'process-engineering', target: 'mechanical-engineering' },
  { source: 'process-engineering', target: 'electrical-engineering' },
  { source: 'process-engineering', target: 'systems-engineering' },
  { source: 'process-engineering', target: 'data-science' },
  { source: 'process-engineering', target: 'chemicals' },
  { source: 'process-engineering', target: 'pharmaceuticals' },
  { source: 'process-engineering', target: 'energy' },
  { source: 'process-engineering', target: 'oil-and-gas' },
  { source: 'process-engineering', target: 'food-and-beverage' },
  { source: 'process-engineering', target: 'utilities' },
  { source: 'process-engineering', target: 'modelling' },
  { source: 'process-engineering', target: 'automation' },
  { source: 'process-engineering', target: 'process-optimization' },
  { source: 'process-engineering', target: 'digital-twins' },
  { source: 'chemical-engineering', target: 'chemistry' },
  { source: 'chemical-engineering', target: 'chemicals' },
  { source: 'chemical-engineering', target: 'pharmaceuticals' },
  { source: 'chemical-engineering', target: 'energy' },
  { source: 'chemical-engineering', target: 'oil-and-gas' },
  { source: 'chemical-engineering', target: 'food-and-beverage' },
  { source: 'chemical-engineering', target: 'utilities' },
  { source: 'chemical-engineering', target: 'water' },
  { source: 'chemical-engineering', target: 'renewables' },
  { source: 'chemical-engineering', target: 'mechanical-engineering' },
  { source: 'chemical-engineering', target: 'process-engineering' },
  { source: 'chemical-engineering', target: 'data-science' },
  { source: 'chemical-engineering', target: 'systems-engineering' },
  { source: 'chemical-engineering', target: 'modelling' },
  { source: 'chemical-engineering', target: 'automation' },
  { source: 'chemical-engineering', target: 'carbon-capture' },
  { source: 'chemical-engineering', target: 'process-optimization' },
  { source: 'chemical-engineering', target: 'biofuels' },
  { source: 'chemical-engineering', target: 'digital-twins' },
  // Other engineering discipline connections
  { source: 'mechanical-engineering', target: 'process-engineering' },
  { source: 'mechanical-engineering', target: 'electrical-engineering' },
  { source: 'mechanical-engineering', target: 'systems-engineering' },
  { source: 'mechanical-engineering', target: 'energy' },
  { source: 'mechanical-engineering', target: 'mining' },
  { source: 'mechanical-engineering', target: 'renewables' },
  { source: 'mechanical-engineering', target: 'automation' },
  { source: 'mechanical-engineering', target: 'maintenance' },
  { source: 'electrical-engineering', target: 'automation' },
  { source: 'electrical-engineering', target: 'mechanical-engineering' },
  { source: 'electrical-engineering', target: 'systems-engineering' },
  { source: 'electrical-engineering', target: 'process-engineering' },
  { source: 'electrical-engineering', target: 'energy' },
  { source: 'electrical-engineering', target: 'utilities' },
  { source: 'electrical-engineering', target: 'renewables' },
  { source: 'electrical-engineering', target: 'iot' },
  { source: 'software-engineering', target: 'web-development' },
  { source: 'software-engineering', target: 'cloud' },
  { source: 'software-engineering', target: 'data-science' },
  { source: 'software-engineering', target: 'systems-engineering' },
  { source: 'software-engineering', target: 'process-engineering' },
  { source: 'software-engineering', target: 'automation' },
  { source: 'software-engineering', target: 'modelling' },
  { source: 'data-science', target: 'ai' },
  { source: 'data-science', target: 'statistics' },
  { source: 'data-science', target: 'process-engineering' },
  { source: 'data-science', target: 'chemical-engineering' },
  { source: 'data-science', target: 'modelling' },
  { source: 'data-science', target: 'machine-learning' },
  { source: 'data-science', target: 'process-optimization' },
  { source: 'systems-engineering', target: 'software-engineering' },
  { source: 'systems-engineering', target: 'process-engineering' },
  { source: 'systems-engineering', target: 'chemical-engineering' },
  { source: 'systems-engineering', target: 'mechanical-engineering' },
  { source: 'systems-engineering', target: 'electrical-engineering' },
  { source: 'systems-engineering', target: 'automation' },
  { source: 'systems-engineering', target: 'modelling' },
  { source: 'industrial-design', target: 'process-engineering' },
  { source: 'industrial-design', target: 'mechanical-engineering' },
  { source: 'statistics', target: 'data-science' },
  { source: 'statistics', target: 'process-engineering' },

  // Tools integration
  { source: 'cloud', target: 'software-engineering' },
  { source: 'cloud', target: 'data-science' },
  { source: 'web-development', target: 'software-engineering' },
  { source: 'kubernetes', target: 'cloud' },
  { source: 'docker', target: 'cloud' },
  { source: 'power-bi', target: 'data-science' },
  { source: 'power-bi', target: 'statistics' },

  // Topics connections - enhanced with engineering hubs
  { source: 'carbon-capture', target: 'energy' },
  { source: 'carbon-capture', target: 'chemical-engineering' },
  { source: 'carbon-capture', target: 'process-engineering' },
  { source: 'automation', target: 'electrical-engineering' },
  { source: 'automation', target: 'process-engineering' },
  { source: 'automation', target: 'chemical-engineering' },
  { source: 'automation', target: 'mechanical-engineering' },
  { source: 'automation', target: 'systems-engineering' },
  { source: 'ai', target: 'data-science' },
  { source: 'ai', target: 'machine-learning' },
  { source: 'ai', target: 'process-engineering' },
  { source: 'digital-twins', target: 'modelling' },
  { source: 'digital-twins', target: 'automation' },
  { source: 'digital-twins', target: 'process-engineering' },
  { source: 'digital-twins', target: 'chemical-engineering' },
  { source: 'renewable-energy', target: 'energy' },
  { source: 'renewable-energy', target: 'chemical-engineering' },
  { source: 'process-optimization', target: 'process-engineering' },
  { source: 'process-optimization', target: 'chemical-engineering' },
  { source: 'process-optimization', target: 'data-science' },
  { source: 'process-optimization', target: 'automation' },
  { source: 'process-optimization', target: 'modelling' },
  { source: 'modelling', target: 'data-science' },
  { source: 'modelling', target: 'process-engineering' },
  { source: 'modelling', target: 'chemical-engineering' },
  { source: 'modelling', target: 'mechanical-engineering' },
  { source: 'modelling', target: 'systems-engineering' },
  { source: 'machine-learning', target: 'ai' },
  { source: 'machine-learning', target: 'data-science' },
  { source: 'machine-learning', target: 'process-optimization' },
  { source: 'iot', target: 'automation' },
  { source: 'iot', target: 'cloud' },
  { source: 'iot', target: 'process-engineering' },
  { source: 'maintenance', target: 'mechanical-engineering' },
  { source: 'maintenance', target: 'process-engineering' },
  { source: 'maintenance', target: 'automation' },
  { source: 'energy-storage', target: 'renewable-energy' },
  { source: 'energy-storage', target: 'utilities' },
  { source: 'energy-storage', target: 'chemical-engineering' },
  { source: 'biofuels', target: 'renewable-energy' },
  { source: 'biofuels', target: 'chemical-engineering' },
  { source: 'biofuels', target: 'process-engineering' },

  // Challenges connections
  { source: 'sustainability', target: 'renewables' },
  { source: 'sustainability', target: 'environmental-engineering' },
  { source: 'climate-change', target: 'agriculture' },
  { source: 'climate-change', target: 'water' },
  { source: 'regulatory-compliance', target: 'pharmaceuticals' },
  { source: 'regulatory-compliance', target: 'defence' },
  { source: 'energy-transition', target: 'renewables' },
  { source: 'energy-transition', target: 'energy' },
];

export const edges: IndustryEdge[] = allEdges.filter(
  edge => presentNodeIds.has(edge.source) && presentNodeIds.has(edge.target)
);
