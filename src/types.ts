export type NavigationTab =
  | 'solutions'
  | 'ai-services'
  | 'infrastructure'
  | 'about'
  | 'case-studies'
  | 'privacy-policy'
  | 'terms-of-service';

export interface ArchitectureNode {
  id: string;
  name: string;
  category: 'Ingress' | 'Compute & AI' | 'Storage & Cache' | 'Security';
  latency: string;
  status: 'optimal' | 'active' | 'standby';
  throughput: string;
  description: string;
  specs: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientCategory: string;
  headline: string;
  impactMetrics: { label: string; value: string; detail: string }[];
  overview: string;
  challenge: string;
  architectureHighlights: string[];
  techStack: string[];
}

export interface ServicePillar {
  id: string;
  title: string;
  icon: string;
  summary: string;
  fullDescription: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
}
