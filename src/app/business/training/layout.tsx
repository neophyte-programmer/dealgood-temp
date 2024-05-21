import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'
import { ChildrenOnly } from '@/types'

export const metadata: Metadata = {
    title: `Training | ${APP_NAME}`
}

export default function TrainingLayout({children}: ChildrenOnly) {
    return children
}