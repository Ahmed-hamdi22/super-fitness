import { Button } from "@/components/ui/button";
import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <section className="flex flex-col gap-6 text-center items-center p-4">
            <span className="text-9xl text-red-500 font-bold">Error</span>

            {/* Error message */}
            <p className="px-3 py-2 rounded-full bg-red-50 text-red-400 border border-red-500">
              {this.state.error?.message || "Something went wrong"}
            </p>

            {/* Try again button */}
            <Button 
              onClick={() => this.setState({ hasError: false, error: null })}
              className="mt-4 px-4 py-2 bg-flame-orange-500 text-white rounded hover:bg-flame-orange-600"
            >
              Try Again
            </Button>
          </section>
        </div>
      );
    }

    return this.props.children;
  }
}