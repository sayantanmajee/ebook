import { type ReactNode } from 'react';

interface PageWrapperProps {
    title?: string;
    children: ReactNode;
}

export default function PageWrapper({ title, children }: PageWrapperProps) {
    return (
        <div className="flex-1 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {title && (
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
                )}
                <div className="prose max-w-none">
                    {children}
                </div>
            </div>
        </div>
    );
}
