'use client';

import "highlight.js/styles/atom-one-dark.css";
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { get } from "@/lib/Requests";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import styles from '@/sass/docs.module.sass';
import Image from "next/image";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";

type Contents = Record<string, string>;
type Pages    = 'basics' | 'mysql' | 'mongo' | 'pass' | 'jwt' | 'request' | 'response';
const Docs    = () =>
{
    const [opened, { toggle }]    = useDisclosure();
    const [contents, setContents] = useState<Contents>({});
    const [loaded, setLoaded]     = useState(false);
    const [current, setCurrent]   = useState<Pages>('pass');

    useEffect(() =>
    {
        const load = async() =>
        {
            let data: Contents | null = await get('/api/docs');
            if (data !== null) setContents(data);
            setLoaded(true);
        };
        load();
    }, []);

    return (
        <>
            <AppShell
                header={{
                    height: 60
                }}
                navbar={{
                    collapsed: {mobile: !opened},
                    breakpoint: "sm",
                    width: 300
                }}
            >
                <AppShell.Navbar
                    style={{
                        background: '#111',
                        border: 'none'
                    }}
                    className={styles.pagelist}
                >
                    <p onClick={() => setCurrent('basics')}>Basics</p>
                    <p onClick={() => setCurrent('request')}>EndRequest</p>
                    <p onClick={() => setCurrent('response')}>EndResponse</p>
                    <p onClick={() => setCurrent('mongo')}>MongoDB</p>
                    <p onClick={() => setCurrent('mysql')}>MySQL</p>
                    <p onClick={() => setCurrent('pass')}>Passwords</p>
                    <p onClick={() => setCurrent('jwt')}>JWT</p>
                </AppShell.Navbar>
                <AppShell.Header
                    style={{
                        background: '#111',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 15px'
                    }}
                >
                    <Image
                        alt=""
                        src="/endjs-logo.png"
                        width={50}
                        height={50}
                    />
                    <Burger 
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                    />
                </AppShell.Header>

                <AppShell.Main>
                    <div className={styles.body}>
                        <ReactMarkdown 
                            rehypePlugins={[rehypeHighlight]}
                            remarkPlugins={[remarkGfm, remarkDirective]}
                        >
                            {contents[current]}
                        </ReactMarkdown>
                    </div>
                </AppShell.Main>
            </AppShell>
        </>
    )
};
export default Docs;