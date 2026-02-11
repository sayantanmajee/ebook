import PageWrapper from '../components/PageWrapper';

export default function Home() {
    return (
        <PageWrapper title="Home">
            <div className="space-y-8">
                <div className="space-y-4">
                    <p className="text-xl text-gray-600">Welcome to Adobe eBook</p>
                    <p className="text-gray-700">Your digital reading experience starts here.</p>
                </div>

                {/* Wide content section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
                    <p className="text-gray-600 mb-6">Explore our comprehensive suite of digital publishing solutions</p>

                    {/* Horizontal scrolling cards */}
                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="min-w-[300px] bg-gradient-to-br from-primary-500 to-primary-700 text-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold mb-2">Product Feature {i}</h3>
                                <p className="text-sm opacity-90 mb-4">
                                    This is a wide card that demonstrates horizontal overflow behavior in the layout.
                                    Each card has a minimum width to force horizontal scrolling.
                                </p>
                                <button className="bg-white text-primary-600 px-4 py-2 rounded font-medium hover:bg-gray-100">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Really wide table */}
                <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                    <h2 className="text-2xl font-bold mb-4">Product Comparison</h2>
                    <table className="w-full min-w-[1200px] border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-3 text-left">Feature</th>
                                <th className="border p-3 text-left">Content Server</th>
                                <th className="border p-3 text-left">RMSDK</th>
                                <th className="border p-3 text-left">Digital Edition</th>
                                <th className="border p-3 text-left">Enterprise</th>
                                <th className="border p-3 text-left">Cloud Solution</th>
                                <th className="border p-3 text-left">Premium Plus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((row) => (
                                <tr key={row} className="hover:bg-gray-50">
                                    <td className="border p-3 font-medium">Feature {row}</td>
                                    <td className="border p-3 text-center">✓</td>
                                    <td className="border p-3 text-center">✓</td>
                                    <td className="border p-3 text-center">✓</td>
                                    <td className="border p-3 text-center">✓</td>
                                    <td className="border p-3 text-center">-</td>
                                    <td className="border p-3 text-center">✓</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Extra wide content with long text */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">About Our Platform</h2>
                    <div className="space-y-4">
                        <p className="text-gray-700" style={{ minWidth: '1500px' }}>
                            This is intentionally wide content that will force horizontal scrolling.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
