'use client'

import { Star } from 'lucide-react'

interface CustomerRatingBadgeProps {
    variant?: 'horizontal' | 'card'
    rating?: number
    customerCount?: string
    className?: string
}

export function CustomerRatingBadge({
    variant = 'horizontal',
    rating = 4.9,
    customerCount = '2000+',
    className = ''
}: CustomerRatingBadgeProps) {

    // User avatar icons - blue circular icons
    const UserAvatars = () => (
        <div className="flex items-center -space-x-2 rtl:space-x-reverse">
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-[#3B82F6] border-2 border-white flex items-center justify-center"
                >
                    <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </div>
            ))}
        </div>
    )

    // Star rating display
    const StarRating = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
        const sizeClasses = {
            sm: 'w-4 h-4',
            md: 'w-5 h-5',
            lg: 'w-6 h-6'
        }

        return (
            <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`${sizeClasses[size]} ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        )
    }

    // Horizontal badge variant (like in first reference image)
    if (variant === 'horizontal') {
        return (
            <div className={`inline-flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2 shadow-sm ${className}`}>
                {/* Star with rating */}
                <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-sm">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-800 font-bold">{rating}</span>
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300" />

                {/* Customer count text */}
                <span className="text-gray-600 font-medium whitespace-nowrap">
                    {customerCount} عميل راضي
                </span>

                {/* User avatars */}
                <UserAvatars />
            </div>
        )
    }

    // Card variant (like in second reference image)
    return (
        <div className={`bg-amber-50 rounded-2xl p-6 shadow-lg max-w-xs ${className}`}>
            {/* Stars */}
            <div className="flex justify-center mb-3">
                <StarRating size="lg" />
            </div>

            {/* Rating number */}
            <div className="text-center mb-2">
                <span className="text-4xl font-bold text-gray-800">{rating}</span>
                <span className="text-2xl text-gray-500">/5</span>
            </div>

            {/* Customer count */}
            <p className="text-center text-gray-600">
                من أكثر من {customerCount.replace('+', '')} عميل
            </p>
        </div>
    )
}

export default CustomerRatingBadge
