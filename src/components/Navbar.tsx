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
            <ul style={{left: opened ? '0' : '-100%'}} className={styles.mpages}>
                <li><a href='/docs'>Docs</a></li>
                <li><a href='https://www.npmjs.com/package/endjs' target='_blank'>NPM</a></li>
                <li><a href='https://github.com/0stv0/endjs' target='_blank'>GitHub</a></li>
                <p>2025 &copy; Created by stevku<br />MIT License</p>
            </ul>
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
                        <li><a href='/docs'>Docs</a></li>
                        <li><a href='https://www.npmjs.com/package/endjs' target='_blank'>NPM</a></li>
                        <li><a href='https://github.com/0stv0/endjs' target='_blank'>GitHub</a></li>
                    </ul>
                    <Burger 
                        opened={opened}
                        onClick={toggle}
                        size="md"
                        hiddenFrom='sm'
                    />
                </nav>
            </div>
        </>
    );
};
export default Navbar;