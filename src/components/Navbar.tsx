'use client';

import styles from '@/sass/components/Navbar.module.sass';
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';

const Navbar = () =>
{
    const [opened, { toggle }] = useDisclosure();

    return (
        <>
            <div className={styles.nav_wrapper}>
                <nav
                    className={styles.nav}
                >
                    <Image
                        alt=''
                        src="/endjs-logo.png"
                        width={50}
                        height={50}
                    />
                    <ul>
                        <li><a href=''>Docs</a></li>
                        <li><a href=''>NPM</a></li>
                        <li><a href=''>GitHub</a></li>
                    </ul>
                    <Burger 
                        opened={opened}
                        onClick={toggle}
                        size="lg"
                        hiddenFrom='sm'
                    />
                </nav>
            </div>
        </>
    );
};
export default Navbar;