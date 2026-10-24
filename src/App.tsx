import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

// Data router: needed for <Link viewTransition>, which wraps navigation in
// document.startViewTransition() and replays it on browser back. Browsers
// without the View Transitions API simply navigate normally.
function Layout() {
  return (
    <>
      {/* Top of page on forward navigation, restored position on back — applied
          before the new view-transition snapshot is taken. */}
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects/:slug', element: <ProjectPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
