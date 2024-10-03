import { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { PageError } from "@/widgets/PageError/ui/PageError";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary
    extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.error('Error from ErrorBoundary[getDerivedStateFromError]', error)
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.error('Error from ErrorBoundary[componentDidCatch]', error, errorInfo);
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            )
        }

        return children;
    }
}

export default ErrorBoundary;