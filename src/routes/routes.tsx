import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

// Main pages
import Home from '../pages/Home';
import Roadmap from '../pages/Roadmap';
import Enquiry from '../pages/Enquiry';
import Help from '../pages/Help';

// Content Server pages
import ContentServerAbout from '../pages/products/content-server/About';
import ContentServerTechSpecs from '../pages/products/content-server/TechSpecs';
import ContentServerFAQ from '../pages/products/content-server/FAQ';

// RMSDK pages
import RMSDKAbout from '../pages/products/rmsdk/About';
import RMSDKFAQ from '../pages/products/rmsdk/FAQ';

// Digital Edition pages
import DigitalEditionAbout from '../pages/products/digital-edition/About';
import * as DigitalEdition from '../pages/products/digital-edition/Pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // Main routes
            { index: true, element: <Home /> },
            { path: 'roadmap', element: <Roadmap /> },
            { path: 'enquiry', element: <Enquiry /> },
            { path: 'help', element: <Help /> },

            // Content Server routes
            { path: 'products/content-server/about', element: <ContentServerAbout /> },
            { path: 'products/content-server/tech-specs', element: <ContentServerTechSpecs /> },
            { path: 'products/content-server/faq', element: <ContentServerFAQ /> },

            // RMSDK routes
            { path: 'products/rmsdk/about', element: <RMSDKAbout /> },
            { path: 'products/rmsdk/faq', element: <RMSDKFAQ /> },

            // Digital Edition routes
            { path: 'products/digital-edition/about', element: <DigitalEditionAbout /> },
            { path: 'products/digital-edition/tech-specs', element: <DigitalEdition.TechSpecs /> },
            { path: 'products/digital-edition/release-notes', element: <DigitalEdition.ReleaseNotes /> },
            { path: 'products/digital-edition/faq', element: <DigitalEdition.FAQ /> },
            { path: 'products/digital-edition/download', element: <DigitalEdition.Download /> },
            { path: 'products/digital-edition/sample-library', element: <DigitalEdition.SampleLibrary /> },
            { path: 'products/digital-edition/help', element: <DigitalEdition.Help /> },
        ],
    },
]);
