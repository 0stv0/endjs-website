'use client';

import Navbar from "@/components/Navbar";
import Squares from "@/components/Squares";
import styles from '@/sass/index.module.sass';
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { faCar, faFeather, faKey, faQuoteRight, faToolbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon, Badge, Button, ThemeIcon } from "@mantine/core";

const Index = () =>
{
    return (
        <>
            <section
                className={styles.hero}
            >
                <Squares
                    direction="diagonal"
                    speed={0.2}
                    squareSize={80}
                    borderColor={"#ffffff30"}
                    hoverFillColor={"transparent"}
                />
                <Navbar />
                <article
                    className={styles.welcome}
                >
                    <div className={styles.info}>
                        <Badge
                            size="xl"
                            style={{marginBottom: 10}}
                            variant="light"
                            color="#7b32a8"
                            styles={{
                                root: {
                                    border: '1px solid #7b32a8'
                                }
                            }}
                        >npm install endjs@1.0.0</Badge>
                        <h1>Code less</h1>
                        <h1>Build faster</h1>
                        <Button
                            variant="light"
                            color="#7b32a8"
                            styles={{
                                root: {
                                    border: '1px solid #7b32a8'
                                }
                            }}
                        >Documentation</Button>
                    </div>
                    <div className={styles.console}>
                        <div className={styles.header}>
                            <p>TS - Simple Route</p>
                            <div className={styles.btns}>
                                <div className={styles.btn}></div>
                                <div className={styles.btn}></div>
                                <div className={styles.btn}></div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <p><span style={{color: '#9546c7'}}>const</span> port: <span style={{color: '#c66ffc'}}>number</span> = <span style={{color: '#591c80'}}>3000</span>;</p>
                            <p><span style={{color: '#9546c7'}}>const</span> sv: <span style={{color: '#c66ffc'}}>Server</span> = <span style={{color: '#9546c7'}}>new</span> Server(<span style={{color: '#591c80'}}>port</span>);</p>
                            <br />
                            <p>sv.<span style={{color: '#c93ad6'}}>addRoute</span>(<span style={{color: '#c66ffc'}}>'/test'</span>, <span style={{color: '#c66ffc'}}>'GET'</span>, async(<span style={{color: '#c66ffc'}}>req: EndRequest</span>, <span style={{color: '#c66ffc'}}>res: EndResponse</span>) {"=> {"}</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;res.<span style={{color: '#c93ad6'}}>setStatus</span>(200);</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;res.<span style={{color: '#c93ad6'}}>send</span>{"({message: 'test message')};"}</p>
                            <p>{"})"}</p>
                            <br />
                            <p>sv.<span style={{color: '#c93ad6'}}>listen</span>(() {"=> {"}</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: '#c93ad6'}}>console.log</span>(`API listening on http://localhost:${"{port}"}`);</p>
                            <p>{"})"}</p>
                        </div>
                    </div>
                </article>
                <div className={styles.shadows}>
                    <div className={styles.shadow}></div>
                    <div className={styles.shadow}></div>
                </div>
            </section>

            <section
                className={styles.about}
            >
                <h1>About EndJS</h1>
                <article
                    className={styles.boxes}
                >
                    <div className={styles.box}>
                        <div className={styles.title}>
                            <ThemeIcon
                                variant="light"
                                color="#7b32a8"
                            >
                                <FontAwesomeIcon icon={faFeather} />
                            </ThemeIcon>
                            <h5>Minimal Surface</h5>
                        </div>
                        <p>EndJS gives you only what you need, no decorators, no hidden state. Just clean, predictable routing logic - the way backend should be.</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.title}>
                            <ThemeIcon
                                variant="light"
                                color="#7b32a8"
                            >
                                <FontAwesomeIcon icon={faQuoteRight} />
                            </ThemeIcon>
                            <h5>TypeScript First</h5>
                        </div>
                        <p>Built entirely in TypeScript with strong types for requests, responses and helpers. Async handlers work out of the box - no wrappers, no hacks.</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.title}>
                            <ThemeIcon
                                variant="light"
                                color="#7b32a8"
                            >
                                <FontAwesomeIcon icon={faToolbox} />
                            </ThemeIcon>
                            <h5>Built-in Helpers</h5>
                        </div>
                        <p>EndJS includes optional modules for MongoDB, MySQL, password hashing and token handling. Use them if you want - ignore them if you don't.</p>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.title}>
                            <ThemeIcon
                                variant="light"
                                color="#7b32a8"
                            >
                                <FontAwesomeIcon icon={faKey} />
                            </ThemeIcon>
                            <h5>Fully Unopinionated</h5>
                        </div>
                        <p>EndJS runs on plain HTTP under the hood - no custom runtime, no hidden abstractions. You can wrap it, extend it, or migrate away from it without friction.</p>
                    </div>
                </article>
            </section>

            <section
                className={styles.ready}
            >
                <h3>Ready to build with EndJS?</h3>
                <div className={styles.btns}>
                    <Button
                        variant="light"
                        color="#7b32a8"
                    >Read the docs</Button>
                    <Button
                        variant="light"
                        color="gray"
                    >GitHub Repo</Button>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>2025 &copy; EndJS by stevku | MIT License</p>
                <div className={styles.socials}>
                    <ActionIcon
                        variant="light"
                        color="#7b32a8"
                        size="xl"
                        onClick={() => window.open('https://github.com/0stv0/endjs')}
                    >
                        <FontAwesomeIcon size="xl" icon={faGithub} />
                    </ActionIcon>
                    <ActionIcon
                        variant="light"
                        color="#7b32a8"
                        size="xl"
                        onClick={() => window.open('https://www.npmjs.com/package/endjs')}
                    >
                        <FontAwesomeIcon size="xl" icon={faNpm} />
                    </ActionIcon>
                </div>
            </footer>
        </>
    )
};
export default Index;