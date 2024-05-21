import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'
import { ChildrenOnly } from '@/types'

export const metadata: Metadata = {
    title: `Contact Us | ${APP_NAME}`
}

export default function ContactLayout({children}: ChildrenOnly) {
    return children
}