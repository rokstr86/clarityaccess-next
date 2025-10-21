import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import './globals.css'

export const metadata: Metadata = {title:'Clarity Access — Ship clearer writing, faster',description:'Edit, polish, and publish clear writing across your team.',metadataBase:new URL('https://example.com'),icons:[{rel:'icon',url:'/favicon.ico'}],openGraph:{title:'Clarity Access',description:'Edit, polish, and publish clear writing across your team.',type:'website'},twitter:{card:'summary_large_image'}}
export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang="en" suppressHydrationWarning><body><ThemeProvider attribute="class" defaultTheme="system" enableSystem><Header/><main>{children}</main><Footer/></ThemeProvider></body></html>) }
