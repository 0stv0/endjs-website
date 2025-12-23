'use client';

import '@/sass/global.sass';

import { ReactNode, Suspense } from "react";
import { Space_Grotesk } from 'next/font/google';

const font       = Space_Grotesk();
const RootLayout = ({children}: {children: Readonly<ReactNode>}) =>
{
    return (
        <>
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <title>EndJS.pl</title>
                    <link rel="icon" href="/endjs-logo.png" />
                </head>
                <body suppressHydrationWarning className={`${font.className}`}>
                    <Suspense>
                        {children}
                    </Suspense>
                </body>
            </html>
        </>
    );
};
export default RootLayout;