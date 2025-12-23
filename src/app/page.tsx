'use client';

import Navbar from "@/components/Navbar";
import Squares from "@/components/Squares";
import styles from '@/sass/index.module.sass';
import { Badge, Button } from "@mantine/core";

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
                        >npm i endjs@1.0.0</Badge>
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
                            <p>TS</p>
                            <div className={styles.btns}>
                                <div className={styles.btn}></div>
                                <div className={styles.btn}></div>
                                <div className={styles.btn}></div>
                            </div>
                        </div>
                        <div className={styles.body}>
                            <p><span style={{color: 'pink'}}>const</span> port: <span style={{color: '#a1f988ff'}}>number</span> = <span style={{color: '#5ab441ff'}}>3000</span>;</p>
                            <p><span style={{color: 'pink'}}>const</span> sv: <span style={{color: '#a1f988ff'}}>Server</span> = <span style={{color: 'pink'}}>new</span> Server(<span style={{color: '#5ab441ff'}}>port</span>);</p>
                            <br />
                            <p>sv.<span style={{color: 'orange'}}>addRoute</span>(<span style={{color: '#a1f988ff'}}>'/test'</span>, <span style={{color: '#a1f988ff'}}>'GET'</span>, async(<span style={{color: '#a1f988ff'}}>req: EndRequest</span>, <span style={{color: '#a1f988ff'}}>res: EndResponse</span>) {"=> {"}</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;res.<span style={{color: 'orange'}}>setStatus</span>(200);</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;res.<span style={{color: 'orange'}}>send</span>{"({message: 'test message')};"}</p>
                            <p>{"})"}</p>
                            <br />
                            <p>sv.<span style={{color: 'orange'}}>listen</span>(() {"=> {"}</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color: 'orange'}}>console.log</span>(`API listening on http://localhost:${"{port}"}`)</p>
                            <p>{"}"}</p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
};
export default Index;