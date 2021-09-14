import React from 'react';

export interface NestedRoute {
  route: string;
  Node: React.ComponentType<React.ReactNode>;
  exact?: boolean;
  title?: string;
}