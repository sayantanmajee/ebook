import { useState, useEffect } from 'react';

// Vite glob import for all JSON files
const contentModules = import.meta.glob('../content/**/*.json');

export function useContent<T>(path: string): T | null {
    const [content, setContent] = useState<T | null>(null);

    useEffect(() => {
        const loadContent = async () => {
            try {
                // Construct the full path for the glob import
                const fullPath = `../content/${path}.json`;

                if (contentModules[fullPath]) {
                    const module = await contentModules[fullPath]() as { default: T };
                    setContent(module.default);
                } else {
                    console.error(`Content file not found: ${fullPath}`);
                    setContent(null);
                }
            } catch (error) {
                console.error(`Failed to load content from ${path}:`, error);
                setContent(null);
            }
        };

        loadContent();
    }, [path]);

    return content;
}
