'use client';

import '@mantine/core/styles.css';
import '@/sass/global.sass';

import { ReactNode, Suspense } from "react";
import { Space_Grotesk } from 'next/font/google';
import { MantineProvider } from '@mantine/core';

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
                        <MantineProvider defaultColorScheme='dark'>
                            {children}
                        </MantineProvider>
                    </Suspense>
                </body>
            </html>
        </>
    );
};
export default RootLayout;