'use client';

const get = async<T = any>(url: string): Promise<T | null> =>
{
    try
    {
        let res: Response = await fetch(url, {
            method: 'GET'
        });
        let data: T = await res.json();
        return data;
    }
    catch (e) { return null; };
};

export { get };