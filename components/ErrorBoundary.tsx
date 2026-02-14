
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

// Fixed: Explicitly using React.Component ensures proper type inheritance for setState and props
export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  // Fixed: Instance method correctly typed with access to this.setState
  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      // Fixed: Access fallback from this.props instead of the instance itself
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="min-h-screen bg-cybee-gray flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border-2 border-red-100">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🐝</span>
            </div>
            <h1 className="text-2xl font-bold text-cybee-black mb-2">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              CyBee encountered an unexpected error. This might be due to a configuration issue or a temporary glitch.
            </p>
            <div className="bg-red-50 p-4 rounded-xl mb-6 text-left overflow-auto max-h-40">
              <code className="text-xs text-red-700 font-mono">
                {this.state.error?.message || "Unknown error"}
              </code>
            </div>
            <button
              // Fixed: Reference handleReset as a member of this
              onClick={this.handleReset}
              className="w-full bg-cybee-black text-white font-bold py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    // Fixed: Correct access to props.children using this.props
    return this.props.children;
  }
}
