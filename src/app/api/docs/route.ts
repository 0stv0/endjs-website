'use server';

import { NextRequest, NextResponse } from "next/server";
import fs from 'fs/promises';
import path from "path";

const GET = async(req: NextRequest) =>
{
    let contents: Record<string, string> = {};

    let files: string[] = await fs.readdir(path.join(process.cwd(), "public/docs"));
    for (let file of files)
        contents[file.replace('.md', '')] = await fs.readFile(path.join(process.cwd(), "public/docs", file), 'utf8');

    return NextResponse.json(contents);
};
export { GET };