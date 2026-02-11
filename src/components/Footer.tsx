export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} AdobeEbook. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
