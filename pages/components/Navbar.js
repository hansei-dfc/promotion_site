import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <div className="w-full h-[7%] flex items-center justify-end pr-[2%]">
                <div className="flex space-x-[100px]">
                    <Link href="/"><h1 className="hover:cursor-pointer text-white font-bold text-[32px]">Home</h1></Link>
                    <Link href="/about"><h1 className="hover:cursor-pointer text-white font-bold text-[32px]">About</h1></Link>
                    <Link href="https://hanseidfc.github.io/"><h1 className="hover:cursor-pointer text-white font-bold text-[32px]">Blog</h1></Link>
                    <Link href="/contact"><h1 className="hover:cursor-pointer text-white font-bold text-[32px]">Contact</h1></Link>
                </div>
            </div>
        </>
    )
}