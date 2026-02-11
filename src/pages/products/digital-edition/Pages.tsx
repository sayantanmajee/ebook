import PageWrapper from '../../../components/PageWrapper';

const pages = [
    { name: 'TechSpecs', title: 'Technical Specifications', content: 'Technical specifications coming soon...' },
    { name: 'ReleaseNotes', title: 'Release Notes', content: 'Release notes coming soon...' },
    { name: 'FAQ', title: 'FAQ', content: 'Frequently asked questions coming soon...' },
    { name: 'Download', title: 'Download', content: 'Download links coming soon...' },
    { name: 'SampleLibrary', title: 'Sample ByteBook Library', content: 'Sample library coming soon...' },
    { name: 'Help', title: 'Help & Support', content: 'Help resources coming soon...' },
];

export const TechSpecs = () => <PageWrapper title={pages[0].title}><p className="text-gray-600">{pages[0].content}</p></PageWrapper>;
export const ReleaseNotes = () => <PageWrapper title={pages[1].title}><p className="text-gray-600">{pages[1].content}</p></PageWrapper>;
export const FAQ = () => <PageWrapper title={pages[2].title}><p className="text-gray-600">{pages[2].content}</p></PageWrapper>;
export const Download = () => <PageWrapper title={pages[3].title}><p className="text-gray-600">{pages[3].content}</p></PageWrapper>;
export const SampleLibrary = () => <PageWrapper title={pages[4].title}><p className="text-gray-600">{pages[4].content}</p></PageWrapper>;
export const Help = () => <PageWrapper title={pages[5].title}><p className="text-gray-600">{pages[5].content}</p></PageWrapper>;
